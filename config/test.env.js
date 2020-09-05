'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./test.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"test"',
  EVN_CONFIG: '"test"',
  BASE_API: '"http://192.168.20.73:3502"' // 开发
})
