const fs = require('fs')

function loadContents(opts, callback) {
  fs.readFile(opts.filename, function (err, data) {
    if (err) {
      callback(err)

      return
    }

    callback(data.toString())
  })
}

module.exports = {
  loadContents
}
