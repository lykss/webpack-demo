var webpack = require('webpack')
var path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')

module.exports = {
  entry: {
    'app': './src/app.js'
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
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }] // 先由css-loader把css文件进行引入再由style-loader把css代码填充到html中，所以css-loader与style-loader之间的顺序需要注意
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader'
          },
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')(),
                  require('postcss-cssnext')()
                ]
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     useRelativePath: true,
          //     outputPath: 'dist/',
          //     publicPath: ''
          //   }
          // },
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              useRelativePath: true,
              outputPath: 'dist/',
              publicPath: ''
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),

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
    }),

    // 抽取CSS
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css'
    }),

    // PurifyCSS一定要放在ExtractTextWebpackPlugin后面
    new PurifyCSS({
      paths: glob.sync([
        path.join(__dirname, './index.html')
      ])
    })
  ]
}