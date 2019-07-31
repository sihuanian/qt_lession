const fs = require('fs') // require 模块引入机制

// 1. 创建一个可读流  2. 构建一个管道 process .stdout
fs.createReadStream('./sample.txt').pipe(process.stdout) // 输出设备的一种 process代表进程