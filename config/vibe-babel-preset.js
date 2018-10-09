// const env = require('babel-preset-env').buildPreset

module.exports = {
  presets: [
    [
      'env',
      {
        modules: process.env.BABEL_MODULE_MODE === 'es' ? false : 'commonjs'
      }
    ]
  ]
}
