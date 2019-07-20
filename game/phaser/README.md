## callback 
    addEventListener(event_type, callback)
    定义时不执行
    事件发生时，将注册的回调函数拿回来调用一下，异步

## fs 文件模块
    异步是需要花时间，注册行为，callback
    err

## 操作系统
    addEventListener 事件操作    I/O 操作
    Input/Output  磁盘<==>内存  CPU(运算和指令集) 内存， 外部存储设备 典型的慢操作
    fs.readFile(path, 'utf8', callback)