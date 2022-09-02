// Create a function that takes voltage and current and returns the calculated power
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

let voltage,current;

const power=function(voltage,current){
    return voltage*current;
}

let result=power(230,10);

console.log(result);