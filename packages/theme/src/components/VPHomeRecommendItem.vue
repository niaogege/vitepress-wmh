<script setup lang="ts" name="VPHomeRecommend">
import { ref } from "vue"
import { useHomeConfig } from "../composables/config"
const { setCustomSlogan } = useHomeConfig()
const title = ref(setCustomSlogan && setCustomSlogan())
</script>
<template>
  <div
    class="mx-auto md:max-w-screen-md pl-4 w-full bg-gray-300 border-1 border-dashed border-red-100"
  >
    <!-- <= 768 单排-->
    <!-- =1280 两排或者三排-->
  </div>
</template>

<style scoped></style>
