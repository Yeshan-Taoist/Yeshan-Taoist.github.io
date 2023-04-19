import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "引导",
    collapsed: false,
    items: [
      { text: "首页", link: "/" },
      { text: "关于我", link: "/guide/about" },
      { text: "与我交流", link: "/guide/contact" },
    ],
  },
  {
    text: "常用工具",
    collapsed: false,
    items: [
      { text: "Markdown 语法整理", link: "/tools/markdown" },
      {
        text: "AutoCAD-Plant-3D-使用指导",
        link: "/tools/AutoCAD-Plant-3D-guide",
      },
    ],
  },
];
