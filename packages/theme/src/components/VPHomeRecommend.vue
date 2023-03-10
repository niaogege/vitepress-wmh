<script setup lang="ts" name="VPHomeRecommend">
import { ref, computed } from "vue"
import { useArticles, useBlogConfig } from "../composables/config"
import VPHomeRecommendItem from "./VPHomeRecommendItem.vue"
const docs = useArticles()
const { recommend } = useBlogConfig()
const total = ref<number>(recommend!.total)
console.log(docs, "PPPdocs", total)
const wikiList = computed(() => {
  const data = docs.value
    .filter((v) => v.meta.date && v.meta.title)
    .filter((v) => v.meta.recommend)
    .slice(0, total.value)
  data.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date))
  return data
})
console.log(wikiList, "wikiList")
</script>
<template>
  <div class="w-full mt-4">
    <div class="mx-auto md:max-w-screen-md lg:max-w-screen-lg pl-4 w-full mb-4">
      <h1 class="w-auto text-left">本站推荐</h1>
    </div>
    <div
      class="flex flex-wrap mx-auto md:max-w-screen-md lg:max-w-screen-lg p-4 w-full bg-gray-300 border-1 border-dashed border-red-200"
    >
      <!-- <= 768 单排-->
      <!-- =1280 两排或者三排-->

      <template v-for="(v, index) in wikiList" key="v.route">
        <VPHomeRecommendItem
          :route="v.route"
          :title="v.meta.title"
          :description="v.meta.description"
          :date="v.meta.date"
          :tag="v.meta.tag"
          :cover="v.meta.cover"
          :author="v.meta.author"
          :index="index + 1"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
