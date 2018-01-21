var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    'pageA': './src/page-a',
    'pageB': './src/page-b',
    'vendor': ['lodash']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      async: 'async-common', // or true
      minChunks: 2,
      children: true
    }),

    // 把第三方代码进行抽离
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    // 把webpack进行抽离
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]
}