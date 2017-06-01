const async = require('async')
const { ncp } = require('ncp')
const npm = require('npm')
const path = require('path')
const wintersmith = require('wintersmith')

function copyTemplate(opts, callback) {
  console.log('Copying Template')

  return ncp(opts.from, opts.to, {}, callback)
}

function installDeps(opts, callback) {
  console.log('Installing Dependencies')

  const packagePath = path.join(opts.to, 'package.json')

  process.chdir(opts.to)

  return npm.load(function(error) {
    if (error) {
      callback(error)
    }

    return npm.install(callback)
  })
}

function build(opts, callback) {
  console.log('Wintersmithing!')

  var env = wintersmith('/tmp/winter/config.json')

  // build site
  env.build(function(error) {
    if (error) {
      callback(error)
    }

    callback()
  })
}

function createSite(opts, callback) {
  async.series([
    async.apply(copyTemplate, opts),
    async.apply(installDeps, opts),
    async.apply(build, opts)
  ], callback)
}

module.exports = {
  createSite
}