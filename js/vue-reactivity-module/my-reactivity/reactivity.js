import { track, trigger } from './effect.js'

export function reactive(target) {
  const observer = new Proxy(target, {
    set: (target, key, value) => {
      // 恢复它赋值的行为
      const result = Reflect.set(target, key, value)
      trigger(target, key)
      return result
    },
    get: (target, key, receiver) => {
      // mobx  也有effect 依赖收集
      // 依赖收集
      console.log('依赖收集')
      const res = Reflect.get(target, key, receiver)
      // {
        //   origin: {
          //     count: {
            //       fn1,
            //       fn2
            //     }
            //   }
            // }
            track(target, 'get', key)
            return res
    }
  })
  return observer
}