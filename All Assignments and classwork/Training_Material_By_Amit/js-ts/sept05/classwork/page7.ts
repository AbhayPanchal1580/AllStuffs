class Person2 {
  name: string = ''
  address: string = ''
  age: number = 0
}

// Person: super class
// Player: subclass
class Player extends Person2 {
  sport: string = ''
}

const person1 = new Person2()
person1.name = 'person1'

const person2: Person2 = new Person2()

const player1 = new Player()
player1.sport = 'cricket'
player1.name = 'player1'
// player1.age

const player2: Player = new Player()

// the type of reference MUST be equals or less than the
// type of object
// type of reference: Person2
// type of object: Player
// since Person2 is smaller than Player
const person3: Person2 = new Player()
