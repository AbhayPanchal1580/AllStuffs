// code reuse
// - association (has-a)
// - one object gets shared by creating outside of another object
// - types
// - aggregation (has-a)
// - loose coupling / weak relationship
// - composition (composed-of or part-of)
// - tight coupling / strong relationship


class Address {
  city: string = ''
  state: string = ''
  country: string = ''

  constructor(city: string, state: string, country: string) {
    this.city = city
    this.state = state
    this.country = country
  }
}

// Person has-an address
class MyPerson {
  name: string = ''
  age: number = 0
  address: Address = { city: '', state: '', country: '' }
}

const p1 = new MyPerson()
p1.address = new Address('pune', 'mh', 'india')
console.log(p1)

// House has-an address
class House {
  owner: string = ''
  address: Address = { city: '', state: '', country: '' }
}

const h1 = new House()
h1.address = new Address('mumbai', 'mh', 'india')
console.log(h1)

// class Node {
//   data: string
//   next: Node
// }

// const header = new Node()
// header.next = new Node()
