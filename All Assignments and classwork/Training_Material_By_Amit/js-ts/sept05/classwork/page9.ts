interface IRun {
  run(): void
}

class Person4 implements IRun {
  run() {
    console.log('person is running')
  }
}

class Car implements IRun {
  run() {
    console.log('car is running with 40km/l')
  }
}

function execute(obj: IRun) {
  obj.run()
}

const p4: IRun = new Person4()
const c4: IRun = new Car()

execute(p4)
execute(c4)
// execute(10)
