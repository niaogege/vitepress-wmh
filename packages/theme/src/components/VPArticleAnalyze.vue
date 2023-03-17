<script setup lang="ts" name="VPArticleAnalyze">
import { ref, computed, onMounted, watch } from "vue"
import { useData, useRoute } from "vitepress"
import { useBlogConfig, useCurrentArticle } from "../composables/config"
import { countWord, formatShowDate } from "../support/utils"
import { WmhThemeConfig } from "@chendap/vitepress-wmh/server"
const { globalPagesData } = useBlogConfig()
const allData = useData()
console.log(globalPagesData, "ART")
console.log(allData, "FRON")
const wordCount = ref(1000)
const wordTime = computed(() => {
  return ~~((wordCount.value / 275) * 60)
})

const readTime = computed(() => {
  return Math.ceil(wordTime.value / 60)
})

const currentArticle = useCurrentArticle()
console.log(currentArticle, "currentArticle")
const publishDate = computed(() => {
  return formatShowDate(currentArticle.value?.meta?.date || "")
})

const $des = ref<HTMLDivElement>()

const analyze = () => {
  if (!$des.value) {
    return
  }
  document.querySelectorAll(".meta-des").forEach((v) => v.remove())
  const docDomContainer = window.document.querySelector("#VPContent")

  const words =
    docDomContainer?.querySelector(".content-container .main")?.textContent ||
    ""
  wordCount.value = countWord(words)
  docDomContainer?.querySelector("h1")?.after($des.value!)
}

onMounted(() => {
  const observer = new MutationObserver(() => {
    const targetInstance = document.querySelector("#hack-article-des")
    if (!targetInstance) {
      analyze()
    }
  })
  observer.observe(document.body, {
    childList: true, // 观察目标子节点的变化，是否有添加或者删除
    subtree: true // 观察后代节点，默认为 false
  })
  console.log("onMounted")
  // 初始化时执行一次
  analyze()
})
const route = useRoute()

const { theme } = useData<WmhThemeConfig.Config>()
const globalAuthor = computed(() => theme.value.blog.author || "")
const author = computed(
  () => currentArticle.value?.meta.author || globalAuthor.value
)
</script>

<template>
  <div class="meta-des 123" ref="$des" id="hack-article-des">
    <span v-if="author"> 作者 ：{{ author }} </span>
    <span> 发布时间：{{ publishDate }} </span>
    <span> 字数：{{ wordCount }} 个字 </span>
    <span> 预计：{{ readTime }} 分钟 </span>
  </div>
</template>

<style scoped>
.VPHomeSlogan {
  margin: 30px 0;
  display: flex;
  justify-content: center;
}
</style>
