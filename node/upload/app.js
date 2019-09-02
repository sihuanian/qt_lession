const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const app = express()

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function(req, file, cb) {
    console.log(file)
    const fileHz = file.mimetype.replace('image/', '')
    console.log(fileHz)
    cb(null, Date.now() + '.' + fileHz)
  }
})

const upload = multer({
  storage: storage
})

app.get('/', function(req, res) {
  const form = fs.createReadStream(path.join(__dirname, 'index.html'))
  form.pipe(res)
})
app.post('/upload', upload.single('pic'), function(req, res) {
  console.log('要处理表单提交了')
  res.send({
    code: 200
  })
})
app.listen(3000)