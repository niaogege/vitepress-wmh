import {
  getThemeConfig,
  defineConfigWithTheme,
  WmhThemeConfig
} from "@chendap/vitepress-wmh/server"
import path from "path"
import packageJSON from "../../package.json"

const HomePath = path.join(__dirname, "../../src/index.ts")
// 自定义配置项
// 静态配置项
const customTheme = getThemeConfig({
  friendLink: [
    {
      name: "陈大鹏",
      des: "代码改变世界",
      avatar:
        "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://bythewayer.com"
    }
  ],
  // 文章默认作者
  author: "chendap",
  // 文章全局配置
  article: {
    readingTime: true,
    displayComment: true
  }
})

export default defineConfigWithTheme<WmhThemeConfig.Config>({
  title: "WmhTheme",
  vite: {
    server: {
      host: "0.0.0.0"
    },
    resolve: {
      alias: {
        "@chendap/vitepress-wmh": HomePath
      }
    }
  },
  themeConfig: {
    ...customTheme,
    nav: [
      {
        text: `v${packageJSON.version}`,
        link: "/changelog"
      },
      { text: "Guide", link: "/guide/index" },
      { text: "Config", link: "/config/index" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/niaogege"
      },
      {
        icon: "linkedin",
        link: "https://bythewayer.com"
      }
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/niaogege/love">MIT License</a>.',
      copyright:
        'Copyright © 2022-present <a href="https://github.com/niaogege/love">WmhTheme</a>'
    }
  }
})
