"use strict";
class Person2 {
    constructor() {
        this.name = '';
        this.address = '';
        this.age = 0;
    }
}
// Person: super class
// Player: subclass
class Player extends Person2 {
    constructor() {
        super(...arguments);
        this.sport = '';
    }
}
const person1 = new Person2();
person1.name = 'person1';
const person2 = new Person2();
const player1 = new Player();
player1.sport = 'cricket';
player1.name = 'player1';
// player1.age
const player2 = new Player();
// the type of reference MUST be equals or less than the
// type of object
// type of reference: Person2
// type of object: Player
// since Person2 is smaller than Player
const person3 = new Player();
