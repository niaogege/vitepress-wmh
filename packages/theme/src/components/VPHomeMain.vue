<script setup lang="ts" name="VPHomeMain">
import { useData } from "vitepress";
import { computed } from "vue";
import { WmhThemeConfig } from "../types/config";
import { useArticles } from "../composables/config";
import VPHomeSlogan from "./VPHomeSlogan.vue";
import VPHomeMainItem from "./VPHomeMainItem.vue";
import VPHomeRecommend from "./VPHomeRecommend.vue";
import VPHomeRight from "./VPHomeRight.vue";
const { theme } = useData<WmhThemeConfig.Config>();
const docs = useArticles();
const wikiList = computed(() => {
  const data = docs.value
    .filter((v) => v.meta.date && v.meta.title)
    .filter((v) => !v.meta.hidden);
  data.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
  return data;
});
const filterData = computed(() => {
  return wikiList.value.filter((v) => v);
});
const globalAuthor = computed(() => theme.value.blog.author || "");
const data = useData();
console.log(data, "DATA");
</script>
<template>
  <section class="h-full w-full bg-fixed bg-top bg-no-repeat">
    <VPHomeSlogan />
    <VPHomeRecommend />
    <section
      class="relative mt-4 flex w-full flex-col justify-center md:mx-auto md:flex-row-reverse lg:max-w-screen-lg"
    >
      <section class="w-full md:w-72">
        <VPHomeRight />
      </section>
      <section class="flex-auto md:order-last md:pr-8">
        <template v-for="v in filterData" key="v.route">
          <VPHomeMainItem
            :route="v.route"
            :title="v.meta.title"
            :description="v.meta.description"
            :date="v.meta.date"
            :tag="v.meta.tag"
            :cover="v.meta.cover"
            :author="v.meta.author || globalAuthor"
          />
        </template>
      </section>
    </section>
  </section>
</template>

<style scoped></style>
