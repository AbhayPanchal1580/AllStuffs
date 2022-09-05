"use strict";
// variable
// implicit
var num = 100;
console.log("num = ".concat(num, ", type  = ").concat(typeof num));
// num = 'test'
// num = true
// explicit
var firstName = 'amit';
console.log("first name = ".concat(firstName, ", type = ").concat(typeof firstName));
// constant
// implicit
var canVote = true;
console.log("canVote = ".concat(canVote, ", type = ").concat(typeof canVote));
// explicit
// person may have any number of key-value pairs
var person = {
    name: 'person1',
    age: 30,
    address: 'pune',
    phone: '234233223',
};
console.log("person = ".concat(person, ", type = ").concat(typeof person));
// mobile can not have anything other than model, company and price
var mobile = {
    model: 'iPhone 13 Pro Max',
    company: 'Apple',
    price: 200600,
};
console.log("mobile = ".concat(mobile, ", type = ").concat(typeof mobile));
// success: string
// failure: number
var result = 'result';
result = 100;
// boolean is not allowed for string|number
// result = true
// string, number, boolean, undefined, object
var result2;
result2 = 100;
result2 = 'test';
result2 = true;
result2 = undefined;
