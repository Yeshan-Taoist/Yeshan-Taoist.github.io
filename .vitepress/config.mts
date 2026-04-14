// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.js'
import { vitepressPluginLegend } from 'vitepress-plugin-legend'

export default defineConfig({
  // 用户站点不需要 base，删除或留空
  lang: 'en-US',
  title: '野山杂货铺',
  description: '一个用来记录个人思绪的地方',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  appearance: false,
  themeConfig: {
    siteTitle: false,
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '更多',
        items: [
          { text: '博客主页', link: '/' },
          { text: '笔由随心', link: 'https://yeshan-bookself.yeshan-taoist.cn/' }
        ]
      }
    ],

    // 侧边栏
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Yeshan-Taoist' }],

    //文章上下篇功能
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  // 关键：通过 markdown 配置启用插件
  markdown: {
    config(md) {
      vitepressPluginLegend(md, {
        markmap: {
          showToolbar: true,
          // 其他 markmap 选项
        },
        mermaid: false, // 或 false 禁用
        infographic: {
          showToolbar: false,
          // 其他 infographic 选项
        },
      });
    },
  },
})