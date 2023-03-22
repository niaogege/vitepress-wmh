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
  <div class="mb-4 flex w-full p-4 md:w-1/2 lg:w-1/3">
    <div class="flex-shrink-0 pr-4 font-sans text-2xl text-gray-300">
      {{ "0" + index }}
    </div>
    <div>
      <span class="text-sm text-black">
        {{ author }}
      </span>
      <a
        :href="route"
        class="mt-1 mb-2 block text-base font-medium leading-tight text-black hover:underline"
        >{{ title }}</a
      >
      <span class="text-xs">
        {{ date }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
