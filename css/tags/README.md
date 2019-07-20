- css 烦 浪费时间
    > {key: value;}

- css 编译 stylus 
- stylus 是 css预编译
    - 用 stylus 语法来写 css快多了，其他一些高级功能
    - 写的是 .styl 文件，最后浏览器要的是 css

- `stylus common.styl -o common.css` 
    - 将 common.styl 编译成 common.css 文件
- `stylus -w common.styl -o common.css`
    - 一直会监控 common.styl 文件的修改

- 界面第一步是写结构，这也是最重要的
    1. 脱离分析标签低级趣味 从内到外
    2. 盒子 从外到内
        - main.container>ul.tag-list>li.item>div.tag>.info-box+.action-box
    3. 写结构不要去管 css 
    4. 语义化，用合适的标签
