import { commands } from 'vscode'
import openExtensionSettings from './open-extension-settings'

jest.mock('vscode')

describe('openExtensionSettings command', () => {
  it('executes "workbench.action.openSettings" command with filter for Marp extension', async () => {
    await openExtensionSettings()

    expect(commands.executeCommand).toHaveBeenCalledWith(
      'workbench.action.openSettings',
      '@ext:bjgarywong.marp-vscode-with-attrs', // [GARY FORK] Updated extension identifier to match the forked version
    )
  })
})
