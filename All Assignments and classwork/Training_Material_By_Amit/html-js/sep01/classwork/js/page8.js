// creating an object using function 


// constructor function
function Person(name, address, age) {
    this.name = name
    this.address = address
    this.age = age

    // this is not required becuase
    // - canVote reference gets added in every object
    // - increases the object size
    // this.canVote = canVote
}

// add the shared functions inside the prototype
Person.prototype.canVote = function () {
    if (this.age >= 18) {
        console.log(`${this.name} is eligible for voting`)
    } else {
        console.log(`${this.name} is NOT eligible for voting`)
    }
}

// create a new object of Person
const p1 = new Person('person1', 'pune', 10)
// p1.canVote = canVote
console.log(p1)
p1.canVote()


const p2 = new Person('person2', 'mumbai', 20)
p2.email = 'person2@test.com'
console.log(p2)
// p2.canVote = canVote
p2.canVote()
