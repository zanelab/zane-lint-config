import { AbstractAnswer } from './abstract/answer'
import { Config } from './abstract/config'
import { CosmiConfigOption } from './abstract/config-option'
import { Installer } from './abstract/install'

export class CommitlintAnswer extends AbstractAnswer {
  static toolName = 'commitlint'

  answerName = 'commitlint'

  installer = new Installer(['czg', '@commitlint/cli', '@zanelab/cz-config'])

  config = new Config([
    new CosmiConfigOption({
      configFileName: 'commitlint.config.js',
      esmImportConfigContent: ``,
      esmExportConfigContent: `{ extends: ['@zanelab/cz-config/commitlint'] }`,
      cjsImportConfigContent: ``,
      cjsExportConfigContent: `{ extends: ['@zanelab/cz-config/commitlint'] }`,
      checkConfigNames: ['commitlint'],
    }),
  ])
}
