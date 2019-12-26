- JS 是一个单线程的语言，
  中台 让大型公司更好的复用开发能力 / 资源
  node 的性能就有了要求，可以像java一样多线程？
  node app.js 3000 端口给了你，
  前端 mount #app CPU
  进程 process 操作系统挂载运行程序的最小单元
  拥有独立的资源
  工作交给子进程，一个人做事
  招人，企业
  request => 请求? n 个用户 web 程序是多线程的
  分配资源给它 完成这次请求 + 响应
  线程是运行调度的单元，进程的计算都在一个线程上跑，内存，计算资源可以承受用户的并发，电脑可以运行正常
  ？？ ab test
  优化
  1. 一个进程， 3000 进程会使用资源（内存，读写I/O，cpu 的计算……）可以有多个线程，物理上限
  2. node cluster
    4个cpu
    1个cpu 正在使用，能不能将其它的cpu 也使用起来。

创业，cpu 跑起来，多核跑，尽可能多的去为更多的用户服务，cluster
横向扩容（多个服务器）请求分配给这些机器？
负载均衡 nginx apache tomcat
www.taobao.com/search?a=1 （浏览器代理访问，手机，小程序，app）中央服务器发出请求 -> nginx -> 选中一台当前还有运算能力的服务器，IP -> 用户返回 （tcp/ip 三次握手）分布式每个cpu 都会跑同样的程序
ip 响应服务
每台机器上都要去部署同样的代码，同样的运行环境（docker)

证据 性能？ docker + ab test + node cluster + nginx 压力测试
代码好? 证明？ 测试驱动开发（mocha是JavaScript的一种单元测试框架）

- docker
  集装箱，50台机器，百万并发量
  开发环境镜像

- 统一所有机器的开发环境 centos 7 取代了虚拟机，不用提前分配超大空间及内存，操作特别快，全命令化。docker pull （centos 镜像文件）
- docker 镜像文件 docker images(docker 上有哪些镜像)
- docker run -p 3000:3000 -it (centos 的image id) /bin/bash
- mkdir abtest
- cd abtest
- touch app.js
- touch index.js
- touch index.html
- vi app.js
- vi index.js
- vi index.html
- yum install wget (安装)
- wget -c https://nodejs.org/dist/latest/node-v13.5.0-linux-x64.tar.gz (安装node)
- tar -zxvf node-v13.5.0-linux-x64.tar.gz
- export PATH=/node-v13.5.0-linux-x64/bin:$PATH
- yum -y install httpd-tools
- npm config set registry https://registry.npm.taobao.org
- npm install -g pm2
- pm2 start app.js (pm2 是一个可以把node 项目运行在后台的程序)
- pm2 是一个可以把node 项目运行在后台的程序
- ab -c50 -n400 http://127.0.0.1:3000/
- pm2 stop 0 (id)