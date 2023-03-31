<template>
  <div class="p-3 md:sticky md:top-16">
    <div>
      <div class="mb-4 font-medium text-black dark:text-gray-200">Tags</div>
      <div>
        <div
          v-for="item in tags"
          key="item"
          class="mr-2 mb-2 inline-block rounded border border-solid border-red-100 px-2 py-1 hover:cursor-pointer hover:bg-red-500 hover:text-white dark:text-gray-300 dark:hover:bg-blue-500"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="VPHomeTag">
import { useArticles } from "../composables/config";
const articles = useArticles();
let arr: string[] = [];
articles.value.forEach((e) => {
  if (e.meta.tag && e.meta.tag.length) {
    arr.push(...e.meta.tag);
  }
});
const tags = [...new Set(arr)];
const props = defineProps<{
  title: string;
}>();
</script>
<style scoped></style>
