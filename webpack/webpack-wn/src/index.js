import _ from 'lodash'
import './style/index.css'
import './style/leo.scss'

function createElement() {
  let div = document.createElement('div')
  div.innerHTML = _.join(['my', 'name', 'is', 'sihuanian'], '')
  div.setAttribute('class', 'box')
  return div
}

document.body.appendChild(createElement())
