// in JS every function accepts two hidden parameters
// - this: reference to the current object
// - arguments: collection of parameters


// global function
function canVote() {
    if (this.age >= 18) {
        console.log(`${this.name} is eligible for voting`)
    } else {
        console.log(`${this.name} is NOT eligible for voting`)
    }
}

const p1 = new Object()
p1.name = 'person1'
p1.age = 10

// method: function inside an object
// 
p1.canVote = canVote
// canVote(p1)
console.log(p1)
p1.canVote()

const p2 = new Object()
p2.name = 'person2'
p2.age = 20
p2.canVote = canVote
// canVote(p2)
p2.canVote()

// global functions receive this -> window object
function test() {
    console.log('inside test()')
    console.log(this)

    this.alert('hello!! welcome to hell')
}

// test()