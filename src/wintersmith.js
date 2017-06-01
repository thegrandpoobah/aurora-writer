const async = require('async')
const {ncp} = require('ncp')
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

  // // preview
  // env.preview(function(error, server) {
  //   if (error) throw error;
  //   console.log('Server running!');
  // });

  // do something with the content tree
  // env.load(function(error, result) {
  //   if (error) throw error;
  //   console.log('Contents loaded!');
  // });
}

function createSite(opts) {
  async.series([
    async.apply(copyTemplate, opts),
    async.apply(installDeps, opts),
    async.apply(build, opts)
  ], function(error) {
    if (error) {
    } else {
      console.log('Woo! Steve Holt!')
      // this means we rock
    }
  })
}

createSite({
  from: '../node_modules/wintersmith/examples/basic',
  to: '/tmp/winter'
})
