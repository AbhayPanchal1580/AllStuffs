"use strict";
// write typescript code with following requirements (design proper classes). The requirements have
// suggestions for fields and methods, you are free to add more as per your thinking
class BankAccount {
    constructor() {
        this.createAccount = (id, firstName, lastName, address, phone, email, type) => {
            (this.id = id),
                (this.firstName = firstName),
                (this.lastName = lastName),
                (this.address = address),
                (this.phone = phone),
                (this.email = email),
                (this.type = type);
        };
    }
    updateAccount() {
        throw new Error("Method not implemented.");
    }
    deleteAccount() {
        throw new Error("Method not implemented.");
    }
}
const person1 = new BankAccount(1, "abhay", "panchal", "Nilanga", 9146334963, "abhay@gmail.com", "saving");
console.log(person1);
