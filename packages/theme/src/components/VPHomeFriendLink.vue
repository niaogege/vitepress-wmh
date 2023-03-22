<template>
  <div
    class="border-b border-solid border-gray-300 p-3 md:sticky md:border-none"
  >
    <div class="mb-4 font-medium text-black">友链 加链接找博主</div>
    <template v-for="item in friendLink" :key="item.name">
      <div class="mr-2 mb-2 inline-block">
        <a :href="item.url">{{ item.name }}</a>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts" name="VPHomeFriendLink">
import { useBlogConfig } from "../composables/config";
const { friendLink } = useBlogConfig();
</script>
<style scoped></style>
