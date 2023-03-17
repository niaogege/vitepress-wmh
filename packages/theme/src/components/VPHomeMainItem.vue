<template>
  <div
    class="w-full mx-auto my-10 bg-white rounded-lg shadow-md hover:shadow-xl border-2 border-black border-solid"
  >
    <div class="md:flex w-full md:justify-between">
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          {{ `${tag}` }}
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
      <div class="md:flex-shrink-0">
        <img
          class="h-48 w-full object-cover md:h-full md:w-48"
          :src="cover"
          :alt="title"
        />
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
console.log(props, "PROPS")
</script>
<style scoped></style>
