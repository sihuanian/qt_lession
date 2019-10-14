// 回调 -> promise -> generator -> async 定义函数的一个关键字 await
/*
async () => {
  let a = await Promise() // 接promise
  // a resolve  的值
}
*/

const Koa = require('koa')
const KoaBody = require('koa-body') // 中间件
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
// koabody 使用一个第三方包处理form 请求

const app = new Koa()

app.use(KoaBody({
  multipart: true, // 文件读取
  formidable: { // 处理form 请求的
    maxFileSize: 200 * 1024 *1024, // 文件最大的大小
    keepExtensions: true, // 保留文件的后辍
    uploadDir: path.join(__dirname, '/static/images') // 上传的目录
  }
}))

app.use(async (ctx, next) => {
  // http://localhost:3000/  => 上传文件表单页面
  // http://localhost:3000/upload  => 处理表单
  const method = ctx.method // 请求类型 GET POST...
  const path = ctx.path // 请求路径  /upload
  console.log(method, path)
  if (method === 'GET' && path === '/') {
    ctx.body = `
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar" />
        <input type="submit" value="提交" />
      </form>
    `
  } else if (method === 'POST' && path === '/upload') {
    // console.log(ctx.request.files)
    const readdir = promisify(fs.readdir)
    const files = await readdir('./static/images', 'utf-8') // 转成promise风格的代码
    const htmlTmp = files.map(file => {
      return `
        <li>
          <a href="/static/images/${file}">${file}</a>
        </li>
      `
    }).join('')
    ctx.body = '<ol>' + htmlTmp + '</ol>'
  }
})

app.listen(3000, () => {
  console.log('running in port 3000')
})