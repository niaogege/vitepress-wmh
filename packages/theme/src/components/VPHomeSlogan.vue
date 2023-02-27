<script setup lang="ts" name="VPHomeMain">
import { useData } from "vitepress"
import { WmhThemeConfig } from "../types/config"
import { useHomeConfig } from "../composables/config"
const { theme } = useData<WmhThemeConfig.Config>()
const { setCustomSlogan } = useHomeConfig()
console.log("setCustomSlogan", theme)
const title = setCustomSlogan && setCustomSlogan()
</script>
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped></style>
