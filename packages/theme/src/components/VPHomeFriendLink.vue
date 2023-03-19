<template>
  <div class="p-3 md:sticky">
    <div class="mb-4 text-black font-medium">友链</div>
    <div v-for="item in friendLink" :key="item.name">
      <div>
        <img :src="item.avatar" class="w-8" />
        <a :href="item.url">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="VPHomeFriendLink">
import { useBlogConfig } from "../composables/config"
const { friendLink } = useBlogConfig()
</script>
<style scoped></style>
