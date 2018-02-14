# webpack-demo

> Webpack demo project.

## 参考资料

<https://www.cnblogs.com/skylor/p/7008756.html>

## Typings

``` bash
npm install typings

typings install lodash
```

## webpack代码分割以及懒加载

### 实现方式

webpack methods
  require.ensure
  require.include

ES2015 Loader Spec
  System.import() -> import()
  import() -> Promise
  import().then()

### 应用场景

  分离业务代码和第三方依赖
  分离业务代码、业务公共代码和第三方依赖
  分离首次加载和访问后加载的代码

## 引入CSS

style-loader 创建style标签
css-loader 引入css文件

## 提取CSS

extract-loader
ExtractTextWebpackPlugin

## PostCSS in Webpack

PostCSS
Autoprefixer
CSS-nano
CSS-next
postcss-import
postcss-url
postcss-assets

## JS Tree Shaking

Webpack.optimize.uglifyJS
要使得Tree Shaking生效的前提是：
1.项目代码采用ES6的方式进行编写
2.引用的第三方代码采用ES6的方式进行编写
3.使用babel时设置modules为false<https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226843&idx=1&sn=8ce859bb0ccaa2351c5f8231cc016052&chksm=bd495b5f8a3ed249bb2d967e27f5e0ac20b42f42698fdfd0d671012782ce0074a21129e5f224&mpshare=1&scene=1&srcid=08241S5UYwTpLwk1N2s51tXG&key=adf9313632dd72f547280f783810492f9adb79ab0d4163835d8f16b9ef1ba0b666c3253ebf73fcbd10842f39091c3775a8bcb7ebf2f1613b0baadc517bd3a3f871c02aa3495fa42b3e960fd7f99357e0&ascene=0&uin=MTkwNTY4NjMxOQ%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12+build(16A323)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=Kwkar2P9YwiWaPYmrcaqYmEqAigrP8I305SDCp6p05cCbna5znl6Uz%2FMx75BskRL>

## Lodash Tree Shaking

lodash
lodash-es
Babel-plugin-lodash

## CSS Tree Shaking

Purify CSS
purifycss-webpack

## 图片处理

CSS中引入的图片
自动合成雪碧图
压缩图片
Base64编码
file-loader
url-loader
img-loader
postcss-sprites

## 字体文件

file-loader
url-loader

## 第三方JS库

webpack.providePlugin
imports-loader
window

## HTML in Webpack

自动生成HTML
HtmlWebpackPlugin

HTML中引入图片
html-loader

``` html
<img src="${require('img-path')}"/>
```

配合优化
提前载入webpack加载代码
inline-manifest-webpack-plugin
(✔)html-webpack-inline-chunk-plugin

## 搭建开发环境

webpack watch mode
(1)webpack -watch
(2)webpack -w

webpack-dev-server
Proxy
代理远程接口请求 http-proxy-middleware devServer.proxy

Module Hot Reloading
保持应用的数据状态
节省调试时间
样式调试更快
devServer.hot
webpack.HotModuleReplacementPlugin
webpack.NamedModulesPlugin
module.hot
module.hot.accept

express + webpack-dev-middleware

Source Map调试
Devtool
  Development
    eval
    eval-source-map
    cheap-eval-source-map
    (✔)cheap-module-eval-source-map
  Production
    (✔)source-map
    hidden-source-map
    nosource-source-map
webpack.SourceMapDevToolPlugin
webpack.EvalSourceMapDevToolPlugin

需要开启对应loader的sourcemap配置项
css-loader.option.sourcemap
less-loader.option.sourcemap
sass-loader.option.sourcemap

## ESlint检查代码格式

eslint
eslint-loader
eslint-plugin-html
eslint-friendly-formatter

## 配置ESlint

webpack config
.eslintrc.*
package.json中的eslintConfig

## javascript standard style

eslint-config-standard
eslint-plugin-promise
eslint-plugin-standard
eslint-plugin-import
eslint-plugin-node

## 配置eslint

eslint-loader
  options.failOnWarning
  options.failOnError
  options.formatter
  options.outputReport
devServer.overlay

## 开发环境和生产环境

开发环境
  模块热更新
  sourceMap
  接口代理
  代码规范检查

生产环境
  提取公用代码
  压缩混淆
  文件压缩/Base64编码
  去除无用的代码

共同点
  同样的入口
  同样的代码处理(loader处理)
  同样的解析配置

webpack-merge
webpack.dev.conf.js
webpack.prod.conf.js
webpack.common.conf.js

使用middleware搭建开发环境
Express or Koa
webpack-dev-middleware
webpack-hot-middleware
http-proxy-middleware
connect-history-api-fallback
opn

## 打包结果分析

Offical Analyse Tool
  webpack --profile --json > stats.json (Mac)
  webpack --profile --json | Out-file 'stats.json' - Encoding OEM (windows)
  进入http://webpack.github.io/analyse/ 上传刚刚生成的json文件

webpack-bundle-analyzer
  插件
    BundleAnalyzerPlugin
  命令行
    webpack-bundle-analyzer stats.json

## 优化打包速度

文件数量
依赖数量
页面数量

办法一
  分开vendor和app
  DllPlugin
  DllReferencePlugin
  打包第三方代码的配置文件 webpack.dll.conf.js

办法二
  UglifyJsPlugin
    parallel
    cache

办法三
  HappyPack
  HappyPack.ThreadPool

办法四
  babel-loader
    options.cacheDirectory
    include
    exclude

其他
  减少resolve
  Devtool:去除sourceMap
  cache-loader
  升级node
  升级webpack
