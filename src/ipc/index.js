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

export const loadContents = (args) => {
  return sendCommand('load-contents', args)
}

export const updateContents = (args) => {
  return sendCommand('update-contents', args)
}
