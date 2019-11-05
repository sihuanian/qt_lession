import { includes } from 'lodash'
import React from 'react'
import ReactDom from 'react-dom'
// import { groupBy } from 'loadsh'
// import includes from 'lodash/includes';
import { add, subsub } from './util'
import App from './App'

ReactDom.render(<App />, document.getElementById('app'))

console.log(add(1, 2))
console.log(add(3, 4))
console.log(includes([1, 2, 3], 1))
