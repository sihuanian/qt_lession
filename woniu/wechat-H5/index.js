/*
const ul = document.querySelector('.content-items')


const li = document.querySelector('.content-item')
// const licopy = li

// console.log(copyLi, 'copyLi')


const item1 = document.querySelectorAll('.item')[0]

// console.log(ul, li, item1)
item1.addEventListener('click', function () {
    // var li = document.createElement('li') // 创建 li 标签
    // var divPic = document.createElement('div') // 创建 div 标签
    // var message = document.createElement('div') // 创建 div 标签
    // var time = document.createElement('div') // 创建 div 标签
    // var imgAvatar = document.createElement('img') // 创建 img 标签
    // var name = document.createElement('p') // 创建 p 标签
    // var detail = document.createElement('p') // 创建 p 标签
    // var span = document.createElement('span')

    // li.setAttribute('class', 'content-item')
    // divPic.setAttribute('class', 'left-pic')
    // imgAvatar.setAttribute('src', './images/user.jpg')
    // name.setAttribute('class', 'name')
    // message.setAttribute('class', 'message')
    // detail.setAttribute('class', 'detail')
    // time.setAttribute('class', 'time')

    // name.textContent = '张学友'
    // detail.textContent = '晚上一起吃饭。'
    // span.textContent = '下午2:30'

    // li.appendChild(divPic)
    // li.appendChild(message)
    // li.appendChild(time)
    // divPic.appendChild(imgAvatar)
    // message.appendChild(name)
    // message.appendChild(detail)
    // time.appendChild(span)

    // ul.append(li)


    const copyLi = li.cloneNode(true) // 深度克隆，子节点也会克隆
    ul.appendChild(copyLi)
})
*/

// jQuery
const ul = $('.content-items')
const item1 = $('.item')

        
item1.click(function() {
    var html = $('<li class="content-item">' +
                    '<div class="left-pic">' +
                        '<img src="./images/user.jpg">' +
                    '</div>' +
                    '<div class="message">' +
                        '<p class="name">张学友</p>' +
                        '<p class="detail">晚上一起吃饭。</p>' +
                    '</div>' +
                    '<div class="time">' +
                        '<span>下午2:30</span>' +
                    '</div>' +
                '</li>')
                
    // html.appendTo(ul)
    var html1 = $('.content-item:first').clone(true) // 克隆节点true 深度克隆

    ul.append(html1)
})