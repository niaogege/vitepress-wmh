<script setup lang="ts" name="VPHomeRecommendItem">
const props = defineProps<{
  title: string;
  date: string;
  tag?: string[];
  description?: string;
  cover?: string;
  sticky?: number;
  author?: string;
  hidden?: boolean;
  layout?: string;
  route: string;
  index: number;
}>();
</script>
<template>
  <div class="mb-2 mt-1 flex w-full p-2 sm:w-1/2 md:w-1/3">
    <div class="flex-shrink-0 pr-4 font-sans text-2xl text-gray-300">
      {{ "0" + index }}
    </div>
    <div>
      <span class="text-sm dark:text-primary">
        {{ author }}
      </span>
      <a
        :href="route"
        class="mt-1 mb-2 block text-base font-bold leading-tight text-black hover:underline dark:text-white"
        >{{ title }}</a
      >
      <span class="text-xs dark:text-primary">
        {{ date }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
