// function alias

// data type as number
let num = 100
console.log(`num = ${num}, type = ${typeof num}`)

let num2 = num
console.log(`num2 = ${num2}, type = ${typeof num2}`)

num = 200
console.log(`num = ${num}, type = ${typeof num}`)

num2 = 500
console.log(`num2 = ${num2}, type = ${typeof num2}`)


// function declaration
function function1() {
    console.log('inside function1')
}

console.log(`function1 = ${function1}, type = ${typeof function1}`)

// function alias
// another name given to an existing function
let myFunction1 = function1
console.log(`myFunction1 = ${myFunction1}, type = ${typeof function1}`)

// function1()
// myFunction1()   

// 0x10000
function function2() {
    console.log('inside function2 - I')
}

// 0x20000
function function2() {
    console.log('inside function2 - II')
}

// 0x30000
function function2() {
    console.log('inside function2 - III')
}

// function2 = function1

function2()