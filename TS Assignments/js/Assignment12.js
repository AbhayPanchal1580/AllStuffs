"use strict";
// Write a python program to print sum of tuple elements
const tuples = [1, 2, 3];
let sum = 0;
function sumoftuples(num) {
    sum += num;
}
const result1 = tuples.forEach(element => {
    sumoftuples(element);
});
console.log(sum);
