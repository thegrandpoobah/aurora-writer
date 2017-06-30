const fs = require('fs')

function updateContents(opts, callback) {
  fs.writeFile(opts.filename, opts.contents, (err) => {
    callback(err)
  })
}

module.exports = {
  updateContents
}
