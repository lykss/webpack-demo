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

- require.ensure
- require.include

ES2015 Loader Spec

- System.import() -> import()
- import() -> Promise
- import().then()

### 应用场景

- 分离业务代码和第三方依赖
- 分离业务代码、业务公共代码和第三方依赖
- 分离首次加载和访问后加载的代码

## 引入CSS

- style-loader 创建style标签
- css-loader 引入css文件

## 提取CSS

- extract-loader
- ExtractTextWebpackPlugin

## PostCSS in Webpack

- PostCSS
- Autoprefixer
- CSS-nano
- CSS-next
- postcss-import
- postcss-url
- postcss-assets

## JS Tree Shaking

Webpack.optimize.uglifyJS
要使得Tree Shaking生效的前提是：

- 项目代码采用ES6的方式进行编写
- 引用的第三方代码采用ES6的方式进行编写
- 使用babel时设置modules为false<https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226843&idx=1&sn=8ce859bb0ccaa2351c5f8231cc016052&chksm=bd495b5f8a3ed249bb2d967e27f5e0ac20b42f42698fdfd0d671012782ce0074a21129e5f224&mpshare=1&scene=1&srcid=08241S5UYwTpLwk1N2s51tXG&key=adf9313632dd72f547280f783810492f9adb79ab0d4163835d8f16b9ef1ba0b666c3253ebf73fcbd10842f39091c3775a8bcb7ebf2f1613b0baadc517bd3a3f871c02aa3495fa42b3e960fd7f99357e0&ascene=0&uin=MTkwNTY4NjMxOQ%3D%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12+build(16A323)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=Kwkar2P9YwiWaPYmrcaqYmEqAigrP8I305SDCp6p05cCbna5znl6Uz%2FMx75BskRL>

## Lodash Tree Shaking

- lodash
- lodash-es
- Babel-plugin-lodash

## CSS Tree Shaking

- Purify CSS
- purifycss-webpack

## 图片处理

- CSS中引入的图片
- 自动合成雪碧图
- 压缩图片
- Base64编码
- file-loader
- url-loader
- img-loader
- postcss-sprites

## 字体文件

- file-loader
- url-loader

## 第三方JS库

- webpack.providePlugin
- imports-loader
- window

## HTML in Webpack

自动生成HTML

- HtmlWebpackPlugin

HTML中引入图片

- html-loader

``` html
<img src="${require('img-path')}"/>
```

配合优化

- 提前载入webpack加载代码
- inline-manifest-webpack-plugin
- (✔)html-webpack-inline-chunk-plugin

## 搭建开发环境

webpack watch mode

- webpack -watch
- webpack -w

webpack-dev-server

- Proxy
- 代理远程接口请求 http-proxy-middleware devServer.proxy

Module Hot Reloading

- 保持应用的数据状态
- 节省调试时间
- 样式调试更快
- devServer.hot
- webpack.HotModuleReplacementPlugin
- webpack.NamedModulesPlugin
- module.hot
- module.hot.accept

express + webpack-dev-middleware

Source Map调试

- Devtool
  - Development
    - eval
    - eval-source-map
    - cheap-eval-source-map
    - (✔)cheap-module-eval-source-map
  - Production
    - (✔)source-map
    - hidden-source-map
    - nosource-source-map
- webpack.SourceMapDevToolPlugin
- webpack.EvalSourceMapDevToolPlugin

需要开启对应loader的sourcemap配置项

- css-loader.option.sourcemap
- less-loader.option.sourcemap
- sass-loader.option.sourcemap

## ESlint检查代码格式

- eslint
- eslint-loader
- eslint-plugin-html
- eslint-friendly-formatter

## 配置ESlint

- webpack config
- .eslintrc.*
- package.json中的eslintConfig

## javascript standard style

- eslint-config-standard
- eslint-plugin-promise
- eslint-plugin-standard
- eslint-plugin-import
- eslint-plugin-node

## 配置eslint

eslint-loader

- options.failOnWarning
- options.failOnError
- options.formatter
- options.outputReport

devServer.overlay

## 开发环境和生产环境

开发环境

- 模块热更新
- sourceMap
- 接口代理
- 代码规范检查

生产环境

- 提取公用代码
- 压缩混淆
- 文件压缩/Base64编码
- 去除无用的代码

共同点

- 同样的入口
- 同样的代码处理(loader处理)
- 同样的解析配置

webpack-merge
webpack.dev.conf.js
webpack.prod.conf.js
webpack.common.conf.js

使用middleware搭建开发环境

- Express or Koa
- webpack-dev-middleware
- webpack-hot-middleware
- http-proxy-middleware
- connect-history-api-fallback
- opn

## 打包结果分析

Offical Analyse Tool

- webpack --profile --json > stats.json (Mac)
- webpack --profile --json | Out-file 'stats.json' - Encoding OEM (windows)
- 进入<http://webpack.github.io/analyse/> 上传刚刚生成的json文件

webpack-bundle-analyzer

- 插件
  - BundleAnalyzerPlugin
- 命令行
  - webpack-bundle-analyzer stats.json

## 优化打包速度

影响因素

- 文件数量
- 依赖数量
- 页面数量

办法一

- 分开vendor和app
- DllPlugin
- DllReferencePlugin
- 打包第三方代码的配置文件 webpack.dll.conf.js

办法二

- UglifyJsPlugin
  - parallel
  - cache

办法三

- HappyPack
- HappyPack.ThreadPool

办法四

- babel-loader
  - options.cacheDirectory
  - include
  - exclude

其他

- 减少resolve
- Devtool:去除sourceMap
- cache-loader
- 升级node
- 升级webpack

## 长缓存优化

场景

- 改变app代码，vendor代码也改变

解决

- 提取vendor
- hash -> chunkhash
- 提取webpack runtime

场景

- 引入新模块，模块顺序变化，vendor hash也变化

解决

- NamedChunksPlugin
- NamedModulesPlugin

场景

- 动态引入模块时，vendor hash也改变

解决

- 定义动态模块的chunkname

总结

- 独力打包vendor
- 抽离manifest(webpack runtime)
- 使用NamedChunksPlugin
- 使用NamedModulesPlugin
- 动态模块给定模块名称

## 多页面应用

特点

- 多入口 entry
- 多页面 html
- 每个页面不同的chunk
- 每个页面不同的参数

方案

- 多配置
  - webpack 3.1.0
  - parallel-webpack
    - parallel-webpack --watch
    - parallel-webpack --config
  - 优点
    - 可以使用parallel-webpack来提高打包速度
    - 配置更加独力，灵活
  - 缺点
    - 不能多页面之间共享代码
- 单配置
  - 优点
    - 可以共享各个entry之间的公用代码
  - 缺点
    - 打包速度比较慢
    - 输出的内容比较复杂

## vue与webpack

vue-cli

## react和webpack

- create-react-app
- react-scripts

## Angular和webpack

Angular-cli

- Angular最佳实践代码
- 所有项目依赖
- Typescript和测试
- 环境设置

npm install -g @angular/cli

## webpack面试

概念

- 什么是webpack？webpack与grunt和gulp有什么不同？

  webpack是一个模块打包工具，可以递归打包项目中的所有模块，最终生成几个打包后的文件。和其他工具最大的不同在于他支持code-splitting、模块化(AMD、ESM、CommonJS)、全局分析。
  grunt和gulp是任务构建工具，根据一系列步骤执行任务。

- 什么是bundle，什么是chunk，什么是module？

  bundle是由webpack打包出来的文件。chunk是指webpack在进行模块依赖分析时，代码分割出来的代码块。module是开发中的单个模块。

- 什么是loader？什么是plugin？

  loader是用来告诉webpack如何处理某一类型的文件，并且引入到打包出来的文件中。
  plugin是用来自定义webpack打包过程的方式，一个插件是含有apply方法的一个对象，通过这个方法可以参与到整个webpack打包的各个流程(生命周期)。

配置

- 如何自动生成webpack的配置？

  webpack-cli，vue-cli

开发

- webpack-dev-server和http服务器如Nginx有什么区别？

  webpack-dev-server使用内存来存储webpack开发环境下的打包文件，并且可以使用模块热更新，比传统的http服务对开发更加简单高效。

- 什么是模块热更新？

  模块热更新是webpack的一个功能，可以使得代码修改过后不用刷新浏览器就可以更新，是高级版本的自动刷新浏览器。

优化

- 什么是长缓存？在webpack中如何做到长缓存优化？

  浏览器在用户访问页面时，为了加快加载速度，会对用户访问的静态资源进行存储，但是每一次代码升级或是更新，都需要浏览器去下载新的代码。最简单和最方便的更新方式就是引入新的文件名称。在webpack中可以在output中给输出的文件指定chunkhash，并且分离经常更新的代码和框架代码。通过NamedModulesPlugin或HashedModuleIdsPlugin使再次打包文件名不变。

- 什么是Tree-Shaking？CSS可以Tree-Shaking吗？

  Tree-Shaking是指在打包中去除那些引入了但是在代码中没有被用到的那些无效代码。在webpack中Tree-Shaking是通过UglifyJSPlugin来Tree-Shaking javascript的。CSS需要使用Purify-CSS。

## webpack工程化总结

- 实时编译
- 开发服务
- 自动优化

- 一切皆模块
- 极速的调试响应速度
- 优化应该自动完成
