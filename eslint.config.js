import { tsImport } from 'tsx/esm/api'

const { zanelab } = (await tsImport('./packages/eslint/index.ts', import.meta.url))

export default zanelab({
})
