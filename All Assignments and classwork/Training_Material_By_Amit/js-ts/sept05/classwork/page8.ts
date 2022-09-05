abstract class Person3 {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  printDetails() {
    console.log(`name = ${this.name}`)
    console.log(`age = ${this.age}`)
  }

  // does not have any implementation
  abstract drawSalary(): void
}

class Employee extends Person3 {
  id: number = 1

  constructor(id: number, name: string, age: number) {
    super(name, age)
    this.id = id
  }

  // Employee has overriden the printDetails method
  printDetails(): void {
    console.log(`id = ${this.id}`)
    console.log(`name = ${this.name}`)
    console.log(`age = ${this.age}`)
  }

  drawSalary(): void {
    console.log(`employee is drawing salary`)
  }
}

// const p3 = new Person3('person3', 30)
// p3.printDetails()

const e3 = new Employee(1, 'employee1', 50)
e3.printDetails()
e3.drawSalary()
