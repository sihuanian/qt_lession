function Animal(planet) {
  this.planet = planet
}

Animal.prototype.getPlanet = function() {
  return this.planet
}

function Person(name) {
  // Animal.call(Person, planet)
  this.name = name
}

// Person.prototype = Object.create(Animal.prototype)
// Person.prototype.constructor = Person

Person.prototype = new Animal('earth')
Person.prototype.getName = function() {
  return this.name
}

const person = new Person('Kobe')
console.log(person.getPlanet())
console.log(person.getName())
console.log(Person.prototype.__proto__ === Animal.prototype)