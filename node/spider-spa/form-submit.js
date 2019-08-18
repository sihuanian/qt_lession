const puppeteer = require('puppeteer')

async function formSubmit() {
  // async await 
  // await 后面接 promise
  const browser = await puppeteer.launch({
    headless: false // 是否显示界面 false 是显示
  }) // 启动浏览器
  const page = await browser.newPage() // 打开新的标签页
  await page.goto('https://github.com/login') // 地址栏输入
  await page.setDefaultNavigationTimeout() // 默认超时时间 30s
  await page.waitFor(2000) // 等待2秒 
  await page.type('#login_field', '123456') // 在 id为 login_field标签内输入
  await page.type('#password', '123456')
  await page.click('input[type="submit"]') // 点击
}

formSubmit()