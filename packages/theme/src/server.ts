import glob from "fast-glob";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import type { UserConfig } from "vitepress";
import type { WmhThemeConfig } from "./types/config";
import { formatDate } from "./support/utils";
import {
  getDefaultTitle,
  getFileBirthTime,
  getTextSummary,
} from "./support/index";

export function getThemeConfig(cfg?: Partial<WmhThemeConfig.BlogConfig>) {
  const srcDir = cfg?.srcDir || process.argv.slice(2)?.[1] || ".";
  const files = glob.sync(`${srcDir}/**/*.md`, { ignore: ["node_modules"] });
  const data = files
    .map((v) => {
      let route = v
        // 处理文件后缀名
        .replace(".md", "");

      // 去除 srcDir 处理目录名
      if (route.startsWith("./")) {
        route = route.replace(
          new RegExp(`^\\.\\/${path.join(srcDir, "/")}`),
          ""
        );
      } else {
        route = route.replace(new RegExp(`^${path.join(srcDir, "/")}`), "");
      }

      const fileContent = fs.readFileSync(v, "utf-8");
      // TODO: 支持JSON
      const meta: Partial<WmhThemeConfig.PageMeta> = {
        ...matter(fileContent).data,
      };

      if (!meta.title) {
        meta.title = getDefaultTitle(fileContent);
      }
      if (!meta.date) {
        meta.date = getFileBirthTime(v);
      } else {
        // TODO: 开放配置，设置时区
        meta.date = formatDate(
          new Date(`${new Date(meta.date).toUTCString()}+8`)
        );
      }

      // 处理tags
      meta.tag = meta.tag || [];

      // 获取摘要信息
      const wordCount = 100;
      meta.description =
        meta.description || getTextSummary(fileContent, wordCount);

      // 获取封面图
      meta.cover =
        meta.cover ||
        fileContent.match(/[!]\[.*?\]\((https:\/\/.+)\)/)?.[1] ||
        "";
      return {
        route: `/${route}`,
        meta,
      };
    })
    .filter((v) => v.meta.layout !== "home");

  return {
    blog: {
      pagesData: data as WmhThemeConfig.PageData[],
      ...cfg,
    },
  };
}

export function defineConfig(config: UserConfig<WmhThemeConfig.Config>) {
  return config;
}

export function defineConfigWithTheme<ThemeConfig>(
  config: UserConfig<ThemeConfig>
): UserConfig<ThemeConfig> {
  return config;
}

export * from "./types/config";
