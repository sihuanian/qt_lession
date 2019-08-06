/**
 * @description: 就地编辑
 * @param {type} 
 * @return: 
 * @author: 陈谨
 * 网站的基础类，可以复用
 * 不是具体业务，抽象的公共业务
 */
function EditInPlace(id, parent, initVal) {
    // constructor 
    this.id = id
    this.parentElement = parent
    this.value = initVal || 'default value'
    this.createElement() // 动态DOM
    this.attachEvents()
    // this.flag = true
}
EditInPlace.prototype.createElement = function () {
    this.containerElement = document.createElement('div')
    this.containerElement.id = this.id
    this.staticElement = document.createElement('span')
    this.staticElement.innerText = this.value
    this.fieldElement = document.createElement('input')
    this.fieldElement.type = 'text'
    this.fieldElement.value = this.value
    this.containerElement.appendChild(this.fieldElement)
    this.containerElement.appendChild(this.staticElement)
    this.parentElement.appendChild(this.containerElement)
    // 两个状态
    
    // this.flag ? this.convertToText() : this.convertToEdit()
    this.convertToText()
}
EditInPlace.prototype.convertToText = function () {
    this.fieldElement.style.display = 'none'
    this.staticElement.style.display = 'inline'
}
EditInPlace.prototype.convertToEdit = function () {
    this.fieldElement.style.display = 'inline'
    this.staticElement.style.display = 'none'
}
EditInPlace.prototype.attachEvents = function() {
    // let self = this
    this.staticElement.addEventListener('click', () => {
        this.convertToEdit()
    })
    this.fieldElement.addEventListener('keydown', e => {
        if (e.keyCode == 13) {
            this.staticElement.innerHTML = this.fieldElement.value
            this.convertToText()
        }
    })
}
