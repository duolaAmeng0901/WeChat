'use strict'


module.exports = {
  dev: {
    env: require('./dev.env.js'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsPublicPath: '/',
  },
  build: {
    env: require('./pro.env.js')
  }
}