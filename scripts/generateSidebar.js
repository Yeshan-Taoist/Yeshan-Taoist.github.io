// scripts/generateSidebar.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DOCS_DIR = path.resolve(__dirname, '../docs')
const OUTPUT_FILE = path.resolve(__dirname, '../.vitepress/sidebar.js')

// 获取目录的友好配置（从 _category_.json 读取）
function getCategoryConfig(dirPath) {
  const configPath = path.join(dirPath, '_category_.json')
  if (fs.existsSync(configPath)) {
    try {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    } catch (e) {
      console.warn(`Failed to parse ${configPath}:`, e.message)
    }
  }
  return null
}

// 从文件读取标题（优先 frontmatter）
function getTitleFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1]
    const titleMatch = frontmatter.match(/title:\s*(.+)/)
    if (titleMatch) return titleMatch[1].trim()
  }
  return path.basename(filePath, '.md')
}

// 递归构建侧边栏项
function buildSidebarItems(dirPath, relativePath) {
  const items = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  // 子目录
  const subDirs = entries.filter(e => e.isDirectory() && e.name !== '_category_')
  for (const subDir of subDirs) {
    const subDirPath = path.join(dirPath, subDir.name)
    const subRelative = relativePath ? `${relativePath}/${subDir.name}` : subDir.name
    const subItems = buildSidebarItems(subDirPath, subRelative)
    if (subItems.length === 0) continue

    const categoryConfig = getCategoryConfig(subDirPath)
    const text = categoryConfig?.label || subDir.name
    const collapsed = categoryConfig?.collapsed ?? true

    items.push({
      text,
      collapsed,
      items: subItems
    })
  }

  // Markdown 文件
  const files = entries.filter(e => e.isFile() && e.name.endsWith('.md'))
  for (const file of files) {
    const filePath = path.join(dirPath, file.name)
    const fileName = file.name.replace(/\.md$/, '')
    const link = `/docs/${relativePath ? `${relativePath}/${fileName}` : fileName}`
    const title = getTitleFromFile(filePath)
    items.push({ text: title, link })
  }

  return items
}

// 生成全局侧边栏数组
function generateSidebar() {
  const topLevelDirs = fs.readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)

  const sidebarItems = []

  for (const dirName of topLevelDirs) {
    const dirPath = path.join(DOCS_DIR, dirName)
    const categoryConfig = getCategoryConfig(dirPath)
    const groupTitle = categoryConfig?.label || dirName
    const collapsed = categoryConfig?.collapsed ?? false   // 一级分类默认展开

    const items = buildSidebarItems(dirPath, dirName)
    if (items.length === 0) continue

    sidebarItems.push({
      text: groupTitle,
      collapsed,
      items
    })
  }

  // 导出为数组
  const content = `export const sidebar = ${JSON.stringify(sidebarItems, null, 2)}`
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')
  console.log(`✅ Global sidebar generated at ${OUTPUT_FILE}`)
}

generateSidebar()