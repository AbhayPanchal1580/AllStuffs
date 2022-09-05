// object oriented programming in JS

// ways to create an object in JS
// - using JSON syntax / object literal 
//   - use {} to create an object
//   - use [] to create an array
// - using Object
// - using function
// - using class -> typescript

// object
// - collection of key-value (property-value) pairs

function function1() {
    const car = {
        model: 'i20',
        company: 'hyundai',
        price: 15
    }

    console.log(car)

    console.log(`company = ${car['company']}`)
    console.log(`company = ${car.company}`)

    // iterate over the keys inside an object
    for (const key in car) {
        console.log(`key = ${key}, value = ${car[key]}`)
    }

    // get all keys / properties
    const keys = Object.keys(car)
    console.log(keys)
    for (const key of keys) {
        console.log(`key = ${key}, value = ${car[key]}`)
    }
}

function1()