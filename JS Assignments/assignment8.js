// create a function to find out a minimum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMin(numbers) ➞ 5


const numbers=[10, 21, 5, 25, 6, 60, 23, 26, 49, 98];
const findMin=function(array){

    let min=numbers[0];

    for(let i=0;i<numbers.length;i++){
        
        if(numbers[i]<min){
            min=numbers[i];
        }
    }
    return min;
}
let result=findMin(numbers);
console.log(`Maximum from the array = ${result}`);