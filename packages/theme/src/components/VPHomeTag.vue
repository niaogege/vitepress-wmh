<template>
  <div class="p-3 md:sticky md:top-16">
    <div>
      <div class="mb-4 text-black font-medium">Tags</div>
      <div>
        <span
          v-for="item in tags"
          key="item"
          class="p-2 border-2 border-solid border-red-100"
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="VPHomeTag">
import { useArticles } from "../composables/config"
const articles = useArticles()
let arr: string[] = []
articles.value.forEach((e) => {
  console.log(e.meta.tag, "eee")
  if (e.meta.tag && e.meta.tag.length) {
    arr.push(...e.meta.tag)
  }
})
const tags = [...new Set(arr)]
const props = defineProps<{
  title: string
}>()
</script>
<style scoped></style>
