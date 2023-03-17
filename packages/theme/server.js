"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server.ts
var server_exports = {};
__export(server_exports, {
  defineConfig: () => defineConfig,
  defineConfigWithTheme: () => defineConfigWithTheme,
  getThemeConfig: () => getThemeConfig
});
module.exports = __toCommonJS(server_exports);
var import_fast_glob = __toESM(require("fast-glob"));
var import_gray_matter = __toESM(require("gray-matter"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));

// src/support/utils.ts
function formatDate(d, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (!(d instanceof Date)) {
    d = new Date(d);
  }
  const o = {
    "M+": d.getMonth() + 1,
    // 月份
    "d+": d.getDate(),
    // 日
    "h+": d.getHours(),
    // 小时
    "m+": d.getMinutes(),
    // 分
    "s+": d.getSeconds(),
    // 秒
    "q+": Math.floor((d.getMonth() + 3) / 3),
    // 季度
    S: d.getMilliseconds()
    // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      `${d.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
  }
  return fmt;
}

// src/support/index.ts
var import_child_process = require("child_process");
function getDefaultTitle(content) {
  const title = clearMatterContent(content).split("\n")?.find((str) => {
    return str.startsWith("# ");
  })?.slice(2).replace(/[\s]/g, "") || "";
  return title;
}
function clearMatterContent(content) {
  let first___;
  let second___;
  const lines = content.split("\n").reduce((pre, line) => {
    if (!line.trim() && pre.length === 0) {
      return pre;
    }
    if (line.trim() === "---") {
      if (first___ === void 0) {
        first___ = pre.length;
      } else if (second___ === void 0) {
        second___ = pre.length;
      }
    }
    pre.push(line);
    return pre;
  }, []);
  return lines.slice(second___ || 0).join("\n");
}
function getFileBirthTime(url) {
  let date = /* @__PURE__ */ new Date();
  try {
    const infoStr = (0, import_child_process.execSync)(`git log -1 --pretty="%ci" ${url}`).toString("utf-8").trim();
    if (infoStr) {
      date = new Date(infoStr);
    }
  } catch (error) {
    return formatDate(date);
  }
  return formatDate(date);
}
function getTextSummary(text, count = 100) {
  return clearMatterContent(text).match(/^# ([\s\S]+)/m)?.[1]?.replace(/#/g, "")?.replace(/!\[.*?\]\(.*?\)/g, "")?.replace(/\[(.*?)\]\(.*?\)/g, "$1")?.replace(/\*\*(.*?)\*\*/g, "$1")?.split("\n")?.filter((v) => !!v)?.slice(1)?.join("\n")?.replace(/>(.*)/, "")?.slice(0, count);
}

// src/server.ts
function getThemeConfig(cfg) {
  const srcDir = cfg?.srcDir || process.argv.slice(2)?.[1] || ".";
  const files = import_fast_glob.default.sync(`${srcDir}/**/*.md`, { ignore: ["node_modules"] });
  const data = files.map((v) => {
    let route = v.replace(".md", "");
    if (route.startsWith("./")) {
      route = route.replace(
        new RegExp(`^\\.\\/${import_path.default.join(srcDir, "/")}`),
        ""
      );
    } else {
      route = route.replace(new RegExp(`^${import_path.default.join(srcDir, "/")}`), "");
    }
    const fileContent = import_fs.default.readFileSync(v, "utf-8");
    const meta = {
      ...(0, import_gray_matter.default)(fileContent).data
    };
    if (!meta.title) {
      meta.title = getDefaultTitle(fileContent);
    }
    if (!meta.date) {
      meta.date = getFileBirthTime(v);
    } else {
      meta.date = formatDate(
        /* @__PURE__ */ new Date(`${new Date(meta.date).toUTCString()}+8`)
      );
    }
    meta.tag = meta.tag || [];
    const wordCount = 100;
    meta.description = meta.description || getTextSummary(fileContent, wordCount);
    meta.cover = meta.cover || fileContent.match(/[!]\[.*?\]\((https:\/\/.+)\)/)?.[1] || "";
    return {
      route: `/${route}`,
      meta
    };
  }).filter((v) => v.meta.layout !== "home");
  return {
    blog: {
      pagesData: data,
      ...cfg
    },
    sidebar: [
      {
        text: "",
        items: []
      }
    ]
  };
}
function defineConfig(config) {
  return config;
}
function defineConfigWithTheme(config) {
  return config;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defineConfig,
  defineConfigWithTheme,
  getThemeConfig
});
