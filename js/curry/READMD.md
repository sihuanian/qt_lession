## 柯里化

编写一个函数，校验电话号码，邮箱

通用函数有好处  接受n 个参数 每次返回一个函数
可以裂变吗?
checkCellPhone = checkByRegExp()
checkEmail = checkByRegExp()

checkCellPhone('13333333333')

函数式编程

- 返回函数，每次只接受一个参数
- 返回的函数运行，由于闭包，最初参数的数量，最后的参数时，运行完成，否则继续返回函数

- 分函数收集参数的过程
  return function() {} 产生闭包  fn.length fn 闭合

- require + module.exports  es5 模块化方案