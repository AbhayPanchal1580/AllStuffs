function function1() {
  // implicit
  const num = 100
  console.log(`num = ${num}, type = ${typeof num}`)

  // explicit
  const num2: number = 200
}

// function1()

// implicit
const myFunction1 = function (p1: number, p2: number): number {
  return p1 + p2
}

// console.log(`myFunction1 = ${typeof myFunction1}`)

// (p1: number, p2: number) => number
function add(p1: number, p2: number): number {
  return p1 + p2
}

// (p1: number, p2: number) => number
function subtract(p1: number, p2: number): number {
  return p1 - p2
}

// (p1: number) => void
function makeSquare(p1: number) {
  console.log(`square of ${p1} = ${p1 ** 2}`)
}

// explicit
const execute1: (p1: number, p2: number) => number = subtract

// (name: string, phone: string, age: number) => void
function printDetails(name: string, phone: string, age: number): void {}

// () => void
function function3() {}

// higher-order function
function execute2(func: (p1: number, p2: number) => number) {
  func(10, 20)
}

// function types are matching
execute2(add)
execute2(subtract)

// function type does not match
// execute2(makeSquare)
