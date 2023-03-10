// 定义配置参数类型
import { DefaultTheme } from "vitepress"

interface HomeBannerSetting {
  title: string
  color: string
}
/**
 * 传入参数配置类型
 */
export namespace WmhThemeConfig {
  /**
   * 首页配置
   */
  export interface HomePageSetting {
    name?: string
    motto?: string
    inspiring?: string
    pageSize?: number | undefined
  }

  // 定义页面元数据
  export interface PageMeta {
    title: string
    date: string
    tag?: string[]
    description?: string
    cover?: string
    author?: string
    hidden?: boolean
    layout?: string
    /**
     * 是否需要在首页推荐模块展示 数值越大 展示在最前面
     */
    recommend?: number | boolean
  }
  /**
   * 页面配置
   */
  export interface PageData {
    route: string
    meta: PageMeta
  }

  /**
   * 全局文章配置
   */
  export interface GlobalPagesData {
    /**
     * 是否展示阅读相关
     */
    readingTime?: boolean

    /**
     * 是否展示评论 首页除外
     */
    displayComment?: boolean

    /**
     * 全局展示作者
     */
    author?: string
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
  /**
   * 动态设置首页banner Title
   */

  export interface HomeDynamicConfig {
    setCustomSlogan?: () => string | HomeBannerSetting
  }

  /**
   * 推荐相关设置
   */
  export interface RecommendConfig {
    // 显示几个 默认显示6个
    total: number
    // 优先级 按照文章里的参数
    // 默认按照weight
    priority: "weight" | "date"
  }

  /**
   * 博客all配置
   */
  export interface BlogConfig {
    pagesData: PageData[]
    srcDir?: string
    author?: string
    homeDynamicConfig?: HomeDynamicConfig
    globalPagesData?: GlobalPagesData
    friendLink?: FriendLink[]
    recommend?: RecommendConfig
  }

  export interface Config extends DefaultTheme.Config {
    blog: BlogConfig
  }
}
