// scripts/generate-posts-data.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DOCS_DIR = path.resolve(__dirname, '../docs')
const OUTPUT_FILE = path.resolve(__dirname, '../posts.js')

// 读取目录的 _category_.json 配置
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

// 从文件读取元数据
function getMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  let title = path.basename(filePath, '.md')
  let date = null
  let order = null
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1]
    const titleMatch = frontmatter.match(/title:\s*(.+)/)
    if (titleMatch) title = titleMatch[1].trim()
    const dateMatch = frontmatter.match(/date:\s*(.+)/)
    if (dateMatch) date = dateMatch[1].trim()
    const orderMatch = frontmatter.match(/order:\s*(\d+)/)
    if (orderMatch) order = parseInt(orderMatch[1], 10)
  }
  return { title, date, order }
}

// 递归收集所有文章，并返回分类结构
function collectPostsWithCategories(dirPath, relativePath = '') {
  const categories = new Map() // key: 分类名, value: { config, posts: [] }
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    const relPath = relativePath ? `${relativePath}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      // 忽略 _category_.json 所在的目录（它会被单独处理）
      if (entry.name === '_category_') continue

      const subResult = collectPostsWithCategories(fullPath, relPath)
      // 合并子目录的分类到当前分类（如果有）
      for (const [cat, data] of subResult.categories) {
        if (!categories.has(cat)) categories.set(cat, { config: null, posts: [] })
        categories.get(cat).posts.push(...data.posts)
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const { title, date, order } = getMetadata(fullPath)
      const url = `/docs/${relPath.replace(/\.md$/, '')}`
      // 分类取第一级目录名（relativePath 的第一部分）
      const category = relativePath.split('/')[0] || '未分类'
      if (!categories.has(category)) {
        // 尝试读取该一级目录的 _category_.json
        const catPath = path.join(DOCS_DIR, category)
        const config = getCategoryConfig(catPath)
        categories.set(category, { config, posts: [] })
      }
      categories.get(category).posts.push({ url, title, date, order })
    }
  }

  return { categories }
}

// 对分类和文章进行排序
function sortCategories(categoriesMap) {
  const sortedCategories = []

  for (const [catName, { config, posts }] of categoriesMap.entries()) {
    // 分类排序：优先使用 config.order，否则按名称字母顺序
    const catOrder = config?.order ?? Infinity
    // 文章排序：优先使用文章自身的 order，否则按日期倒序（若无日期则按标题）
    const sortedPosts = [...posts].sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order
      if (a.order !== undefined) return -1
      if (b.order !== undefined) return 1
      if (a.date && b.date) return new Date(b.date) - new Date(a.date)
      if (a.date) return -1
      if (b.date) return 1
      return a.title.localeCompare(b.title)
    })
    sortedCategories.push({
      name: catName,
      label: config?.label || catName,
      order: catOrder,
      posts: sortedPosts
    })
  }

  // 按分类 order 升序，然后按名称
  sortedCategories.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order
    return a.name.localeCompare(b.name)
  })

  return sortedCategories
}

// 生成文章数据文件（包含分类信息和所有文章列表）
function generatePostsData() {
  const { categories } = collectPostsWithCategories(DOCS_DIR)
  const sortedCategories = sortCategories(categories)

  // 同时生成一个扁平的所有文章列表（方便分页页面直接使用）
  const allPosts = []
  for (const cat of sortedCategories) {
    allPosts.push(...cat.posts)
  }

  const output = {
    categories: sortedCategories,
    allPosts
  }

  const content = `export const postsData = ${JSON.stringify(output, null, 2)}`
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')
  console.log(`✅ Posts data generated at ${OUTPUT_FILE}`)
}

generatePostsData()