"use strict";
class Person {
    constructor() {
        // default modifier = public
        this.name = '';
        this.age = 0;
        this.address = '';
    }
}
// const p1 = new Person()
// p1.name = 'person1'
// p1.address = 'pune'
// p1.age = 10
// console.log(p1)
class Mobile {
    constructor(model, price = 0, company = '') {
        this.model = '';
        this.price = 0;
        this.company = '';
        this.model = model;
        this.company = company;
        this.price = price;
    }
    // setter / mutator
    setModel(model) {
        this.model = model;
    }
    // setter / mutator
    setPrice(price) {
        this.price = price;
    }
    // getter / inspector
    getModel() {
        return this.model;
    }
    // getter / inspector
    getPrice() {
        return this.price;
    }
    // facilitator
    printDetails() {
        console.log(`model = ${this.model}`);
        console.log(`company = ${this.company}`);
        console.log(`price = ${this.price}`);
    }
}
const m1 = new Mobile('iphone', 200600, 'apple');
console.log(m1);
m1.setPrice(180000);
console.log(`model = ${m1.getModel()}`);
console.log(`price = ${m1.getPrice()}`);
const m2 = new Mobile('galaxy');
console.log(m2);
// can not access model outside of the class
// as it is a private property of Mobile class
// m1.model = 'iPhone'
class Student {
    constructor(name, roll) {
        this._name = name;
        this._roll = roll;
    }
    set name(name) {
        this._name = name;
    }
    set roll(rollNo) {
        this._roll = rollNo;
    }
    get roll() {
        return this._roll;
    }
    get name() {
        return this._name;
    }
}
const s1 = new Student('s1', 1);
// s1.setRollNo(2)
s1.roll = 2;
console.log(`roll no = ${s1.roll}`);
console.log(`name = ${s1.name}`);
