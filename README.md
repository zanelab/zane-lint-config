# @zanelab/lint-config

<div align="center">
  <a href="https://zanelab.vip"><img alt="zanelab logo" width="215" src="https://unpkg.com/@zanejs/icons@1.0.1/dist/logo.svg"></a>

[![NPM version](https://img.shields.io/npm/v/@zanelab/lint-config)](https://npmjs.com/package/@zanelab/lint-config)

**English** | [中文](./README.zh-CN.md)

</div>

# One-Click Setup for Frontend Code Quality Tools

Tired of manually configuring ESLint, Prettier, Commitlint, and other tools? This toolkit helps you set them up with a single command! It integrates the following commonly used tools with ready-to-use configurations:

- **ESLint**: Checks code quality and catches potential errors
- **Prettier** (optional): Enforces consistent code style
- **czg + commitlint**: Standardizes Git commit messages with conventional commit format
- **lint-staged**: Runs checks only on staged files for better performance
- **husky**: Uses Git hooks to automatically run checks before commits

You can either use the **wizard-based automatic setup** or manually configure each tool according to your project’s needs.

---

## 🚀 Quick Start (Wizard)

Run the following command in your project root, and all tools will be installed and configured automatically:

```bash
pnpm dlx @zanelab/lint-cli
```

### Command Parameters

| Parameter     | Description                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| No parameters | Installs and configures the full set of tools with default settings                                                                                                                                          |
| `-I`          | Interactive mode: lets you choose which tools to install/configure                                                                                                                                           |
| `install`     | Only installs the tools (does not generate config files)<br>Add `-I` to interactively select which tools to install                                                                                          |
| `config`      | Only generates configuration files (assumes tools are already installed)<br>Add `-I` to interactively select which tools to configure<br>Add `-f` to force overwrite existing config files without prompting |

> ⚠️ **Note**: The wizard uses default settings to generate config files. If your project has special requirements, you can manually adjust them afterwards.

---

## 🛠️ Manual Setup (Use as Needed)

If you prefer finer control, follow these steps to install and configure each tool individually.

### 1. ESLint (Code Quality)

Our `@zanelab/eslint-config` is based on the powerful [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) and adds some practical rules.

#### Installation

```bash
pnpm add -D eslint @zanelab/eslint-config eslint-plugin-format
```

#### Configuration

Create an `eslint.config.js` file in your project root:

**For ES modules (`"type": "module"`)**

```js
import { zanelab } from '@zanelab/eslint-config'
export default zanelab()
```

**For CommonJS (`"type": "commonjs"`)**

```js
const { zanelab } = require('@zanelab/eslint-config')
module.exports = zanelab()
```

### 2. czg + commitlint (Commit Message Standardization)

- **czg**: Generates commit messages interactively following the Conventional Commits spec
- **commitlint**: Validates commit messages against the spec

#### Installation

```bash
pnpm add -D @commitlint/cli czg @zanelab/cz-config
```

#### Configuration

Create a `commitlint.config.js` file:

**ES modules**

```js
import { config } from '@zanelab/cz-config/commitlint'
export default config
```

**CommonJS**

```js
module.exports = require('@zanelab/cz-config')
```

### 3. lint-staged (Check Only Staged Files)

Works with husky to run checks only on files that are staged for commit, making it faster.

#### Installation

```bash
pnpm add -D lint-staged @zanelab/lint-staged
```

#### Configuration

Create a `lint-staged.config.js` file:

**ES modules**

```js
import config from '@zanelab/lint-staged'
export default config
```

**CommonJS**

```js
module.exports = require('@zanelab/lint-staged')
```

### 4. husky (Git Hooks Management)

Used to run scripts automatically before Git operations (like commit, push).

#### Configuration

1. Follow the [husky official documentation](https://typicode.github.io/husky/) to install and initialize husky.
2. Copy the hook scripts from [`@zanelab/husky-config`](./packages/husky/index.ts) into your `.husky/` directory. For example, you might run `lint-staged` in the `pre-commit` hook and `commitlint` in the `commit-msg` hook.

### 5. Prettier (Code Formatting, Optional)

> We recommend using ESLint's formatting capabilities (following the philosophy of `@antfu/eslint-config`), so Prettier is optional. If you're used to Prettier, you can install it separately.

#### Installation

```bash
pnpm add -D prettier @zanelab/prettier-config
```

#### Configuration

Create a `prettier.config.js` file:

**ES modules**

```js
import config from '@zanelab/prettier-config'
export default config
```

**CommonJS**

```js
module.exports = require('@zanelab/prettier-config')
```

---

## 🙏 Acknowledgements

This toolkit's concepts and configurations draw inspiration from the following excellent projects:

- [@c4605/toolconfs](https://www.npmjs.com/package/@c4605/toolconfs)
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@fantasticit/code-lint](https://github.com/fantasticit/code-lint)

Thanks to the authors of these projects for providing such convenient configuration solutions!
