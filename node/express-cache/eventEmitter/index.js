const Event = require('events')
const request = require('request')
const inquirer = require('inquirer')
const fs = require('fs')
const ev = new Event()


ev.on('choose', function(songs, keywords) {
  // 命令行交互
  inquirer.prompt([{
    type: 'list',
    name: 'song',
    message: `共${songs.length}首歌，回车选择`,
    choices: songs.map((s, i) => {
      return `${i}:${s.name}`
    })
  }]).then(choice => {
    // { song: '0:運命のルーレット廻して' }
    // console.log(choice)
    const {song} = choice
    const index = Number.parseInt(song.split(':')[0])
    const selected = songs[index]
    console.log(selected)
    const {id} = selected
    request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/song/url?id=' + id,
      json: true
    }, (err, res, body) => {
      console.log('=========', body)
      const {url} = body.data[0]
      console.log('*********', url)
      if (!url) {
        console.log('没有找到该歌曲')
        return
      }
      request(url)
        .pipe(fs.createWriteStream(`${decodeURIComponent(keywords)}.mp3`))
    })
  })
})
ev.on('search', function(keywords) {
  // 请求搜索结果 下一步 选择
  // console.log('=========' + keywords)
  keywords = encodeURIComponent(keywords)
  // console.log('=========' + keywords)
  request({
    url: 'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + keywords,
    json: true
  }, (err, res, body) => {
    console.log('请求信息', err)
    // console.log(body)
    // console.log(body.result.songs[0])
    if (body.result && body.result.songs) {
      ev.emit('choose', body.result.songs, keywords)
    } else {
      console.log(`没有${keywords}的信息`)
    }
  })
})
function main() {
  // 截取传入的参数,即node index.js 后面写的参数
  const argv = process.argv.slice(2)
  // console.log(argv)
  const keywords = argv[0]
  // 搜索 选择 播放
  ev.emit('search', keywords)
}

main()
