"use strict";
// Write a program to Interchange First and Last Element of a List
const array = [1, 2, 3, 4, 5, 6, 7];
const Interchange = (array) => {
    let size = array.length;
    let temp = array[0];
    array[0] = array[size - 1];
    array[size - 1] = temp;
    return array;
};
console.log(Interchange(array));
