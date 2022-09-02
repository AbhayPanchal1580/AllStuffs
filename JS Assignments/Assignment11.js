// Write a function which Calculate the sum of multiples of 3 and 5 for a given limit
// sum0fMultiples(10) ➞ sum0fMultipleValue of 3 & 5 upto 10 digit is: 33


const sumOfMultiples = (range_start, range_end) => {
    let sum = 0;
    for (let i = range_start; i <= range_end; i++) {
        if (i % 3 == 0 | i % 5 == 0) {
            sum = sum + i;
        }
    }

    return sum;

}

console.log(sumOfMultiples(0, 10))

