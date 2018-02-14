const path = require('path')
const webapck = require('webpack')

module.exports = {
  entry: {
    vue: ['vue', 'vue-router'],
    ui: ['element-ui']
  },

  output: {
    path: path.join(__dirname, './src/dll/'), // 生成到dist目录下，每次构建都会清空目录
    filename: '[name].dll.js',
    library: '[name]'
  },

  plugins: [
    new webapck.DllPlugin({
      path: path.join(__dirname, './src/dll/', '[name]-manifest.json'),
      name: '[name]'
    }),

    new webapck.optimize.UglifyJsPlugin()
  ]
}
