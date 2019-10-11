// 组件中公共的部分
let mixin = {
  data () {
    return {
      dialogVisible: false // 使用mixin的不同组件数据不会相互影响
    }
  },
  methods: {
    open () {
      this.dialogVisible = true;
    },
    close () {
      this.dialogVisible = false;
    }
  }
}

export default mixin