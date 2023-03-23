# 基于 vitePress 搭建属于自己的主题包

### 安装下载

```js
npx create-next-app --example with-next-seo next-seo-app
// 如何做到的？一个指令就能下载github上的文件包
npx --
```

### 基于 changeset 发包

步骤主要有

- pnpm changeset add // 选择需要发布的包
- 提交代码到 git // 保持当前工作目录干净
- pnpm changeset version // 更新版本
- pnpm publish -r // 发布

### pnpm 相关配置

- pnpm.peerDependencyRules.ignoreMissing

pnpm 不会打印有关依赖列表中缺少对 peerDependency 的警告。

例如，使用以下配置，如果依赖项需要 react 但未安装 react，pnpm 不会打印相应警告。

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": ["react"]
    }
  }
}
```

- 全局的公共依赖包，比如打包涉及到的 rollup、typescript 等
  pnpm 提供了 **-w, --workspace-root** 参数，可以将依赖包安装到工程的根目录下，作为所有 package 的公共依赖。

```shell
pnpm install react -w
```

- 给某个 package 单独安装指定依赖

```shell
pnpm add axios --filter @chendap/theme
```

- 只允许 pnpm
  当在项目中使用 pnpm 时，如果不希望用户使用 yarn 或者 npm 安装依赖，可以将下面的这个 preinstall 脚本添加到工程根目录下的 package.json 中：

```shell
"preinstall": "npx only-allow pnpm"
```

- 添加依赖

```shell
pnpm i axios -C packages/packageA #包路径为packages/packageA的包添加axios
pnpm i axios --filter packageName #给包名（package.json中那name字段）为packageName的包添加axios依赖
pnpm i axios -w #将axios安装到根目录
```

如果是本地的包相互依赖，可以使用 **workspace 协议**安装,例如包 pkg1 依赖本地的 pkg2

```js
pnpm i @chendap@pkg2 --filter pkg1
```

### typescript

```sh
tsc --init // 生成tsconfig.json
```

### 开发

#### tailwindcss IDE 插件

- [IntelliSense for VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [prettier and tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

```js
npm install -D prettier prettier-plugin-tailwindcss
```
