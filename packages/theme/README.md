# 初衷

设计一款自己喜欢的主题包！！

## vue 语法知识补充

## 文件组织安排

```js
.
├─ src
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

## Package.json 中的参数说明

- exports 代表什么

```json
  "exports": {
    "./server": {
      "types": "./server.d.ts",
      "default": "./server.js"
    },
    ".": "./src/index.ts"
  },
```

## Vue 中相关 API 语法知识点

### provide/inject

[Provide/inject](https://cn.vuejs.org/api/composition-api-dependency-injection.html)

- Provide 提供一个值，可以被后代组件注入。

```ts
declare const RefSymbol: unique symbol
export declare interface InjectionKey<T> extends Symbol {}
export declare interface Ref<T = any> {
  value: T
  /**
   * Type differentiator only.
   * We need this to be in public d.ts but don't want it to show up in IDE
   * autocomplete, so we use a private Symbol instead.
   */
  [RefSymbol]: true
}
export interface ActiveTag {
  label: string
  type: string
}
export const tagSymbol: InjectionKey<Ref<ActiveTag>> = Symbol("active-tag")
// 提供静态值
// provide(tagSymbol, 'cpp')
// 提供时将 Symbol 作为 key
// 提供响应式的值
// const count = ref(0)
// provide(tagSymbol, count)
```

- Inject 注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值。

```ts
// 注入响应式的值
// / const count = inject('count')
```
