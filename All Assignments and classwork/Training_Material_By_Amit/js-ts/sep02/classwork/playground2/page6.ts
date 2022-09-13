class Person {
  // class properties
  name: string = ''
  age: number = 0
  address: string = ''
}

// instantiate
// const person1 = new Person()
// person1.name = 'person1'
// person1.age = 30
// person1.address = 'pune'
// console.log(person1)

class Mobile {
  model: string
  company: string
  price: number

  // constructor of Mobile
  constructor(model: string, company: string, price: number) {
    this.model = model
    this.company = company
    this.price = price
  }

  printDetails() {
    console.log(`model = ${this.model}`)
    console.log(`company = ${this.company}`)
    console.log(`price = ${this.price}`)
  }
}

const m1 = new Mobile('Galaxy S22', 'Samsung', 98000)
console.log(m1)



//assignment 6
class student{
  rollno:number
  studentName: string
}