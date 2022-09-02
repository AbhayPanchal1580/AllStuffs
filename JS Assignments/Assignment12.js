// Write a function which Prints/Shows star (or any pattern) for the number of times and rows provided
// showPattern(5)
//  *
//  **
//  ***
//  ****
//  *****


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);