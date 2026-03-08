# @zanelab/lint-config

<div align="center">
  <a href="https://zanelab.vip"><img alt="zanelab logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>

[![NPM version](https://img.shields.io/npm/v/@zanelab/lint-config)](https://npmjs.com/package/@zanelab/lint-config)

**English** | [中文](./README.zh-CN.md)

</div>

## 配置lint工具将变得简单快速

包含以下工具的配置集合：

- eslint
- cz(czg) + commitlint
- lint-staged
- husky
- prettier

## 使用方法

### 向导式设置

在终端执行以下命令，lint工具将自动安装和配置。

```bash
pnpm dlx @zanelab/lint-cli
```

#### 参数说明

- `无参数` : 默认lint工具将自动安装和配置。
  - `-I`: 交互式选择需要安装的lint工具，而不是使用默认设置。
- `install` : 仅安装lint工具。
  - `-I`: 交互式安装lint工具。
- `config` : 仅配置lint工具。
  - `-I`: 交互式配置lint工具。
  - `-f`: 跳过所有提示并覆盖现有配置。

> [!IMPORTANT]
> 向导式设置仅安装默认的lint工具并根据默认设置进行配置。
> 执行完成命令后，可能需要根据项目需求进行调整。

### 手动设置

#### eslint

`@zanelab/eslint-config` 基于 [`@antfu/eslint-config`][antfu-eslint-config] 并扩展了一些规则。

##### 安装

```bash
pnpm add -D eslint @zanelab/eslint-config eslint-plugin-format
```

##### 配置

创建 `eslint.config.js` 文件

```js
// 适用于 "type": "module"
import { zanelab } from '@zanelab/eslint-config'
export default zanelab()
```

```js
// 适用于 "type": "commonjs"
const { zanelab } = require('@zanelab/eslint-config')
module.exports = zanelab()
```

#### cz(czg) + commitlint

使用 [`czg`](https://cz-git.qbb.sh/) 生成提交信息。并使用 [`commitlint`](https://commitlint.js.org/) 检查提交信息格式。

##### 安装

```bash
pnpm add -D @commitlint/cli czg @zanelab/cz-config
```

##### 配置

创建 `commitlint.config.js` 文件

```js
// 适用于 "type": "module"
import { config } from '@zanelab/cz-config/commitlint'
export default config

// 适用于 "type": "commonjs"
module.exports = require('@zanelab/cz-config')
```

#### lint-staged

##### 安装

```bash
pnpm add -D lint-staged @zanelab/lint-staged
```

##### 配置

创建 `lint-staged.config.js` 文件

```js
// 适用于 "type": "module"
import config from '@zanelab/lint-staged'
export default config

// 适用于 "type": "commonjs"
module.exports = require('@zanelab/lint-staged')
```

### husky

#### 配置

按照 [husky](https://typicode.github.io/husky/) 官方文档进行配置。
并将 [`@zanelab/husky-config`](./packages/husky/index.ts) 中的 husky 配置复制到你的项目中。

### prettier（不推荐使用）

> 不建议使用 `prettier` 格式化代码，因为遵循 [`@antfu/eslint-config`][antfu-eslint-config] 的理念。

##### 安装

```bash
pnpm add -D prettier @zanelab/prettier-config
```

##### 配置

创建 `prettier.config.js` 文件

```js
// 适用于 "type": "module"
import config from '@zanelab/prettier-config'
export default config

// 适用于 "type": "commonjs"
module.exports = require('@zanelab/prettier-config')
```

灵感来源

- [@c4605/toolconfs](https://www.npmjs.com/package/@c4605/toolconfs)
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@fantasticit/code-lint](https://github.com/fantasticit/code-lint)

[antfu-eslint-config]: https://github.com/antfu/eslint-config
