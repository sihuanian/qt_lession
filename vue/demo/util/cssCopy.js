const fs = require('fs')
const glob = require('glob')

// css 文件拷贝
const callbackFile = function (src, dst) {
  fs.readFile(src, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return false
    }
    fs.writeFile(dst, data.toString(), 'utf-8', error => {
      if (error) {
        console.log(error)
        return false
      }
      console.log('写入成功')
      fs.unlink(src, function () { // css 删除
        
      })
    })
  })
}

// 复制目录
glob.sync('./dist/css/*.css').forEach((filepath, name) => {
  let fileNameList = filepath.split('.')
  let fileName = fileNameList[1].split('/')[3] // 多页面的页面目录
  let copyName = filepath.split('/')[3]
  let changeDirectory = `./dist/${fileName}/css`
  fs.exists(changeDirectory, function (exists) {
    if (exists) {
      // ${fileName}下的文件已经存在
      callbackFile(filepath, `${changeDirectory}/${copyName}`)
    } else {
      fs.mkdir(changeDirectory, function () {
        callbackFile(filepath, `${changeDirectory}/${copyName}`)
      })
    }
  })
})
