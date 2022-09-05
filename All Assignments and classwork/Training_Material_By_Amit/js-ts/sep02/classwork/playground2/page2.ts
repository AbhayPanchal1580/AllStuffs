// variable

// implicit
let num = 100
console.log(`num = ${num}, type  = ${typeof num}`)

// num = 'test'
// num = true

// explicit
let firstName: string = 'amit'
console.log(`first name = ${firstName}, type = ${typeof firstName}`)

// constant

// implicit
const canVote = true
console.log(`canVote = ${canVote}, type = ${typeof canVote}`)

// explicit

// person may have any number of key-value pairs
const person: object = {
  name: 'person1',
  age: 30,
  address: 'pune',
  phone: '234233223',
}
console.log(`person = ${person}, type = ${typeof person}`)

// mobile can not have anything other than model, company and price
const mobile: { model: string; company: string; price: number } = {
  model: 'iPhone 13 Pro Max',
  company: 'Apple',
  price: 200600,
}
console.log(`mobile = ${mobile}, type = ${typeof mobile}`)

// success: string
// failure: number
let result: string | number = 'result'
result = 100

// boolean is not allowed for string|number
// result = true

// string, number, boolean, undefined, object
let result2: any
result2 = 100
result2 = 'test'
result2 = true
result2 = undefined
