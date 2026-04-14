// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import './style.css'
import { initComponent } from 'vitepress-plugin-legend/component'
import 'vitepress-plugin-legend/dist/index.css'

export default {
  extends: DefaultTheme,                               // 使用自定义布局
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    initComponent(app)
  },
} satisfies Theme