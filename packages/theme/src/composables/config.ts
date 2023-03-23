import { useData, useRoute } from "vitepress";
import {
  Component,
  computed,
  defineComponent,
  h,
  inject,
  InjectionKey,
  provide,
  ref,
  Ref,
  onMounted,
  onUnmounted,
} from "vue";
import type { WmhThemeConfig } from "../types/config";
const configSymbol: InjectionKey<Ref<WmhThemeConfig.Config>> =
  Symbol("theme-config");

const homeConfigSymbol: InjectionKey<WmhThemeConfig.HomeDynamicConfig> =
  Symbol("home-config");

/**
 * @param App
 * @returns
 */
export function withConfigProvider(App: Component) {
  return defineComponent({
    name: "ConfigProvider",
    props: {
      setCustomSlogan: {
        type: Function,
        required: false,
      },
    },
    setup(props, { slots }) {
      provide(homeConfigSymbol, props as WmhThemeConfig.HomeDynamicConfig);
      const { theme } = useData();
      const config = computed(() => resolveConfig(theme.value));
      provide(configSymbol, config);
      return () => h(App, null, slots);
    },
  });
}

/**
 * blog所有配置
 * @returns
 */
export function useConfig() {
  return {
    config: inject(configSymbol)!.value,
  };
}

/**
 * @returns blog单独配置
 */
export function useBlogConfig() {
  return inject(configSymbol)!.value.blog;
}

export function useHomeConfig(): WmhThemeConfig.HomeDynamicConfig {
  return inject(homeConfigSymbol)!;
}

/**
 * 博客页面级配置
 * @returns
 */
export function useArticles() {
  const blogConfig = useConfig();
  const articles = computed(() => blogConfig.config?.blog?.pagesData || []);
  return articles;
}

/**
 * 当前的文章
 * @returns
 */
export function useCurrentArticle() {
  const blogConfig = useConfig();
  const route = useRoute();
  const docs = computed(() => blogConfig.config.blog.pagesData);
  const currentArticle = computed(() =>
    docs.value.find((v) => v.route === route.path.replace(/.html$/, ""))
  );
  return currentArticle;
}

/**
 * homeStaticSetting
 * @param config
 * @returns
 */
export function useHomeStaticSetting() {
  const blogConfig = useConfig();
  console.log(blogConfig, "blogConfig");
  const homeStaticSetting = computed(
    () => blogConfig.config.blog.homeStaticSetting
  );
  return homeStaticSetting;
}

function resolveConfig(config: WmhThemeConfig.Config): WmhThemeConfig.Config {
  return {
    ...config,
    blog: {
      ...config?.blog,
      pagesData: config?.blog?.pagesData || [],
    },
  };
}

export function useWidth() {
  const w = ref(document.body.clientWidth);
  const h = ref(document.body.clientHeight);
  function update(e) {
    w.value = e.target.innerWidth;
    h.value = e.target.innerHeight;
  }
  onMounted(() => {
    window.addEventListener("resize", update);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });
  return {
    w,
    h,
  };
}
