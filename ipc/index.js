const { ipcMain } = require('electron')
const { createSite } = require('./generator')
const { loadContents } = require('./loadContents')
const { updateContents } = require('./updateContents')

ipcMain.on('generate-site', (event, args) => {
  console.log('generate-site', args)

  createSite(args, (error) => {
    event.sender.send('generate-site-done', error)
  })
})

ipcMain.on('load-contents', (event, args) => {
  console.log('load-contents', args)

  loadContents(args, (error) => {
    event.sender.send('load-contents-done', error)
  })
})

ipcMain.on('update-contents', (event, args) => {
  console.log('update-contents', args)

  updateContents(args, (error) => {
    event.sender.send('update-contents-done', error)
  })
})
