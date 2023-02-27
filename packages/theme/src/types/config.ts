// 定义配置参数类型
import { DefaultTheme } from "vitepress"

/**
 * 传入参数配置类型
 */
export namespace WmhThemeConfig {
  // 定义页面元数据
  export interface PageMeta {
    title: string
    date: string
    tag?: string[]
    description?: string
    cover?: string
    sticky?: number
    author?: string
    hidden?: boolean
    layout?: string
  }
  /**
   * 页面配置
   */
  export interface PageData {
    route: string
    meta: PageMeta
  }
  /**
   * 首页配置
   */
  export interface HomeBlog {
    name?: string
    motto?: string
    inspiring?: string
    pageSize?: number | undefined
  }

  export interface ArticleConfig {
    readingTime?: boolean
    displayComment?: boolean
  }
  /**
   * 友链配置
   */
  export interface FriendLink {
    name: string
    des: string
    url: string
    avatar: string
  }
  export interface HomeConfig {
    handleChangeSlogan?: (oldSlogan: string) => string | Promise<string>
    setCustomSlogan?: () => string
  }
  /**
   * 博客配置
   */
  export interface BlogConfig {
    pagesData: PageData[]
    srcDir?: string
    author?: string
    home?: HomeBlog
    article?: ArticleConfig
    friendLink?: FriendLink[]
  }

  export interface Config extends DefaultTheme.Config {
    blog: BlogConfig
  }
}
