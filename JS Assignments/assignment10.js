// Write a function which checks number till given input/parameter is odd or even

let num=10
const result=(num)=>{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

const output=result();

if(output){
    console.log(`${num} is an even number`);
}else{
    console.log(`${num} is an odd number`);
}