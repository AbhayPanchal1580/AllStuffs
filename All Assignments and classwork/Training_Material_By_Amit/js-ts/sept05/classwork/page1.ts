// optional parameter
function function1(p1: number, p2?: number) {
  console.log(`p1 = ${p1}, type = ${typeof p1}`)
  console.log(`p2 = ${p2}, type = ${typeof p2}`)
}

// function1(10, 20)
function1(10)

function function2(p1: number, p2?: number, p3?: string) {
  console.log(`p1 = ${p1}, type = ${typeof p1}`)
  console.log(`p2 = ${p2}, type = ${typeof p2}`)
  console.log(`p3 = ${p3}, type = ${typeof p3}`)
}

// function2(10, 'test')