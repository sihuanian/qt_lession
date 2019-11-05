setTimeout(() => {
    console.log('timeout1')
    Promise.resolve().then(() => {
        console.log('promise1')
    })
    Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

setTimeout(() => {
    console.log('timeout2')
    Promise.resolve().then(() => {
        console.log('promise3')
    })
}, 0)
