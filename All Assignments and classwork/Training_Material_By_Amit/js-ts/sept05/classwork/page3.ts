// closure
function function1(p1: number, p2: number) {
  console.log('inside function1')

  //   return p1 + p2
  return function () {
    console.log(`inside anonymous function`)
    return p1 + p2
  }
}

// func = function () {
//     console.log(`inside anonymous function`)
//     return p1 + p2
//   }

// const func = function1(10, 20)
// console.log(func)

// const result = func()
// console.log(`result = ${result}`)

// global scope
const num = 220

// impure function
function function1(p1: number) {
  const result = p1 + num
  console.log(`result = ${result}`)
}

// function1(10)

// pure function
function square(p1: number) {
  console.log(`square of ${p1} = ${p1 ** 2}`)
}

// square(10)

function add(p1: number, p2: number) {
  console.log(`p1 + p2 = ${p1 + p2}`)
}

function subtract(p1: number, p2: number) {
  console.log(`p1 - p2 = ${p1 - p2}`)
}

function execute(state: boolean, p1: number, p2: number) {
  const func = state ? add : subtract

  func(p1, p2)
}

// execute(true, 10, 20)
// execute(false, 10, 20)

function function3() {
  const numbers = [1, 2, 3, 4, 5]
  // 1 + 2 + 3 + 4 + 5
  // 3 + 3 + 4 + 5
  // 6 + 4 + 5
  // 10 + 5
  // 15

  let sum = 0
  for (const value of numbers) {
    sum += value
  }

  console.log(`sum = ${sum}`)

  const squares = numbers.map((value) => value ** 2)
  console.log(squares)

  const evens = numbers.filter((value) => value % 2 == 0)
  console.log(evens)

  const sum2 = numbers.reduce((v1, v2) => v1 + v2)
  console.log(`sum2 = ${sum2}`)
}

// function3()

function function5(param: number): any {
  // terminating condition
  if (param == 0) return 1
  return param * function5(param - 1)
}

const result = function5(5)
console.log(`result = ${result}`)
