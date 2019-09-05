const nodeMailer = require('nodemailer')
const fs = require('fs')
const juice = require('juice')
const ejs = require('ejs')

const transporter = nodeMailer.createTransport({
  service: 'qq',
  port: 465, // smtp默认端口
  secureConnection: true,
  auth: {
    user: '2267322300@qq.com',
    pass: 'evsjvddattutebgf'
  }
})

const html = fs.readFileSync('./template/index.ejs', 'utf8')
const template = ejs.compile(html)
const afterHtml = template({
  userName: 'because of you'
})
const css = fs.readFileSync('./template/index.css', 'utf8')
// const afterWithInCss = juice(afterHtml)
const afterWithInCss = juice.inlineContent(afterHtml, css)

transporter.sendMail({
  to: '2267322300@qq.com',
  html: afterWithInCss,
  from: '2267322300@qq.com',
  subject: 'test'
}, (err, info) => {
  if (err) {
    console.log('邮件出错了 ', err)
  }
})