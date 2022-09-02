// Create a function that takes the age in years and returns the age in days.
//  calcAge(65) ➞ 23725
//  calcAge(0) ➞ 0
//  calcAge(20) ➞ 7300


let year,days;


const calculate=(year)=>{
    return year*365;
}

days=calculate(65);

console.log(days);