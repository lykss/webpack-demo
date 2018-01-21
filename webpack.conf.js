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
    // 抽离业务上的公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      chunks: ['pageA', 'pageB'] // 指定抽取公共代码的范围,避免报错 ERROR in CommonsChunkPlugin: While running in normal mode it's not allowed to use a non-entry chunk (vendor)
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