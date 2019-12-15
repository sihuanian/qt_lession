const fs = require('fs')
const glob = require('glob')

// html 文件替换
const callbackFile = function (src, dst, name, filepath) {
  fs.readFile(src, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return false
    }
    let regCss = new RegExp("\/css/" + name + "", 'g')
    let regJs = new RegExp("\/js/" + name + "", 'g')
    let htmlContent = data.toString()
      .replace(regCss, `\.\/css\/${name}`)
      .replace(regJs, `\.\/js\/${name}`)

    fs.writeFile(dst, htmlContent, 'utf-8', function (error) {
      if (error) {
        console.log(error)
        return false
      }
      if (src.indexOf('/index.html') == -1) {
        fs.unlink(src, function () {
          // html删除成功
        })
      }
      fs.unlink(filepath, function () { // 删除css
        
      })
      fs.unlink(filepath + '.map', function () { // 删除js
        
      })
    })
  })
}

// 复制目录
glob.sync('./dist/js/*.js').forEach((filepath, name) => {
  let fileNameList = filepath.split('.')
  let fileName = fileNameList[1].split('/')[3] // 多页面的页面目录
  let thisDirectory = `./dist/${fileName}/${fileName}.html`
  let changeDirectory = `./dist/${fileName}/index.html`
  if (!fileName.includes('chunk-vendors')) {
    callbackFile(thisDirectory, changeDirectory, fileNameList, filepath)
  }
})