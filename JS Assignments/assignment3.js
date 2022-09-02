// Write a function that takes an integer minutes and converts it to seconds.
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

let minutes;

function mintosec(minutes){
    return minutes*60;
}

let result=mintosec(5);

console.log(result);