import { ipcRenderer } from 'electron'

const sendCommand = (command, args) => {
  return new Promise((resolve, reject) => {
    ipcRenderer.once(`${command}-done`, (event, response) => {
      resolve(response)
    })
    ipcRenderer.send(command, args)
  })
}

export const generateSite = (args) => {
  return sendCommand('generate-site', args)
}