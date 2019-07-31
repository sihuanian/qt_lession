const fs = require('fs')
const zlib = require('zlib') // 文件的压缩

const gzip = zlib.createGzip()

const inFile = fs.createReadStream('./sample.txt')
const outFile = fs.createWriteStream('./sample.txt.gz')
inFile.pipe(gzip).pipe(outFile)