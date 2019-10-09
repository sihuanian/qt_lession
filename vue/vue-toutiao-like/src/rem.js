// flexiable.js 移动端适配的库
// rem -> html font-size
// 根据不同的屏幕大小 去计算出不同的 html font-size
(function(window, document) {
  const cal = function() {
    const width = document.documentElement.clientWidth // html 的宽度
    // 以375 宽的设备为基准
    document.documentElement.style.fontSize = 100 * (width / 375) + 'px'
    document.body.style.fontSize = 16 + 'px'
  }
  cal()
})(window, document)