<script setup lang="ts" name="VPHomeRecommend">
import { ref, computed } from "vue";
import { useData } from "vitepress";
import { useArticles, useBlogConfig } from "../composables/config";
import VPHomeRecommendItem from "./VPHomeRecommendItem.vue";
import { WmhThemeConfig } from "../types/config";
const docs = useArticles();
const { recommend } = useBlogConfig();
const total = ref<number>(recommend!.total);
const wikiList = computed(() => {
  const data = docs.value
    .filter((v) => v.meta.date && v.meta.title)
    .filter((v) => v.meta.recommend)
    .slice(0, total.value);
  data.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
  return data;
});
const { theme } = useData<WmhThemeConfig.Config>();
const globalAuthor = computed(() => theme.value.blog.author || "");
</script>
<template>
  <div class="mt-4 w-auto">
    <div
      class="mx-auto flex flex-wrap border-b border-solid border-red-200 p-4 dark:border-gray-400 lg:max-w-screen-lg"
    >
      <template v-for="(v, index) in wikiList" key="v.route">
        <VPHomeRecommendItem
          :route="v.route"
          :title="v.meta.title"
          :description="v.meta.description"
          :date="v.meta.date"
          :tag="v.meta.tag"
          :cover="v.meta.cover"
          :author="v.meta.author || globalAuthor"
          :index="index + 1"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
