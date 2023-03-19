<script setup lang="ts" name="VPHomeMain">
import { ref } from "vue"
import { useHomeConfig, useWidth } from "../composables/config"
const { setCustomSlogan } = useHomeConfig()
const title = ref(setCustomSlogan && setCustomSlogan())
const { h, w } = useWidth()
</script>
<template>
  <div class="VPHomeSlogan bg-yellow-500">
    <h1>{{ title }}</h1>
    <br />
    <h1>当前屏幕宽度{{ w }}</h1>
    <br />
    <h1>当前屏幕高度{{ h }}</h1>
  </div>
</template>

<style scoped>
.VPHomeSlogan {
  height: 448px;
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 20px;
  color: black;
}
</style>
