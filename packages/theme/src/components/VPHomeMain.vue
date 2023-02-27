<script setup lang="ts" name="VPHomeMain">
import { useData } from "vitepress"
import { computed } from "vue"
import { WmhThemeConfig } from "../types/config"
import { useArticles } from "../composables/config"
import VPHomeSlogan from "./VPHomeSlogan.vue"
const { theme } = useData<WmhThemeConfig.Config>()
const docs = useArticles()
const wikiList = computed(() => {
  const data = docs.value
    .filter((v) => v.meta.date && v.meta.title)
    .filter((v) => !v.meta.hidden)
  data.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date))
  return data
})
const filterData = computed(() => {
  return wikiList.value.filter((v) => v)
})
console.log(filterData, "DOCS")
const globalAuthor = computed(() => theme.value.blog.author || "")
</script>
<template>
  <div>
    <section>
      <VPHomeSlogan />
    </section>
    <h1>author: {{ globalAuthor }}</h1>
    <div v-for="v in filterData" key="v.route">
      <h1>title: {{ v.meta.title }}</h1>
    </div>
  </div>
</template>

<style scoped></style>
