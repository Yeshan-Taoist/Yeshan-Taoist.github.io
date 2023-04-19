// 顶部导航
import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "自我介绍",
    link: "/guide/about",
    activeMatch: "/guide/",
  },
  {
    text: "常用工具",
    link: "/tools/index",
    activeMatch: "/tools/",
  },
  {
    text: "化工相关",
    link: "/chemical/index",
    activeMatch: "/chemical/",
  },
];
