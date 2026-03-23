// scripts/generateSidebar.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const POSTS_DIR = path.resolve(__dirname, '../docs')
const OUTPUT_FILE = path.resolve(__dirname, '../.vitepress/sidebar.js')

function generateSidebar() {
  const categories = fs.readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  const sidebar = {}

  for (const cat of categories) {
    const catPath = path.join(POSTS_DIR, cat)
    const items = []

    // 递归读取该分类下的所有 .md 文件（支持子目录）
    function walkDir(dir, basePath = '') {
      const files = fs.readdirSync(dir, { withFileTypes: true })
      for (const file of files) {
        const fullPath = path.join(dir, file.name)
        const relativePath = path.join(basePath, file.name)
        if (file.isDirectory()) {
          walkDir(fullPath, relativePath)
        } else if (file.isFile() && file.name.endsWith('.md')) {
          // 读取 frontmatter 获取标题，如果没有则用文件名
          let title = file.name.replace(/\.md$/, '')
          const content = fs.readFileSync(fullPath, 'utf-8')
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1]
            const titleMatch = frontmatter.match(/title:\s*(.+)/)
            if (titleMatch) title = titleMatch[1].trim()
          }
          // 链接格式：去掉 .md 后缀，保留路径（相对于 docs）
          const link = `/docs/${cat}/${relativePath.replace(/\.md$/, '')}`
          items.push({ text: title, link })
        }
      }
    }

    walkDir(catPath, '')
    if (items.length > 0) {
      // 侧边栏键为 /docs/分类名/
      sidebar[`/docs/${cat}/`] = [
        {
          text: cat,
          items: items
        }
      ]
    }
  }

  // 写入文件，使用 ES module 导出
  const content = `export const sidebar = ${JSON.stringify(sidebar, null, 2)}`
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')
  console.log(`✅ Sidebar generated at ${OUTPUT_FILE}`)
}

generateSidebar()
