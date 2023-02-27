import { DefaultTheme, UserConfig } from 'vitepress';

/**
 * 传入参数配置类型
 */
declare namespace WmhThemeConfig {
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
     * 首页配置
     */
    interface HomeBlog {
        name?: string;
        motto?: string;
        inspiring?: string;
        pageSize?: number | undefined;
    }
    interface ArticleConfig {
        readingTime?: boolean;
        displayComment?: boolean;
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
    interface HomeConfig {
        handleChangeSlogan?: (oldSlogan: string) => string | Promise<string>;
        setCustomSlogan?: () => string;
    }
    /**
     * 博客配置
     */
    interface BlogConfig {
        pagesData: PageData[];
        srcDir?: string;
        author?: string;
        home?: HomeBlog;
        article?: ArticleConfig;
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
        home?: WmhThemeConfig.HomeBlog | undefined;
        article?: WmhThemeConfig.ArticleConfig | undefined;
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
