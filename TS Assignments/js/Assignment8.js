"use strict";
// A pangram is a sentence that contains all the letters of the English alphabet at least once, for
// example: The quick brown fox jumps over the lazy dog. Your task here is to write a function to
// check a sentence to see if it is a pangram or not.
let str = "abcdefghijklmnopqrstuvwxyz";
let size = 26;
let count = 0;
function check(input) {
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < input.length; i++) {
            if (input.charAt(i) === str.charAt(j)) {
                count += 1;
                break;
            }
        }
    }
    if (count === size) {
        console.log("Pangram");
    }
    else {
        console.log("Not Pangram");
    }
}
let input = "The quick brown fox jumps over the lazy doggggg";
check(input);
