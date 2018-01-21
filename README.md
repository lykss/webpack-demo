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
