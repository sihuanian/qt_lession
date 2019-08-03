const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

https.get('https://www.smzdm.com/youhui/', function (res) {
    // 与网页编码一致
    res.setEncoding('utf-8')

    let html = ''

    // 当收到一部分数据的时候
    res.on('data', function (chunk) {
        html += chunk
    })
    // 当所有数据都收到了
    res.on('end', function () {
        // console.log(html)

        let lists = [] // 存储所有数据
        const $ = cheerio.load(html, {
            decodeEntities: false // 不需要解析 html entity eg: &nbsp;
        })

        // 选择所有商品列表（类名）
        // 只有一个参数 整个 document上搜索, 第二个参数指定在上一个选择的元素下查找
        $('.list.list_preferential').each(function () {
            const _this = this
            let title = $('.itemName a', _this).text() // text 内容
            let price = $('.red', _this).text()
            let img = $('.picLeft img', _this).attr('src') // 属性
            lists.push({
                title,
                price,
                img
            })
            // console.log({title, price, img})
            saveImage('./img/', img)
        })

        saveList('./data/lists.json', lists)
    })
    // console.log(res)
})

/**
 * @description: 保存数据到指定文件
 * @param path: string 保存的地址
 * @param dataArr: Array 保存的数据
 * @return: undefined
 */
function saveList(path, dataArr) {
    fs.writeFile(path, JSON.stringify(dataArr), err => {
        if (!err) {
            console.log(`数据保存成功，保存在${path} 下`)
        } else {
            console.log(err)
        }
    })
}

/**
 * @description: 保存图片到相应目录下
 * @param imgDir: string 保存的路径
 * @param imgUrl: string 图片的url 地址
 * @return: undefined
 */
function saveImage(imgDir, imgUrl) {
    https.get(imgUrl, (res) => {
        res.setEncoding('binary')
        // let data = ''
        const imgName = path.basename(imgUrl)
        /* res.on('data', (chunk) => {
            data += chunk
        })
        res.on('end', () => {
            const imgName = path.basename(imgUrl)
            fs.writeFile(imgDir + imgName, data, 'binary', err => {
                if (!err) {
                    console.log('图片保存成功！')
                } else {
                    console.log(err)
                }
            })
        }) */
        res.pipe(
            fs.createWriteStream(imgDir + imgName, 'binary')
        )
    })
}