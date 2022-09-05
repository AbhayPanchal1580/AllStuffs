"use strict";
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printDetails() {
        console.log(`name = ${this.name}`);
        console.log(`age = ${this.age}`);
    }
}
class Employee extends Person3 {
    constructor(id, name, age) {
        super(name, age);
        this.id = 1;
        this.id = id;
    }
    // Employee has overriden the printDetails method
    printDetails() {
        console.log(`id = ${this.id}`);
        console.log(`name = ${this.name}`);
        console.log(`age = ${this.age}`);
    }
    drawSalary() {
        console.log(`employee is drawing salary`);
    }
}
// const p3 = new Person3('person3', 30)
// p3.printDetails()
const e3 = new Employee(1, 'employee1', 50);
e3.printDetails();
e3.drawSalary();
