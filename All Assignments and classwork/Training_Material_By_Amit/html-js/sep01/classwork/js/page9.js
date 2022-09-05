function Car(model, company, price) {
    this.model = model
    this.company = company
    this.price = price
}

Car.prototype.printDetails = function () {
    console.log(`model = ${this.model}`)
    console.log(`company = ${this.company}`)
    console.log(`price = ${this.price}`)
}

Car.prototype.isAffordabe = function() {
    if (this.price <= 20) {
        console.log(`${this.model} is affordable`)
    } else {
        console.log(`${this.model} is NOT affordable`)
    }
}

Car.prototype.toString = function() {
    return `Car [model: ${this.model}, company: ${this.company}, price: ${this.price}]`
}

const c1 = new Car('i20', 'hyudai', 15)
// console.log(c1)
// c1.printDetails()
// c1.isAffordabe()

// add a function named toString
// c1.toString = function() {
//     // console.log('inside my toString')
//     return 'test'
// }
console.log(`c1 = ${c1}`)
// console.log(c1.toString())


const c2 = new Car('Meridian', 'Jeep', 35)
// console.log(c2)
// c2.printDetails()
// c2.isAffordabe()
console.log(`c2 = ${c2}`)


const num = 100
console.log(`num = ${num}`)
const strNum = `${num}`