import DefaultTheme from "vitepress/theme"
import { Theme } from "vitepress"
import "./styles/index.css"
import VPApp from "./components/VPApp.vue"
import VPNotFound from "./components/VPNotFound.vue"
import { withConfigProvider } from "./composables/config"

const VPTheme: Theme = {
  ...DefaultTheme,
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound
}

export default VPTheme

export * from "./types/config"
