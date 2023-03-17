<template>
  <div class="p-3 md:sticky md:top-16">
    <div>
      <div class="mb-4">
        <h1>标签</h1>
      </div>
      <h1>{{ title }}</h1>
      <h1>{{ title }}</h1>
      <h1>{{ title }}</h1>
      <h1>{{ title }}</h1>
      <h1>{{ title }}</h1>
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts" name="VPHomeTag">
const props = defineProps<{
  title: string
}>()
</script>
<style scoped></style>
