"use strict";
class BankAccount {
    constructor(id = 0, firstName = "", lastName = "", address = "", phone = "", email = "", type = "") {
        this.Accounts = [{
                id: 0,
                firstName: '',
                lastName: '',
                address: '',
                phone: '',
                email: "",
                type: ''
            }];
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    createAccount(id, firstName, lastName, address, phone, email, type) {
        this.Accounts.push({ id, firstName, lastName, address, phone, email, type });
    }
    updateAccount(num, val) {
        for (let i = 0; i < this.Accounts.length; i++) {
            if (this.Accounts[i].id == num) {
                this.Accounts[i].phone = val;
            }
        }
    }
    deleteAccount(num) {
        for (let i = 0; i < this.Accounts.length; i++) {
            if (this.Accounts[i].id == num) {
                this.Accounts.splice(i, 1);
            }
        }
    }
}
const a1 = new BankAccount();
a1.createAccount(1, 'Abhi', 'Panchal', 'Pune', '9146334963', 'abhi@gmail', 'Savings');
a1.createAccount(2, 'Suyash', 'Shinde', 'Nilanga', '9987564123', 'suyog@gmail', 'current');
a1.deleteAccount(1);
a1.updateAccount(2, '9850800961');
console.log(a1.Accounts);
class Transaction extends BankAccount {
    constructor(data, type, amount, customerId) {
        super();
        this.data = data;
        this.type = type;
        this.amount = amount;
        this.customerId = customerId;
    }
}
// widrowFunds(){
