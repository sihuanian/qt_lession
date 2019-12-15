const fs = require('fs')
const glob = require('glob')

// js 文件拷贝
const callbackFile = function (src, dst) {
  fs.readFile(src, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return false
    }
    if (dst.includes('.map')) {
      // 删除map
      // 删除js
    } else {
      callbackFile(dst, `${dst}.map`)
    }
  })
}

// 复制目录
glob.sync('./dist/js/*.js').forEach((filepath, name) => {
  let fileNameList = filepath.split('.')
  let fileName = fileNameList[1].split('/')[3] // 多页面的页面目录
  let copyName = filepath.split('/')[3]
  let changeDirectory = `./dist/${fileName}/css`
  if (!fileName.includes('chunk-vendors')) {
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
  }
})
