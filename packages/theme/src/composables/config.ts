import { useData } from "vitepress"
import {
  Component,
  computed,
  defineComponent,
  h,
  inject,
  InjectionKey,
  provide,
  Ref
} from "vue"
import type { WmhThemeConfig } from "../types/config"
const configSymbol: InjectionKey<Ref<WmhThemeConfig.Config>> =
  Symbol("theme-config")

const homeConfigSymbol: InjectionKey<WmhThemeConfig.HomeConfig> =
  Symbol("home-config")

export function withConfigProvider(App: Component) {
  return defineComponent({
    name: "ConfigProvider",
    props: {
      setCustomSlogan: {
        type: Function,
        required: false
      }
    },
    setup(props, { slots }) {
      console.log(props, "PROPS")
      provide(homeConfigSymbol, props as WmhThemeConfig.HomeConfig)
      const { theme } = useData()
      const config = computed(() => resolveConfig(theme.value))
      provide(configSymbol, config)
      return () => h(App, null, slots)
    }
  })
}

export function useConfig() {
  return {
    config: inject(configSymbol)!.value
  }
}

export function useBlogConfig() {
  return inject(configSymbol)!.value.blog
}

export function useHomeConfig(): WmhThemeConfig.HomeConfig {
  return inject(homeConfigSymbol)!
}

export function useArticles() {
  const blogConfig = useConfig()
  const articles = computed(() => blogConfig.config?.blog?.pagesData || [])
  return articles
}

function resolveConfig(config: WmhThemeConfig.Config): WmhThemeConfig.Config {
  return {
    ...config,
    blog: {
      ...config?.blog,
      pagesData: config?.blog?.pagesData || []
    }
  }
}
