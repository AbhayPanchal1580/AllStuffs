// collection

function function1() {

    // array of numbers
    const numbers = [10, 20, 30, 40, 50]
    console.log(numbers)

    // length of array
    console.log(`length of numbers = ${numbers.length}`)

    // append a value at the end
    numbers.push(60)
    console.log(numbers)

    numbers.push(70)
    console.log(numbers)

    numbers.push(80)
    console.log(numbers)

    // remove the last value
    numbers.pop()
    console.log(numbers)

    numbers.pop()
    console.log(numbers)

    numbers.pop()
    console.log(numbers)

}   

// function1()

function function2() {
    const numbers = [10, 20, 30, 40, 50]
    console.log(numbers)

    // add a value in bewtween
    numbers.splice(2, 0, 25)
    console.log(numbers)

    // remove a value at position 4
    numbers.splice(4, 1)
    console.log(numbers)

    // replace a value at 3rd position with 35
    numbers.splice(3, 1, 'thirty five')
    console.log(numbers)

}

// function2()


function function3() {
    const numbers = [10, 20, 30, 40, 50]
    console.log(numbers)

    console.log('traditional for loop')

    // traditional for loop
    for (let index = 0; index < numbers.length; index++) {
        console.log(`value at ${index} = ${numbers[index]}`)
    }

    // limitation: 
    // - can not change the value
    // - no access to the index positions 
    console.log('for..of loop')
    for (const value of numbers) {
        console.log(`value = ${value}`)
    }

    console.log('for..in loop')
    for (const index in numbers) {
        console.log(`value at ${index} = ${numbers[index]}`)
    }

    console.log('for each loop')
    numbers.forEach((value, index) => {
        console.log(`value = ${value},  index = ${index}`)
    })
}

function3()