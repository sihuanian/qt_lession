// Math.max()
const MyMath = {}
/**
 * @description: 找到一些数中的最大值
 * @param number  NaN  Not a Number
 * @return: number
 */
MyMath.max = function(...args) {
    // console.log(arguments instanceof Object, arguments.length)
    for (let i = 0; i < arguments.length; i++) {
        // 类型检测
        if (typeof args[i] !== 'number') {
            console.log('NaN')
            return NaN
        }
        console.log(args[i])
    }
}

MyMath.max(...[2, 4, 3, 9, '10'])