"use strict";
class MyClass {
    constructor(firstParam = "defaultFirst", secondParam = "defaultSecond") {
        this.myFunc = (obj) => {
            if (obj) {
                console.log(`${obj === null || obj === void 0 ? void 0 : obj.firstParam} ${obj === null || obj === void 0 ? void 0 : obj.secondParam}`);
            }
            else {
                console.log(`${this.firstParam} ${this.secondParam}`);
            }
        };
        this.firstParam = firstParam;
        this.secondParam = secondParam;
    }
}
let m1 = new MyClass();
m1.myFunc(m1);
