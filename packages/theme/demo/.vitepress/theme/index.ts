import VPTheme, { WmhThemeConfig } from "@chendap/vitepress-wmh"
import { h } from "vue"
import { EnhanceAppContext } from "vitepress"

const homeProps: WmhThemeConfig.HomeConfig = {
  setCustomSlogan() {
    return "未来不可期，能做的就是把握当下"
  }
}

export default {
  ...VPTheme,
  Layout: h(VPTheme.Layout, homeProps, {
    // "sidebar-top": () => h("div", "hello top"),
    // "sidebar-bottom": () => h("div", "hello bottom")
  }),
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    console.log(app, "CONTEXT")
  },
  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
}
