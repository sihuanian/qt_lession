## h5 history api vs hash
hash 后面的不会发送给后端
刷新的时候:
history api 表示
原理
后端无论收到什么请求都返回index.html
app.get('*', () => {
  render(index.html)
})

<script src="/static/a.js" />
publicPath / -> ./

package.json  "homepage": "./",

html: index.html static/
后续的请求没有拦截到
location / {
  root /usr/share/nginx/html
}