'use strict'

const config = require('./');
console.log(config)

const path = require('path');
module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    filename: '[name].js',
    publicPath: config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
} 