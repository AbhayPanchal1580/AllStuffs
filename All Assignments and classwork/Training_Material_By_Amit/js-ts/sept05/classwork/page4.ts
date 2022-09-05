class Person {
  // default modifier = public
  public name: string = ''
  public age: number = 0
  public address: string = ''
}

// const p1 = new Person()
// p1.name = 'person1'
// p1.address = 'pune'
// p1.age = 10
// console.log(p1)

class Mobile {
  private model: string = ''
  private price: number = 0
  private company: string = ''

  constructor(model: string, price: number = 0, company: string = '') {
    this.model = model
    this.company = company
    this.price = price
  }

  // setter / mutator
  setModel(model: string): void {
    this.model = model
  }

  // setter / mutator
  setPrice(price: number): void {
    this.price = price
  }

  // getter / inspector
  getModel(): string {
    return this.model
  }

  // getter / inspector
  getPrice(): number {
    return this.price
  }

  // facilitator
  printDetails() {
    console.log(`model = ${this.model}`)
    console.log(`company = ${this.company}`)
    console.log(`price = ${this.price}`)
  }
}

const m1 = new Mobile('iphone', 200600, 'apple')
console.log(m1)

m1.setPrice(180000)
console.log(`model = ${m1.getModel()}`)
console.log(`price = ${m1.getPrice()}`)

const m2 = new Mobile('galaxy')
console.log(m2)

// can not access model outside of the class
// as it is a private property of Mobile class
// m1.model = 'iPhone'

class Student {
  private _roll: number
  private _name: string

  constructor(name: string, roll: number) {
    this._name = name
    this._roll = roll
  }

  public set name(name: string) {
    this._name = name
  }

  public set roll(rollNo: number) {
    this._roll = rollNo
  }

  public get roll(): number {
    return this._roll
  }

  public get name(): string {
    return this._name
  }
}

const s1 = new Student('s1', 1)
// s1.setRollNo(2)
s1.roll = 2
console.log(`roll no = ${s1.roll}`)
console.log(`name = ${s1.name}`)
