"use strict";
// functions
// traditional
function function1() {
    console.log('inside function1');
}
// anonymous
var function2 = function () {
    console.log('inside function2');
};
// arrow
var function3 = function () {
    console.log("inside function3");
};
// parameterized function with implicitly declared parameters
function testFunction(param) {
    console.log("inside test function");
}
// testFunction(10)
// testFunction('test')
// testFunction(false)
// parameterized function with explicitly declared parameters
function add(p1, p2) {
    console.log("".concat(p1, " + ").concat(p2, " = ").concat(p1 + p2));
}
// add(10, 20)
// string is not matching with number
// add('10', 20)
// optional parameter (param having a default)
function function4(p1) {
    if (p1 === void 0) { p1 = 10; }
    console.log('inside function4');
    console.log("p1 = ".concat(p1));
}
// function4(100)
// function4()
