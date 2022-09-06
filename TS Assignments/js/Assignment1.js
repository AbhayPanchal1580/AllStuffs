"use strict";
class MyArray {
    constructor() {
        this.collection = [];
    }
    add(value) {
        this.collection.push(value);
    }
    remove(value) {
        const index = this.collection.indexOf(value);
        if (index > -1) {
            return this.collection.splice(index, 1);
        }
    }
    getValues() {
        return this.collection;
    }
}
const s = new MyArray();
s.add(1);
s.add(2);
s.add(3);
s.remove(2);
console.log(s.getValues());
