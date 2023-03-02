import { DefaultTheme, UserConfig } from 'vitepress';

/**
 * 传入参数配置类型
 */
declare namespace WmhThemeConfig {
    /**
     * 首页配置
     */
    interface HomePageSetting {
        name?: string;
        motto?: string;
        inspiring?: string;
        pageSize?: number | undefined;
    }
    interface PageMeta {
        title: string;
        date: string;
        tag?: string[];
        description?: string;
        cover?: string;
        sticky?: number;
        author?: string;
        hidden?: boolean;
        layout?: string;
    }
    /**
     * 页面配置
     */
    interface PageData {
        route: string;
        meta: PageMeta;
    }
    /**
     * 全局文章配置
     */
    interface GlobalPagesData {
        /**
         * 是否展示阅读相关
         */
        readingTime?: boolean;
        /**
         * 是否展示评论 首页除外
         */
        displayComment?: boolean;
        /**
         * 全局展示作者
         */
        author?: string;
    }
    /**
     * 友链配置
     */
    interface FriendLink {
        name: string;
        des: string;
        url: string;
        avatar: string;
    }
    /**
     * 动态设置首页banner Title
     */
    interface HomeDynamicConfig {
        handleChangeSlogan?: (oldSlogan: string) => string | Promise<string>;
        setCustomSlogan?: () => string;
    }
    /**
     * 博客all配置
     */
    interface BlogConfig {
        pagesData: PageData[];
        srcDir?: string;
        author?: string;
        homeDynamicConfig?: HomeDynamicConfig;
        globalPagesData?: GlobalPagesData;
        friendLink?: FriendLink[];
    }
    interface Config extends DefaultTheme.Config {
        blog: BlogConfig;
    }
}

declare function getThemeConfig(cfg?: Partial<WmhThemeConfig.BlogConfig>): {
    blog: {
        pagesData: WmhThemeConfig.PageData[];
        srcDir?: string | undefined;
        author?: string | undefined;
        homeDynamicConfig?: WmhThemeConfig.HomeDynamicConfig | undefined;
        globalPagesData?: WmhThemeConfig.GlobalPagesData | undefined;
        friendLink?: WmhThemeConfig.FriendLink[] | undefined;
    };
    sidebar: {
        text: string;
        items: never[];
    }[];
};
declare function defineConfig(config: UserConfig<WmhThemeConfig.Config>): UserConfig<WmhThemeConfig.Config>;
declare function defineConfigWithTheme<ThemeConfig>(config: UserConfig<ThemeConfig>): UserConfig<ThemeConfig>;

export { WmhThemeConfig, defineConfig, defineConfigWithTheme, getThemeConfig };
