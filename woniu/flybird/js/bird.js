const bird = {
    flyTimer: null, // 小鸟飞翔定时器
    wingTimer: null, // 小鸟翅膀摆动定时器
    div: document.createElement('div'),
    fallSpeed: 0, // 小鸟下落的速度
    showBird(parentEle) {
        this.div.style.width = '40px'
        this.div.style.height = '28px'
        this.div.style.backgroundImage = 'url(../img/bird0.png)'
        this.div.style.backgroundRepeat = 'no-repeat'
        this.div.style.position = 'absolute'
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'
        parentEle.appendChild(this.div) // 将小鸟div插入到游戏界面中
    },
    // 控制小鸟的下落的函数
    flyBird() {
        this.flyTimer = setInterval(fly.bind(bird), 60);

        function fly() {
            this.div.style.top = this.div.offsetTop + this.fallSpeed++ + 'px' // 设置小鸟距离顶部的距离
            if (this.div.offsetTop <= 0) {
                this.div.style.top = 0 // 不允许小鸟飞出顶部
                this.fallSpeed = 2 // 用于小鸟不能飞出顶部
            }
            if (this.div.offsetTop > 395) {
                this.fallSpeed = 0
                clearInterval(this.flyTimer)
                clearInterval(this.wingTimer)
            }
            if (this.fallSpeed > 12) {
                bird.fallSpeed = 12 // 控制小鸟下落的速度最大不能超过12
            }
        }
    },
    wingWave() { // 控制小鸟煽动翅膀的函数
        var up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)'],
            down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)'],
            i = 0,
            j = 0

        this.wingTimer = setInterval(wing.bind(bird), 120)

        function wing() {
            if (this.fallSpeed > 0) {
                this.div.style.backgroundImage = down[i++]
                if (i == 2) {
                    i = 0
                }
            }
            if (this.fallSpeed <= 0) {
                this.div.style.backgroundImage = up[j++]
                if (j == 2) {
                    j = 0
                }
            }
        }
    }
}