# 手写一个vue-cli
- npm i -g vue-cli 安装？ 发布到 npm 应用市场
- vue init webpack  1. vue是vue-cli npm 包   2. init是命令   3. webpack是参数1 process.env[3] process.env[4]
  npm config ls -l
  cj-cli 注册到 npm config ls -l  prefix
- 脚手架
  github 模版拉下来  npm 包可以做
  在下载中...
  进度条...
  完成    异步  Promise  async await 来解决
- es6 -> es5
  stylus -> css
  workflow 工作流  前端现在的一类岗位
  babel 现代js 新的特性快速来到开发中的核心
  通过它 插件来帮我们降级或打补丁
  polyfill  import

  const a = 1 /src
  var a = 1 /dist

> yarn add babel-core babel-preset-env
> yarn add babel-cli
1. -d 目录输出
2. -o 文件输出

- babel-cli babel-core babel-preset-env 预处理
  /src 开发目录 
  /dist 结果目录
  npm run compile

  -- --watch

> npm link 软链接