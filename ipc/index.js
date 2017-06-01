const { ipcMain } = require('electron')
const { createSite } = require('./generator')

ipcMain.on('generate-site', (event, args) => {

  console.log('generate-site', args)

  createSite(args, (error) => {
    event.sender.send('generate-site-done', error)
  })  
})