"use strict";
var Person = /** @class */ (function () {
    function Person() {
        // class properties
        this.name = '';
        this.age = 0;
        this.address = '';
    }
    return Person;
}());
// instantiate
// const person1 = new Person()
// person1.name = 'person1'
// person1.age = 30
// person1.address = 'pune'
// console.log(person1)
var Mobile = /** @class */ (function () {
    // constructor of Mobile
    function Mobile(model, company, price) {
        this.model = model;
        this.company = company;
        this.price = price;
    }
    Mobile.prototype.printDetails = function () {
        console.log("model = ".concat(this.model));
        console.log("company = ".concat(this.company));
        console.log("price = ".concat(this.price));
    };
    return Mobile;
}());
var m1 = new Mobile('Galaxy S22', 'Samsung', 98000);
console.log(m1);
