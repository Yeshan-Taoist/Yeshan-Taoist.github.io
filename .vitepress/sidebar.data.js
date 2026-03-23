// .vitepress/sidebar.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('docs/**/*.md', {
  transform(raw) {
    const sidebarMap = new Map()

    raw.forEach(({ url, frontmatter }) => {
      // url 示例：/docs/A-tech/api-examples
      const parts = url.split('/').filter(Boolean)
      if (parts.length < 2 || parts[0] !== 'docs') return

      const category = parts[1]                 // 分类名，如 "A-tech"
      const key = `/docs/${category}/`          // 侧边栏匹配路径
      const title = frontmatter.title || parts[parts.length - 1]

      if (!sidebarMap.has(key)) {
        sidebarMap.set(key, { text: category, items: [] })
      }
      sidebarMap.get(key).items.push({ text: title, link: url })
    })

    const sidebar = {}
    for (const [key, group] of sidebarMap) {
      sidebar[key] = [group]
    }
    return sidebar
  }
})