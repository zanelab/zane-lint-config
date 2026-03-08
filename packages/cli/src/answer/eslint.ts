import { AbstractAnswer } from './abstract/answer'
import { Config } from './abstract/config'
import { CosmiConfigOption } from './abstract/config-option'
import { Installer } from './abstract/install'

export class EslintAnswer extends AbstractAnswer {
  static toolName = 'eslint'

  answerName = 'eslint'

  installer = new Installer(['eslint', '@zanelab/eslint-config', 'eslint-plugin-format'])

  config = new Config(
    [
      new CosmiConfigOption({
        configFileName: 'eslint.config.js',
        esmImportConfigContent: 'import { zanelab } from "@zanelab/eslint-config"',
        esmExportConfigContent: 'zanelab()',
        cjsImportConfigContent: 'const { zanelab } = require("@zanelab/eslint-config")',
        cjsExportConfigContent: 'zanelab()',
        checkConfigNames: ['eslint'],
      }),
    ],
  )
}
