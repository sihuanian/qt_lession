const dogs = new Map()
dogs.set('Snickers', 3)
dogs.set('Sunny', 2)
dogs.set('Hugo', 10)

for (const [key, val] of dogs) {
  console.log(key, val)
}
dogs.forEach((val, key) => console.log(val, key))