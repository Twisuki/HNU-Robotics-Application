import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "学生手册",
  description: "湖南大学机器人学院学生手册",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
