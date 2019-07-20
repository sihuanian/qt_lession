## emmet 快速输入
vscode 来自微软，内置了emmet插件
- 使用css选择器来快速的语法
    1. 类名选择器 .className
    2. > 父子选择器
    3. + 兄弟选择器
    4. [] 属性选择器
    .starwars-demo>img*2[src="./images/.svg"]

- 定位
    - css 布局的一种
    - position: relateive;
    - position: absolute;
    - body是最顶层的定位，如果父级及以上的元素存在存在定位，就会相对最近的长辈元素进行定位
    - 浮动与定位都会将转换成 `inline-block`

- 文本转换
    - text-transform none|uppercase 全部大写|lowercase 全部小写|capitalize 首字母大写|full-width

- transform 
    - 变形属性 key: value => translate移动|scale 缩放|rotata旋转
    - 三维世界 transform-style: preserve3d; perspective 视距 视点与屏幕的距离

- npm node 的工具包管理
    - live-server 静态网页提供了web-server 热更新
    - 安装 npm i -g  live-server
    - js 的命令行工具 运行在服务器端 
    - 使用 使终端在项目文件夹下 使用 `live-server`  （默认执行 index.html 文件）  或 `live-server + 文件地址`
