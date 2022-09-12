/*

//class definition
class Person {
    int age;
    String name;
    String address;
    String email;

    void canVote() {
        ....
    }
}

// object will be created
Person person1 = new Person();
person1.canVote()

Person person2 = new Person();
Person person3 = new Person();
Person person4 = new Person();
Person person5 = new Person();

// reuse
// inheritance (is-a)
// association
// - aggregation (has-a)
// - composed of (composed-of)

*/

// create a person object
const person = new Object()
person.firstName = 'amit'
person.lastName = 'kulkarni'
person.email = 'amit@test.com'

// nested object
person.address = new Object()
person.address.city = 'pune'
person.address.state = 'MH'
person.address.country = 'india'
console.log(person)


const person2 = new Object()
person2.name = 'test person'
console.log(person2)

// create a mobile object
// mobile is a reference
// Object is the root function provided by JS
const mobile = new Object()
mobile.model = 'iPhone 13 pro max'
mobile.company = 'Apple'
mobile.price = 200600
mobile.price = 215000
console.log(mobile)

// let num = 100
// num = 200

// array of objects
const mixed = [person, mobile]
console.log(mixed)

const numbers = [1, 2, 3, 4, 5]
console.log(`numbers = ${numbers}, type = ${typeof numbers}`)