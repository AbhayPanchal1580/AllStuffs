class MyMath {
  static add(p1: number, p2: number) {
    console.log(`${p1} + ${p2} = ${p1 + p2}`)
  }

  static subtract(p1: number, p2: number) {
    console.log(`${p1} - ${p2} = ${p1 - p2}`)
  }

  static divide(p1: number, p2: number) {
    console.log(`${p1} / ${p2} = ${p1 / p2}`)
  }

  multiply(p1: number, p2: number) {
    console.log(`${p1} * ${p2} = ${p1 * p2}`)
  }
}

MyMath.add(10, 20)
MyMath.subtract(20, 10)
