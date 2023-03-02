<template>
  <div
    class="max-w-md mx-auto my-20 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="h-48 w-full object-cover md:h-full md:w-48"
          :src="cover"
          :alt="title"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          Case study
        </div>
        <a
          :href="route"
          class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >{{ title }}</a
        >
        <p class="mt-2 text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="VPHomeMainItem">
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
}>()
</script>

<style scoped></style>
