const defaultList = [
  {
    name: 'IPAD',
    count: 1,
    price: 10,
    checked: false
  },
  {
    name: 'IPHONE',
    count: 3,
    price: 30,
    checked: false
  },
]

function shopCart (state = defaultList, action) {
  console.log('state', state)
  switch (action.type) {
    case 'TOGGLE_CHECKED':
      const { index, checked } = action
      return state.map((good, i) => {
        if (i === index) {
          // return {
          //   ...good,
          //   checked
          // }
          good.checked = checked
        }
        return good
      })
    // case 'ADD':
    //   const count1 = sta
    case 'DEL':
      return state.filter((good, i) => {
        return i !== action.index
      })
    default:
      return defaultList
  }

}

export default shopCart