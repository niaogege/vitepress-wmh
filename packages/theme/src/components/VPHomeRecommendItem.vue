<script setup lang="ts" name="VPHomeRecommendItem">
const props = defineProps<{
  title: string
  date: string
  tag?: string[]
  description?: string
  cover?: string
  sticky?: number
  author?: string
  hidden?: boolean
  layout?: string
  route: string
  index: number
}>()
</script>
<template>
  <div class="w-full md:w-1/2 lg:w-1/3 p-4 mb-4 flex">
    <div class="font-sans text-gray-300 flex-shrink-0 text-2xl pr-4">
      {{ "0" + index }}
    </div>
    <div>
      <span class="text-black text-sm">
        {{ author }}
      </span>
      <a
        :href="route"
        class="block mt-1 text-base leading-tight font-medium text-black hover:underline mb-2"
        >{{ title }}</a
      >
      <span class="text-xs">
        {{ date }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
