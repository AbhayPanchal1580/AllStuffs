// create a function to find out a maximum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 98

const numbers=[10, 21, 5, 25, 6, 60, 23, 26, 49, 98];
const findMax=function(array){

    let max=numbers[0];

    for(let i=0;i<numbers.length;i++){
        
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    return max;
}
let result=findMax(numbers);
console.log(`Maximum from the array = ${result}`);