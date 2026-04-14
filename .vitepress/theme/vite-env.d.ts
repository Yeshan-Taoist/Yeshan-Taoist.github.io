// .vitepress/theme/vite-env.d.ts
declare module '*.css' {
  const content: string
  export default content
}