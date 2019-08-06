- 如果我们有好多信息要从用户收集
    表单不要太长    如何让表单更加易用
    移动端 分页
    PC 分成多个表单 使用document.forms[]

- JS在面向对象中
    this 指向谁
    EditInPlace  类 抽象概念 老板
    let editor = new EditInPlace() 员工
    this 指向 editor
    this.staticElement = document.createElement('span')
    this.converToText() // 既是函数 又是对象的方法 this指向对象
    this.staticElement.addEventListener('click', function(){
        this => 对象
        this => this.staicElement 语法定义
        作为事件来执行 内部的this 指向事件发生的元素
    })

- 函数内部的this 是执行时候动态决定的，执行的方法方式决定的
    this.converToText() // 函数是作为对象的方法调用 this指向对象

- EditorInPlace 类  constructor + prototype(原型对象)
    new EditorInPlace() 对象发生了什么

- this 用法
- 代码组织
- 状态的方法
- 原生JS