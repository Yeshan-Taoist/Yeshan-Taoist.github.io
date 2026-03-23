import { defineConfig } from 'vitepress'
import sidebarData from './sidebar.data.js'

export default async () => {
  const sidebar = await sidebarData.load()
  return defineConfig({
    base:'/',
    title: '野山杂货铺',
    description: '一个用来记录个人思绪的地方',
    themeConfig: {
      nav: [{ text: '首页', link: '/' }],
      sidebar
    }
  })
}