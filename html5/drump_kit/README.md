- vh viewheight 等比例的高度
    - 100 份 设备适配问题

- flex 布局，重要的布局方式，弹性布局
    - 可以在弹性空间中放置，特别适合于移动世界
    - 取消display: flex; 会变成坚排显示
        - 子元素都是div,块级元素 天生换行 flex 会改变这个

- em和rem都是相对单位，em是相对于其父元素的font-size，页面层级越深，em换算越复杂，麻烦。
- rem直接相对于根元素html，避开层级关系，移动端新型浏览器对其支持较好。 html 默认font-size 是 10px
    - 1rem = html font-size px

- 盒子模型
    - 了解元素在页面上的表现
    - 盒子模型 = content + padding + border + margin + position