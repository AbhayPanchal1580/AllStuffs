// function

// function declaration
// parameterless function
function function1() {
    console.log('inside function1')
}

// function call
// function1()


// parameterized function
function canVote(age) {
    console.log(`inside canVote`)
    console.log(`age = ${age}, type = ${typeof age}`)
    if (age >= 18) {
        console.log(`Yes`)
    } else {
        console.log(`No`)
    }
}

// canVote(10)
// canVote(20)
// canVote('ten')
// canVote(true)
// canVote()


function add(p1, p2) {
    const result = p1 + p2
    console.log(`result = ${result}`)
}

// add(10, 20)
// add('10', '20')
// add(10, '20')

function multiply(p1, p2) {
    return p1 * p2
}

// collect the returned value inside multiplication variable
// const multiplication = multiply(4, 6)
// console.log(`multiplication = ${multiplication}, type = ${typeof multiplication}`)

// if operand(s) is not a number, it will first get converted
// into a number and mathematical multiplication operation
// will be performed
// const multiplication = multiply('4', '6')
// console.log(`multiplication = ${multiplication}, type = ${typeof multiplication}`)


// optional parameter => default values
function function2(p1, p2, p3=30, p4=40) {
    console.log(`p1 = ${p1}`)
    console.log(`p2 = ${p2}`)
    console.log(`p3 = ${p3}`)
    console.log(`p4 = ${p4}`)
}

// 10, 20, 50, 60
function2(10, 20, 50, 60)

// 10, 20, 30, 40
// function2(10, 20)

function function3(p1, p2) {
    console.log(`inside function3 with 2 params`)
}

function function3(p1, p2, p3, p4) {
    console.log(`inside function3 with 4 params`)
}

function function3() {
    console.log(`inside function3 with 0 params`)
}

function3(10, 20)
function3(10, 20, 30, 40)
function3()
