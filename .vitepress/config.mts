// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.js'   // 导入生成的侧边栏

export default defineConfig({
  // 用户站点不需要 base，删除或留空
  lang: 'en-US',
  title: '野山杂货铺',
  description: '一个用来记录个人思绪的地方',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // 导航栏 Logo 或者使用亮色/暗色两套：
    logo: {
      light: '/logo-light.png',
      dark: '/logo-dark.png'
    },
    siteTitle: false,
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Yeshan-Taoist' }],

    //文章上下篇功能
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})