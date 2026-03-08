import type { Options } from './types'

const config: Options = {
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  proseWrap: 'never',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
}

export default config
