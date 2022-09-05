// variable data types

// number
const num = 100
console.log(`num = ${num}, type = ${typeof(num)}`)

// number
const salary = 6.8
console.log(`salary = ${salary}, type = ${typeof(salary)}`)

// string
const firstName = "amit"
console.log(`first name = ${firstName}, type = ${typeof firstName}`)

// string
const lastName = 'kulkarni'
console.log(`last name = ${lastName}, type = ${typeof lastName}`)

// string
const address = `house number 105,
sinhgad road,
pune, 411041`
console.log(`address = ${address}, type = ${typeof address}`)

// boolean
const canVote = true
console.log(`canVote = ${canVote}, type = ${typeof canVote}`)

// can not declare uninitialized constant
// const myVar

// uninitialized variable
// undefined
let myVar
console.log(`myVar = ${myVar}, type = ${typeof myVar}`)


// object: using JSON syntax
// all keys inside any object are strings
const person = { name: 'amit', 
            address: 'pune', 
            age: 39, 
            canVote: true }
console.log(person)
console.log(`person = ${person}, type = ${typeof person}`)