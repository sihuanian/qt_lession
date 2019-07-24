/**
 * @description: 最近最少使用原则
 * @param capacity: number 缓存容量
 * @return: 
 */

// 数据类型选择 [] 规定那端是最近最常使用的 -> 最右端
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.arr = [] // 数据结构 arr.length >= this.capacity 回收操作
    this.obj = {} // 读操作选择 object
}

LRUCache.prototype.get(key) = function() {
    // 调整优先级
    return 
}

LRUCache.prototype.put() = function() {

}

LRUCache.prototype.set() = function() {

}

new LRUCache(2)

/*
get() 读操作，从数组中删除并添加到最右端

put(1,1) [1]
put(2,2) [1,2]
get(1)   [2,1]
put(3,3) [1,3] 带来空间分配的 回收空间 最近最少使用（length >= 容量） shift() push()



// */
// var LRUCache = function (capacity) {
//     this.capacity = capacity
//     this.map = new Map()
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//     let value = this.map.get(key)

//     if (this.map.has(key)) {
//         this.map.delete(key)
//         this.map.set(key, value)
//         return value
//     }
//     return -1
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//     if (this.map.has(key)) {
//         this.map.delete(key)
//     }
//     this.map.set(key, value)
//     if (this.map.size > this.capacity) {
//         let k = this.map.keys().next().value
//         this.map.delete(k)
//     }
// };
