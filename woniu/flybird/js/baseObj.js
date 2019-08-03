var baseObj = {
    // 随机数
    randomNum(num1, num2) {
        return parseInt(Math.random() * (num2 - num1 +1) + num1)
    },

    // 检测两个容器元素之间的碰撞
    rectangleCrashExamine(obj1, obj2) {
        var obj1Left = obj1.offsetLeft,
            obj1Width = obj1.offsetLeft + obj1.offsetWidth,
            obj1Top = obj1.offsetTop,
            obj1Height = obj1.offsetTop + obj1.offsetHeight,
            obj2Left = obj2.offsetLeft,
            obj2Width = obj2.offsetLeft + obj2.offsetWidth,
            obj2Top = obj2.offsetTop,
            obj2Height = obj2.offsetTop + obj2.offsetHeight

        if (!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)) {
            return true
        }
        return false
    }
}