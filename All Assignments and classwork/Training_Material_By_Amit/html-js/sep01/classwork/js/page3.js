function function1() {
    // array
    const numbers = [1, 2, 3, 4, 5]

    // for loop
    // numbers.forEach((value) => {
    //     console.log(`square of ${value} = ${value ** 2}`)
    // })
    for (const value of numbers) {
        console.log(`square of ${value} = ${value ** 2}`)
    }
}

// function1()

function function2() {
    // array
    const numbers = [1, 2, 3, 4, 5]

    const squares = []
    for (const value of numbers) {
        squares.push(value ** 2)
    }

    console.log(numbers)
    console.log(squares)
}

// function2()


function function3() {
    // map
    // - used for transformation of every value

    const numbers = [1, 2, 3, 4, 5]
    const squares = numbers.map((value) => {
        return value ** 2
    })   

    console.log(numbers)
    console.log(squares)
}

// function3()

function function4() {
    const numbers = [1, 2, 3, 4, 5]

    const cubes = numbers.map((value) => {
        return value ** 3
    })

    console.log(numbers)
    console.log(cubes)
}

// function4()

function function5() {
    const strNumbers = ['zero', 'one', 'two', 'three', 'four', 'five']
    const numbers = [0, 3, 4, 2, 1, 5]

    console.log(strNumbers[0])
    console.log(strNumbers[1])
    console.log(strNumbers[2])
    console.log(strNumbers[3])

    console.log(numbers[0])
    console.log(numbers[1])
    console.log(numbers[2])

    console.log(strNumbers[numbers[0]])
    console.log(strNumbers[numbers[1]])
    console.log(strNumbers[numbers[2]])
    console.log(strNumbers[numbers[3]])

    const newCollection = numbers.map(v => strNumbers[v])
    console.log(newCollection)
}

// function5()

function function6() {
    const temperatures_f = [90, 91, 92, 95, 96, 99, 93]
    const temperatures_c1 = temperatures_f.map(t => (t - 32) * (5/9) ) 
    console.log(temperatures_c1)

    const temperatures_c2 = temperatures_f.map(function (value) {
        return (value - 32) * (5 / 9)
    })
    console.log(temperatures_c2)

}

function6()