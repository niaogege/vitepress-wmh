<template>
  <div class="mx-auto mb-10 w-full rounded p-3 hover:border-0 hover:shadow-xl">
    <div class="w-full md:flex md:justify-between">
      <div class="p-8">
        <div
          class="text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-primary"
        >
          {{ `${tag}` }}
        </div>
        <a
          :href="route"
          class="mt-1 block text-xl font-bold leading-tight text-black hover:underline dark:text-yellow-50"
          >{{ title }}</a
        >
        <p class="mt-2 text-sm text-gray-500 dark:text-primary">
          {{ description }}
        </p>
      </div>
      <div class="md:flex-shrink-0">
        <img
          class="h-32 w-full rounded object-cover md:h-full md:w-48"
          :src="cover"
          :alt="title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="VPHomeMainItem">
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
}>();
</script>
<style scoped></style>
