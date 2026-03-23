// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.js'   // 导入生成的侧边栏

export default defineConfig({
  // 用户站点不需要 base，删除或留空
  title: '野山杂货铺',
  description: '一个用来记录个人思绪的地方',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar,   // 直接使用
    socialLinks: [{ icon: 'github', link: 'https://github.com/你的用户名' }]
  }
})