import { tsImport } from 'tsx/esm/api'

const { zanejs } = (await tsImport('./packages/eslint/index.ts', import.meta.url))

export default zanejs({
})
