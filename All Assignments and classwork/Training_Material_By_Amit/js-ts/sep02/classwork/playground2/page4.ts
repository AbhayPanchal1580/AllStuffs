// rest parameters

function add4(...params: number[]) {
  let sum = 0
  for (const value of params) {
    sum += value
  }

  console.log(`sum = ${sum}`)
}

add4(10, 20)
add4(10, 20, 30)
add4(10, 20, 30, 40)
add4(10, 20, 30, 40, 50)
add4(10, 20, 30, 40, 50, 60)
add4(10, 20, 30, 40, 50, 60, 70)
