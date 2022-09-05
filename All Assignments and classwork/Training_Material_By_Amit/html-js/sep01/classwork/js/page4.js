function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (const value of numbers) {
        if (value % 2 == 0) {
            console.log('even')
        } else {
            console.log('odd')
        }
    }
}

// function1()

function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const evenNumbers = []
    for (const value of numbers) {
        if (value % 2 == 0) {
            evenNumbers.push(value)
        }
    }

    console.log(numbers)
    console.log(evenNumbers)
}

// function2()

function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const evenNumbers = numbers.filter((value) => {
        return value % 2 == 0 
    })

    console.log(numbers)
    console.log(evenNumbers)
}

// function3()

function function4() {
    console.log('function4 called')
}

// const value = function4()
// console.log(`value = ${value}`)


function function5() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // if there is only one parameter in arrow function,
    // then you can skip using parenthesis
    const oddValues = numbers.filter(value => {
        return value % 2 != 0
    })
    console.log(oddValues)

    // if the arrow function has only one statement and 
    // the statement returns the value
    // then you dont need: {} and return keyword
    const oddValues2 = numbers.filter(v => v % 2 != 0)
    console.log(oddValues2)
}

function5()