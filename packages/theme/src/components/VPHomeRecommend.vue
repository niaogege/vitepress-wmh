<script setup lang="ts" name="VPHomeRecommend">
import { ref } from "vue"
import { useHomeConfig } from "../composables/config"
const { setCustomSlogan } = useHomeConfig()
const title = ref(setCustomSlogan && setCustomSlogan())
</script>
<template>
  <div class="w-full mt-4 bg-gray-300 border-2 border-dashed border-black">
    <div
      class="mx-auto md:max-w-screen-md lg:max-w-screen-lg pl-4 w-full bg-gray-300 border-1 border-dashed border-red-100"
    >
      <h1 class="w-auto text-left">本站推荐</h1>
    </div>
    <div
      class="flex flex-wrap mx-auto md:max-w-screen-md lg:max-w-screen-lg p-4 w-full bg-gray-300 border-1 border-dashed border-red-200"
    >
      <!-- <= 768 单排-->
      <!-- =1280 两排或者三排-->

      <div class="w-full md:w-1/2 lg:w-1/3 bg-red-200 p-4 mb-5">
        THis is Recommend 111sdsdsdsdsdsTHis is Recommend 111sdsdsdsdsds
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 md:space-x-4 bg-red-100 p-4 mb-5">
        THis is Recommend 222
      </div>
      <div class="w-fill md:w-1/2 lg:w-1/3 bg-red-200 p-4 mb-4">
        THis is Recommend 333
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 bg-red-100 p-4 mb-4">
        THis is Recommend 222
      </div>
      <div class="w-fill md:w-1/2 lg:w-1/3 bg-red-200 p-4 mb-4">
        THis is Recommend 333
      </div>
    </div>
  </div>
</template>

<style scoped></style>
