<script setup lang="ts" name="VPHomeMain">
import { useData } from "vitepress"
import { computed } from "vue"
import { WmhThemeConfig } from "../types/config"
import { useArticles } from "../composables/config"
import VPHomeSlogan from "./VPHomeSlogan.vue"
import VPHomeMainItem from "./VPHomeMainItem.vue"
import VPHomeRecommend from "./VPHomeRecommend.vue"
import VPHomeTag from "./VPHomeTag.vue"
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
const globalAuthor = computed(() => theme.value.blog.author || "")
</script>
<template>
  <section>
    <VPHomeSlogan />
    <VPHomeRecommend />
    <section
      class="flex justify-center flex-col p-4 md:flex-row-reverse md:mx-auto w-full lg:max-w-screen-lg relative"
    >
      <section class="w-full md:w-64 border-red-200 border-solid border-2">
        <VPHomeTag title="tags" />
      </section>
      <section class="md:order-last flex-auto lg:pr-6 md:pr-4">
        <template v-for="v in filterData" key="v.route">
          <VPHomeMainItem
            :route="v.route"
            :title="v.meta.title"
            :description="v.meta.description"
            :date="v.meta.date"
            :tag="v.meta.tag"
            :cover="v.meta.cover"
            :author="v.meta.author || globalAuthor"
          />
        </template>
      </section>
    </section>
  </section>
</template>

<style scoped></style>
