# @zanelab/lint-config

<div align="center">
  <a href="https://zanelab.vip"><img alt="zanelab logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>

[![NPM version](https://img.shields.io/npm/v/@zanelab/lint-config)](https://npmjs.com/package/@zanelab/lint-config)

[English](./README.md) | **中文**

</div>

# 一键配置前端项目代码规范工具

还在为配置 ESLint、Prettier、Commitlint 等工具而头疼吗？这个工具包帮你一键搞定！它集成了以下常用工具，并提供了开箱即用的配置：

- **ESLint**：检查代码质量，发现潜在错误
- **Prettier**（可选）：统一代码风格
- **czg + commitlint**：规范 Git 提交信息，生成符合约定的提交消息
- **lint-staged**：只对暂存区的文件进行检查，提高效率
- **husky**：利用 Git 钩子，在提交前自动执行代码检查

你可以选择**向导式自动安装**，也可以根据项目需要**手动配置**。

---

## 🚀 快速开始（向导式）

在项目根目录下执行以下命令，所有工具就会自动安装并配置好：

```bash
pnpm dlx @zanelab/lint-cli
```

### 命令参数说明

| 参数      | 作用                                                                                                                 |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| 无参数    | 默认安装并配置全套工具                                                                                               |
| `-I`      | 交互式选择：你可以自由选择需要哪些工具                                                                               |
| `install` | 只安装工具（不生成配置文件）<br>加上 `-I` 可以交互式选择安装哪些工具                                                 |
| `config`  | 只生成配置文件（假设工具已安装）<br>加上 `-I` 可以交互式选择配置哪些工具<br>加上 `-f` 会强制覆盖现有配置文件，不提示 |

> ⚠️ **注意**：向导式使用默认配置生成文件。如果你的项目有特殊需求，可以在生成后手动调整。

---

## 🛠️ 手动配置（按需使用）

如果你希望更精细地控制，可以按照下面的步骤手动安装和配置每个工具。

### 1. ESLint（代码质量检查）

我们提供的 `@zanelab/eslint-config` 基于强大的 [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)，并添加了一些实用的规则。

#### 安装

```bash
pnpm add -D eslint @zanelab/eslint-config eslint-plugin-format
```

#### 配置

在项目根目录创建 `eslint.config.js` 文件：

**如果项目使用 ES 模块（`"type": "module"`）**

```js
import { zanelab } from '@zanelab/eslint-config'
export default zanelab()
```

**如果项目使用 CommonJS（`"type": "commonjs"`）**

```js
const { zanelab } = require('@zanelab/eslint-config')
module.exports = zanelab()
```

### 2. czg + commitlint（规范提交信息）

- **czg**：交互式生成符合 Conventional Commits 规范的提交信息
- **commitlint**：检查提交信息是否符合规范

#### 安装

```bash
pnpm add -D @commitlint/cli czg @zanelab/cz-config
```

#### 配置

创建 `commitlint.config.js` 文件：

**ES 模块**

```js
import { config } from '@zanelab/cz-config/commitlint'
export default config
```

**CommonJS**

```js
module.exports = require('@zanelab/cz-config')
```

### 3. lint-staged（只检查暂存区的文件）

配合 husky 使用，在提交前只对本次修改的文件进行检查，速度更快。

#### 安装

```bash
pnpm add -D lint-staged @zanelab/lint-staged
```

#### 配置

创建 `lint-staged.config.js` 文件：

**ES 模块**

```js
import config from '@zanelab/lint-staged'
export default config
```

**CommonJS**

```js
module.exports = require('@zanelab/lint-staged')
```

### 4. husky（Git 钩子管理）

用来在 Git 操作（如 commit、push）前自动运行脚本。

#### 配置

1. 按照 [husky 官方文档](https://typicode.github.io/husky/) 安装并初始化 husky。
2. 将 [`@zanelab/husky-config`](./packages/husky/index.ts) 中的钩子脚本复制到你的 `.husky/` 目录下。例如，你可以在 `pre-commit` 钩子中运行 `lint-staged`，在 `commit-msg` 钩子中运行 `commitlint`。

### 5. Prettier（代码格式化，非必须）

> 我们推荐优先使用 ESLint 的格式化功能（基于 `@antfu/eslint-config` 的理念），所以 Prettier 作为可选工具。如果你习惯用 Prettier，也可以单独安装。

#### 安装

```bash
pnpm add -D prettier @zanelab/prettier-config
```

#### 配置

创建 `prettier.config.js` 文件：

**ES 模块**

```js
import config from '@zanelab/prettier-config'
export default config
```

**CommonJS**

```js
module.exports = require('@zanelab/prettier-config')
```

---

## 🙏 致谢

本工具包的思路和配置参考了以下优秀项目：

- [@c4605/toolconfs](https://www.npmjs.com/package/@c4605/toolconfs)
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@fantasticit/code-lint](https://github.com/fantasticit/code-lint)

感谢这些项目的作者为我们提供了如此便捷的配置方案！
