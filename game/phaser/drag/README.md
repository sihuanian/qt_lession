- 命名空间 namespace
    Phaser  {}
    1. 申明领地
        取名字  var MIUI = {}
        MIUI.version = '10.1'
        MIUI.openSystem = function() {}
        游戏框架最小化入侵我们的window
        污染全局命名空间
    2. var Phaser = {} 直接挂载在window 浏览器的全局作用域 scope 
    3. ES5 类的构造使用 function() {} 如果函数名首字母大写就可以视为类（构造函数，方法）
    Phaer.Game.prototype.getName