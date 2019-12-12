## 浏览器渲染的过程
1. 解析html,生成DOM 树，生成cssom树
2. 将 DOM树与 cssOM树结合，生成渲染树（render tree） ps: 渲染树只包含可见的节点
3. 回流，根据生成的渲染树进行回流得到节点的几何信息（位置， 大小）
4. 重绘，根据渲染树和节点的几何信息得到节点的绝对像素（背景色等样式改变会发生重绘）
5. 将像素发给GPU,展示到页面上

### 何时会发生回流与重绘
ps: 注意：回流一定会触发重绘，而重绘不一定会回流
1. 添加与删除*可见*DOM元素时
2. 元素的位置和大小发生变化时（内容改变影响位置和大小的变化）
3. 浏览器窗口大小调整时
4. 页面初次渲染时

### 强制队列刷新
offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
getComputedStyle()
getBoundingClientRect

### 如何减少回流与重绘的次数
1. 使元素脱离文档流
2. 对其进行多次修改
3. 将元素带回文档流中 

#### 使DOM 脱离文档流的三种方式
1. 隐藏元素
2. 使用文档片段，document.createDocumentFragment 在当前的DOM 之外构建一个子树，再把它拷贝进文档
3. 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。