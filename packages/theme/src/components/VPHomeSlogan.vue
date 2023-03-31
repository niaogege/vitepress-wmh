<script setup lang="ts" name="VPHomeMain">
import { computed } from "vue";
import { useData } from "vitepress";
const { site, frontmatter } = useData();

const name = computed(
  () => (frontmatter.value.blog?.name ?? site.value.title) || ""
);
const description = computed(() => frontmatter.value.blog?.description || "");

const homebg = computed(() => frontmatter.value.blog?.homebg || "");
</script>
<template>
  <div class="relative flex flex-col items-center justify-center">
    <img
      :src="homebg"
      class="blur-1 hovder:scale-105 w-full object-fill hover:transition-all"
    />
    <section
      class="absolute hidden w-auto rounded-xl bg-white p-2 opacity-70 hover:opacity-80 sm:block"
    >
      <div class="w-full text-center text-xl font-extrabold">
        <span
          class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          @{{ name }}-{{ description }}
        </span>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
