// Write a function that takes the base and height of a triangle and return its area.
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50


let base,height,area;

const calculate=(base,height)=>{
    return (1/2)*base*height;
}

area=calculate(10,10);

console.log(area);
