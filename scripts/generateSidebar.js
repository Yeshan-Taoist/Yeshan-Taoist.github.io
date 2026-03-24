// scripts/generateSidebar.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DOCS_DIR = path.resolve(__dirname, '../docs')
const OUTPUT_FILE = path.resolve(__dirname, '../.vitepress/sidebar.js')

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

function sortItems(items) {
  items.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order
    }
    if (a.order !== undefined) return -1
    if (b.order !== undefined) return 1
    return a.text.localeCompare(b.text)
  })
  items.forEach(item => {
    if (item.items) sortItems(item.items)
  })
}

function buildSidebarItems(dirPath, relativePath) {
  const items = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  const subDirs = entries.filter(e => e.isDirectory() && e.name !== '_category_')
  for (const subDir of subDirs) {
    const subDirPath = path.join(dirPath, subDir.name)
    const subRelative = relativePath ? `${relativePath}/${subDir.name}` : subDir.name
    const subItems = buildSidebarItems(subDirPath, subRelative)
    if (subItems.length === 0) continue

    const categoryConfig = getCategoryConfig(subDirPath)
    const text = categoryConfig?.label || subDir.name
    const collapsed = categoryConfig?.collapsed ?? true
    const order = categoryConfig?.order

    items.push({
      text,
      collapsed,
      items: subItems,
      order
    })
  }

  const files = entries.filter(e => e.isFile() && e.name.endsWith('.md'))
  for (const file of files) {
    const filePath = path.join(dirPath, file.name)
    const fileName = file.name.replace(/\.md$/, '')
    const link = `/docs/${relativePath ? `${relativePath}/${fileName}` : fileName}`
    const title = getTitleFromFile(filePath)
    items.push({ text: title, link })
  }

  // 对当前层级的 items 排序
  sortItems(items)
  return items
}

function generateSidebar() {
  const topLevelDirs = fs.readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)

  const sidebarItems = []

  for (const dirName of topLevelDirs) {
    const dirPath = path.join(DOCS_DIR, dirName)
    const categoryConfig = getCategoryConfig(dirPath)
    const groupTitle = categoryConfig?.label || dirName
    const collapsed = categoryConfig?.collapsed ?? false
    const order = categoryConfig?.order

    const items = buildSidebarItems(dirPath, dirName)
    if (items.length === 0) continue

    sidebarItems.push({
      text: groupTitle,
      collapsed,
      items,
      order
    })
  }

  // 对一级目录排序
  sortItems(sidebarItems)

  const content = `export const sidebar = ${JSON.stringify(sidebarItems, null, 2)}`
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')
  console.log(`✅ Global sidebar generated at ${OUTPUT_FILE}`)
}

generateSidebar()