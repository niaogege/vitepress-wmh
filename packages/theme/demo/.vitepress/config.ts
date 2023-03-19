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
      avatar: "https://www.bythewayer.com/img/logo1.webp",
      url: "https://bythewayer.com"
    }
  ],
  // 文章默认作者
  author: "chendap",
  // 文章全局配置
  globalPagesData: {
    readingTime: true,
    displayComment: true
  },
  recommend: {
    total: 6,
    priority: "weight"
  }
})

export default defineConfigWithTheme<WmhThemeConfig.Config>({
  title: "WmhTheme",
  description: "基于vitepress自定义主题",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "https://www.bythewayer.com/img/logo1.webp"
      }
    ]
  ],
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
    logo: "https://www.bythewayer.com/img/logo1.webp",
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
      }
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/niaogege/love">MIT License</a>.',
      copyright:
        'Copyright © 2022-present <a href="https://github.com/niaogege/love">WmhTheme</a>'
    },
    sidebar: {
      "/guide/": sidebarWork(),
      "/config/": sidebarWork()
    }
  }
})
function sidebarWork() {
  return [
    {
      text: "guide",
      items: [{ text: "综述", link: "/guide/index" }]
    }
  ]
}
