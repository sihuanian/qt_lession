;let data = [
    {value: '周杰伦的听妈妈的话，我反复听了好几年。', time: 5, color: 'red', speed: 1, fontSize: 22},
    {value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 6},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 8},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 15},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 35},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 20},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 18},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 10}
]

// 获取需要用到的所有DOM 结构
let canvas = document.getElementById('canvas'),
    video = document.getElementById('video'),
    $txt = document.getElementById('text'),
    $btn = document.getElementById('btn'),
    $color = document.getElementById('color'),
    $range = document.getElementById('range')

// 创建 CanvasBarrage 类
class CanvasBarrage {
    // constructor 是一种用于创建和初始化类创建的对象的特殊方法
    constructor(canvas, video, opts = {}) { // opts = {} 第三个参数默认为空对象，如果不传第三个参数也不会报错
        

        // 如果 canvas 和 video 都没传，那就直接 return掉
        if (!canvas || !video) {
            return
        }

        // 直接挂载到 this上
        this.video = video
        this.canvas = canvas
        // 设置 canvas 的宽高和 video 一致
        this.canvas.width = video.width
        this.canvas.height = video.height
        // 获取画布， 操作画布
        this.ctx = canvas.getContext('2d')

        // 设置默认参数，如果没有传参，就使用默认的
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }

        // 合并defOpts opts,合并到 this 中
        Object.assign(this, defOpts, opts)

        // 添加属性，用来判断当前视频是播放还是暂停状态
        this.isPaused = true // 默认视频为暂停状态
        // 得到所有弹幕消息
        this.barrages = this.data.map(item => new Barrage(item, this))
        // 渲染
        this.render()

    }

    // 渲染 canvas 绘制的弹幕
    render () {
        // 渲染的第一步是清除画布
        this.clear()
        // 渲染弹幕
        this.renderBarrage()
        // 如果没有暂停的话就继续渲染
        if (!this.isPaused){
            // 通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this))
        }
    }

    clear () {
        // 清除整个画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    renderBarrage () {
        // 1. 首先拿到当前视频播放的时间 2. 根据该时间来和弹幕要展示的时间作比较来判断是否展示弹幕
        let time = this.video.currentTime

        // 遍历所有的弹幕
        this.barrages.forEach(barrage => {
            // 用一个 flag来处理是否渲染，默认是 false
            if (!barrage.flag && time >= barrage.time) {
                // 判断当前弹幕有过初始化
                // 如果  isInit 还是false,那就对当前弹幕做初始化操作
                if (!barrage.isInit) {
                    barrage.init()
                    barrage.isInit = true
                }
                // 弹幕要从右往左渲染，所以 x 轴的坐标减去当前弹幕的速度即可
                barrage.x -= barrage.speed
                barrage.render() // 渲染当前弹幕

                // 如果当前弹幕 x 坐标比自身的宽度还小，就表示渲染结束
                if (barrage.x < -barrage.width) {
                    barrage.flag = true
                }
            }
        })
    }

    add (obj) {
        // 实际上就是往 barrages数组里面添加一项 Barrage的实例而已
        this.barrages.push(new Barrage(obj, this))
    }
}

// 创建 Barrage类，用来实例化每一个弹幕元素
class Barrage {
    constructor (obj, ctx) {
        this.value = obj.value // 弹幕的内容
        this.time = obj.time // 弹幕的时间
        // 把obj 和 ctx挂载到 this上，方便获取
        this.obj = obj
        this.context = ctx
    }
    // 初始化弹幕
    init () {
        // 如果数据里没有涉及到下面四种参数，那就直接取默认参数
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize

        // 为了计算每一个弹幕的宽度，我们必须创建一个 p标签，然后计算文字的宽度
        let p = document.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        document.body.appendChild(p)

        // 设置弹幕的宽度
        this.width = p.clientWidth // clientWidth,clientHeight 为当前DOM 元素的宽度和高度
        // 得到弹幕的宽度后就把 p 标签从 body 中删除,不将p 标签放到body 中无法使用 DOM.clientWidth
        document.body.removeChild(p)

        // 设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random()
        // 做一下超出范围的处理
        if (this.y < this.fontSize) {
            this.y = this.fontSize
        } else if (this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize
        }
    }

    // 渲染每一个弹幕
    render () {
        // 设置画布文字的字体和字号
        this.context.ctx.font = `${this.fontSize}px Arial`
        // 设置画布的颜色
        this.context.ctx.fillStyle = this.color
        // 绘制方字
        this.context.ctx.fillText(this.value, this.x, this.y)
    }
}

// 创建 CanvasBarrage实例
let canvasBarrage = new CanvasBarrage(canvas, video, { data })
// 设置video 的 play 事件来调用 CanvasBarrage实例的 render 方法
video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render() // 点了播放按钮，触发弹幕渲染
})

// 发送弹幕的方法
function send () {
    let value = $txt.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = {value, time, color, fontSize}

    // 添加弹幕数据
    canvasBarrage.add(obj)
    $txt.value = ''
}

$btn.addEventListener('click', send)