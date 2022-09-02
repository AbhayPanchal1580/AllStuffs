// Write a function which checks given input/parameter:
// If input/parameter is divisible by 3 print => Fizz
// If input/parameter is divisible by 5 print => Buzz
// If input/parameter is divisible by 3 or 5 print => FizzBuzz
// input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
// If input/parameter is other than Number/Value print => 'Nan Not a Number! Please Input
// Number'

// isfizzBuzz('one') ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(true) ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(9) ➞ Fizz
// isfizzBuzz(10) ➞ Buzz
// isfizzBuzz(30) ➞ FizzBuzz
// isfizzBuzz(11) ➞ Some odd number entered: 11



function fizzBuzz(input){
  if (typeof input !== 'number')
    return `Nan Not a Number! Please Input Number  `;
    
  if((input % 3 === 0) && (input % 5 === 0))
    return'FizzBuzz';
    
  if(input % 3 === 0)
    return'Fizz';
    
  if(input % 5 === 0)
    return'Buzz';
    
  return `Some odd number entered:${input}`;  
}
const output = fizzBuzz(11);
console.log(output);

