// collection: array
// - collection of similar or dissimilar objects

function function1() {
    // empty array
    const numbers1 = new Array()
    console.log(numbers1)

    const numbers2 = []
    console.log(numbers2)
}   

// function1()


function function2() {
    // array of numbers
    const numbers = [10, 20, 30, 40, 50]
    console.log(numbers)

    // array of strings
    const countries = ['india', 'usa', 'uk', 'japan']
    console.log(countries)

    // array of mixed values
    const mixedArray = [10, 'amit', true, 30]
    console.log(mixedArray)
}

// function2()

function function3() {
    const numbers = [10, 20, 30, 40, 50]
    console.log(numbers)
    console.log(`length of numbers = ${numbers.length}`)

    // since numbers is immutable, it can not be changed
    // numbers = [60, 70]

    // append a value at the end of the array
    numbers.push(60)
    console.log(numbers)

    // remove the last element
    numbers.pop()
    console.log(numbers)

    // remove element by index
    numbers.splice(2, 1)
    console.log(numbers)

    // add a value in between
    numbers.splice(1, 0, 15)
    console.log(numbers)
}

function3()