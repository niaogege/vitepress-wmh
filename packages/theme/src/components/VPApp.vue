<script setup lang="ts" name="HOME">
import Theme from "vitepress/theme";
import VPHomeMain from "./VPHomeMain.vue";
import VPArticleAnalyze from "./VPArticleAnalyze.vue";
const { Layout } = Theme;
</script>

<template>
  <Layout>
    <!-- 嵌入式阅读分析 -->
    <template #doc-before>
      <!-- 阅读时间分析 -->
      <ClientOnly>
        <VPArticleAnalyze />
      </ClientOnly>
    </template>

    <!-- 自定义首页 -->
    <template #home-hero-before>
      <VPHomeMain />
    </template>
    <!-- <template #sidebar-nav-after>
      <h1>THis is Sidebar</h1>
    </template> -->
    <!-- 评论 -->
    <template #doc-after>
      <h1>This is commemt</h1>
    </template>
  </Layout>
</template>

<style scoped></style>
