(function () {
  function Waterfall(option) {
    this.container = option.container // 挂载点
    this.number = option.number // 一次性渲染多少张图片
    this.width = document.body.clientWidth 
    this.init()
  }
  Waterfall.prototype.init = function () {
    const imgList = document.getElementsByTagName('img')
    const perNum = this.getPerNum()
    let heights = []
    for (let i = 0; i < perNum; i++) {
      heights.push(imgList[i].offsetHeight)
    }
    let minIndex = this.getMinIndex(heights)
    for (let i = perNum; i < imgList.length; i++) {
      imgList[i].style.position = 'absolute'
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`
      imgList[i].style.top = `${heights[minIndex]}px`
      imgList[i].style.transition = 'transform 0.5s ease'
      heights[minIndex] += imgList[i].offsetHeight
      minIndex = this.getMinIndex(heights) 
    }
    this.heights = heights
  }
  // 一行显示的图片数量
  Waterfall.prototype.getPerNum = function () {
    const imgList = document.getElementsByTagName('img')
    const singleWidth = imgList[0].offsetWidth
    return Math.floor(this.width / singleWidth)
  }
  // 找到第一行图片的最小高度的图片
  Waterfall.prototype.getMinIndex = function (heights) {
    let min = Math.min(...heights)
    return heights.findIndex(e => e === min)
  }
  /* Waterfall.prototype.append = function (frag) {
    const $waterfall = document.getElementById(this.container)
    $waterfall.appendChild(frag)
    const imgList = document.getElementsByTagName('img')
    const imgFromFrag = Array.prototype.slice.call(imgList, -this.number)
    const heights = this.heights
    let minIndex = this.getMinIndex(heights)
    for (let i = 0; i < 20; i++) {
      imgFromFrag[i].style.position = 'absolute'
      imgFromFrag[i].style.left = `${imgList[minIndex].offsetLeft}px`
      imgFromFrag[i].style.top = `${heights[minIndex]}px`
      imgFromFrag[i].style.transition = 'transform 0.5s ease'
      heights[minIndex] += imgFromFrag[i].offsetHeight
      minIndex = this.getMinIndex(heights) 
    }
    this.heights = heights
  } */
  Waterfall.prototype.append = function(frag) {
    const $waterfall = document.getElementById(this.container)
    $waterfall.appendChild(frag)
    const imgList = document.getElementsByTagName('img')
    console.log(imgList)
    const imgFromFrag = Array.prototype.slice.call(imgList, -20)

    let heights = this.heights
    console.log(heights)
    let minIndex = this.getMinIndex(heights)
    console.log(imgFromFrag)
    setTimeout(() => {
      for (let i = 0; i < 20; i ++) {
        console.log(1, heights)
        imgFromFrag[i].style.position = 'absolute'
        imgFromFrag[i].style.left = `${imgList[minIndex].offsetLeft}px`
        imgFromFrag[i].style.top = `${heights[minIndex]}px`
        imgFromFrag[i].style.transition = 'transform 0.5s ease'
        // 更新高度
        heights[minIndex] = heights[minIndex] + imgFromFrag[i].offsetHeight;
        minIndex = this.getMinIndex(heights)
      }
    }, 2000)
  }
  // 把Waterfall 方法挂载到window上(构造函数)
  window.Waterfall = Waterfall
})()

console.log(Waterfall) 
/**
 * 1. 显示第一行图片
 * 2. 计算出第一行图片的高度保存到heights 数组中
 * 3. 计算出heights 数组中最小值的索引
 * 4. 使用定位将图片放到上 height 最小的值的图片下方
 * 5. 更新heights 和最小索引
 * tips: 图片可能没有加载完成导致计算图片高度出错，window.onload = function() {}
 */


