"use strict";
class Person4 {
    run() {
        console.log('person is running');
    }
}
class Car {
    run() {
        console.log('car is running with 40km/l');
    }
}
function execute(obj) {
    obj.run();
}
const p4 = new Person4();
const c4 = new Car();
execute(p4);
execute(c4);
// execute(10)
