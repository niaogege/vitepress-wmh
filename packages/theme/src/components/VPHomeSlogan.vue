<script setup lang="ts" name="VPHomeMain">
import { ref, computed } from "vue";
import { useHomeConfig, useWidth } from "../composables/config";
import { useData } from "vitepress";
const config = useHomeConfig();

const { site, frontmatter } = useData();

const name = computed(
  () => (frontmatter.value.blog?.name ?? site.value.title) || ""
);
const description = computed(() => frontmatter.value.blog?.description || "");

const homebg = computed(() => frontmatter.value.blog?.homebg || "");
console.log(homebg, "homebg");
const { setCustomSlogan } = config;
const title = ref(setCustomSlogan && setCustomSlogan());
const { h, w } = useWidth();
const bg = `bg-[url('${homebg.value}')]`;
</script>
<template>
  <div
    :class="['h-[340px]', bg, 'justify-center', 'flex', 'w-full', 'bg-auto']"
  >
    <h1>{{ title }}</h1>
    <br />
    <h1>当前屏幕宽度{{ w }}</h1>
    <br />
    <h1>当前屏幕高度{{ h }}</h1>
  </div>
</template>

<style scoped>
.VPHomeSlogan {
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
