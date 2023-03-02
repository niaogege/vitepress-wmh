<script setup lang="ts" name="VPHomeMain">
import { ref } from "vue"
import { useHomeConfig } from "../composables/config"
const { setCustomSlogan } = useHomeConfig()
const title = ref(setCustomSlogan && setCustomSlogan())
</script>
<template>
  <div class="VPHomeSlogan">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
.VPHomeSlogan {
  margin: 30px 0;
  display: flex;
  justify-content: center;
}
h1 {
  font-size: 20px;
  color: black;
}
</style>
