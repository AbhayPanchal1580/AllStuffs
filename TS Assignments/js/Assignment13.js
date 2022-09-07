"use strict";
// Replace single element ‘b’ in given list ['a', 'b', 'c', 'd', 'e'] with [1, 2, 3]
// const aplhaList :Array<string|number>=['a', 'b', 'c', 'd', 'e'] ;
// const numList:Array<number|string>=[1,2,3];
// for(let i=0;i<aplhaList.length;i++){
//     if(aplhaList[i]==='b'){
//         for(let j=i;j<numList.length;j++){
//             aplhaList.splice(j,1,numList[j]);
//             console.log(numList[j])
//         }
//     }
// }
// console.log(aplhaList)
const myList = ['a', 'b', 'c', 'd', 'e'];
const numarray = [1, 2, 3];
const index = myList.indexOf('b');
myList.splice(index, 1, numarray);
console.log(myList);
