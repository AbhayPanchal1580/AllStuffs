"use strict";
class MyValidator {
    constructor(valid = false, error = '') {
        this.errorResponse = () => {
            return { valid: false, error: 'error occurred' };
        };
        this.validator = (func) => {
            return func = this.errorResponse();
        };
        this.error = error;
        this.valid = valid;
    }
}
const Myobj = new MyValidator();
console.log(Myobj.validator(() => Myobj.errorResponse()).valid);
console.log(Myobj.validator().error);
