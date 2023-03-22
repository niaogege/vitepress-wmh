<template>
  <div class="mx-auto mb-10 w-full rounded-lg shadow-md hover:shadow-lg">
    <div class="w-full md:flex md:justify-between">
      <div class="p-8">
        <div
          class="text-xs font-semibold uppercase tracking-wide text-gray-700"
        >
          {{ `${tag}` }}
        </div>
        <a
          :href="route"
          class="mt-1 block text-xl font-bold leading-tight text-black hover:underline"
          >{{ title }}</a
        >
        <p class="text-md mt-2 text-gray-500">
          {{ description }}
        </p>
      </div>
      <div class="md:flex-shrink-0">
        <img
          class="h-48 w-full object-cover md:h-full md:w-48 md:rounded-lg"
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
