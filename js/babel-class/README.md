- 对象中的 Symbol 属性不可以被枚举
- 枚举中指对象当中的属性是否可以被遍历出来，Object.keys() 会返回由一个给定对象的自身可枚举属性组成的数组，跟for...in 的一个区别是for...in 返回的是单个字符串上类型
- 类(class)的内部所定义的方法都是不可以枚举的,ES5 定义类中的方法是可以枚举
- 类(class)中的静态(static)方法不可以被继承