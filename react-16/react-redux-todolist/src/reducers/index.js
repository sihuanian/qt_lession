const defaultList = [
  {
    complete: false,
    content: 'eat'
  }
]

// immutable 不可变数据
function todolist(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { complete: action.complete, content: action.content }]
    default:
      // 返回值决定store 是什么样的
      return defaultList
  }
}

export default todolist