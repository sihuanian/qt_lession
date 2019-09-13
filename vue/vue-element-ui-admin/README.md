- $route.matched
一个数组，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。
面包屑通过循环 $route.matched来显示
v-for="(route, index) in $route.matched" :key="index"
{{ route.meta.name }}

ElementUI
1. Layout 布局
2. Table 表格
3. Form 表单
4. Breadcrumb 面包屑
5. NavMenu 导航菜单