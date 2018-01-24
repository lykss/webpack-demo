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
