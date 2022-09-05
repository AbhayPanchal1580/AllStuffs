
const execute = (param) => {
    console.log(`inside execute function`)
    console.log(`param = ${param}, type = ${typeof param}`)

    param(10, 20)
    param(20, 30)
    param(30, 40)
    param(40, 50)
}

// traditional function
function add(p1, p2) {
    console.log(`${p1} + ${p2} = ${p1 + p2}`)
}

// anonymous function
const subtract = function (p1, p2) {
    console.log(`${p1} - ${p2} = ${p1 - p2}`)
}

// arrow function
const multiply = (p1, p2) => {
    console.log(`${p1} * ${p2} = ${p1 * p2}`)
}


execute(add)
execute(subtract)
execute(multiply)
execute((p1, p2) => {
    console.log(`${p1} / ${p2} = ${p1 / p2}`)
})