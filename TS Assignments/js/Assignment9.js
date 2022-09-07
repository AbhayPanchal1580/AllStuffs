"use strict";
function translate(a) {
    let len = a.length;
    let res = "";
    for (let i = 0; i < len; i++) {
        if (a.charAt(i) == "a" ||
            a.charAt(i) == "e" ||
            a.charAt(i) == "i" ||
            a.charAt(i) == "o" ||
            a.charAt(i) == "u") {
            res = res + a.charAt(i);
        }
        // if space then append as it is
        else if (a.charAt(i) == " ") {
            res = res + a.charAt(i);
        }
        // else double the consonant and
        // put o in between
        else {
            res = res + a.charAt(i) + "o" + a.charAt(i);
        }
    }
    // return translated String
    return res;
}
const result = translate("this is fun");
console.log(result);
