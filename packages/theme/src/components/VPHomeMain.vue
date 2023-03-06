<script setup lang="ts" name="VPHomeMain">
import { useData } from "vitepress"
import { computed } from "vue"
import { WmhThemeConfig } from "../types/config"
import { useArticles } from "../composables/config"
import VPHomeSlogan from "./VPHomeSlogan.vue"
import VPHomeMainItem from "./VPHomeMainItem.vue"
import VPHomeRecommend from "./VPHomeRecommend.vue"
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
      <VPHomeRecommend />
    </section>
    <template v-for="v in filterData" key="v.route">
      <VPHomeMainItem
        :route="v.route"
        :title="v.meta.title"
        :description="v.meta.description"
        :date="v.meta.date"
        :tag="v.meta.tag"
        :cover="v.meta.cover"
        :author="v.meta.author"
      />
    </template>
  </div>
</template>

<style scoped></style>
