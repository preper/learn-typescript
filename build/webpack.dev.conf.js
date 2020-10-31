const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
    devtool: 'eval-cheap-module-source-map',
    mode: 'developement'
})
