// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.js'   // 导入生成的侧边栏

export default defineConfig({
  // 用户站点不需要 base，删除或留空
  lang: 'en-US',
  title: '野山杂货铺',
  description: '一个用来记录个人思绪的地方',
  head: [
    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Yeshan-Taoist' }]
  }
})