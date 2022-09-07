interface Bank {
    id?: number;
    firstName?: string;
    lastName?: string;
    address?: string;
    phone?: number;
    email?: string;
    type?: string;
  
    createAccount(
      id?: number,
      firstName?: string,
      lastName?: string,
      address?: string,
      phone?: number,
      email?: string,
      type?: string
    ): void;
    updateAccount(num:number,val:string): any;
    deleteAccount(num:number): any;
  }
  


class BankAccount {

    id: number;

    firstName: string;

    lastName: string;

    address: string;

    phone: string;

    email: string;

    type: string;

    Accounts = [{

        id: 0,

        firstName: '',

        lastName: '',

        address: '',

        phone: '',

        email: "",

        type: ''

    }];

    constructor(id: number = 0, firstName: string = "", lastName: string = "", address: string = ""

        , phone: string = "", email: string = "", type: string = "") {

        this.id = id;

        this.firstName = firstName;

        this.lastName = lastName;

        this.address = address;

        this.phone = phone;

        this.email = email;

        this.type = type;

    }

    createAccount(id: number, firstName: string, lastName: string, address: string
        , phone: string, email: string, type: string) {
        this.Accounts.push({ id, firstName, lastName, address, phone, email, type });
    }
    updateAccount(num: number, val: string) {
        for (let i = 0; i < this.Accounts.length; i++) {
            if (this.Accounts[i].id == num) {
                this.Accounts[i].phone = val;
            }
        }
    }

    deleteAccount(num: number) {
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

a1.updateAccount(2,'9850800961');

console.log(a1.Accounts);

class Transaction extends BankAccount {

    data: string

    type: string

    amount: number;

    customerId: string

    constructor(data: string, type: string, amount: number, customerId: string) {

        super();

        this.data = data;

        this.type = type;

        this.amount = amount;

        this.customerId = customerId;

    }

    // depositeFunds()

}

    // widrowFunds(){



