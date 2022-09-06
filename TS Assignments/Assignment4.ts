// write typescript code with following requirements (design proper classes). The requirements have
// suggestions for fields and methods, you are free to add more as per your thinking

// Bank Account
// fields: id, firstName, lastName, address, phone, email, type (saving/current)
// methods: createAccount, updateAccount, deleteAccount

// Transaction
// fields: date, type, amount, customerId
// methods: depositFunds, withdrawFunds

interface Bank {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: number;
    email: string;
    type: string;

    createAccount(
        id: number,
        firstName: string,
        lastName: string,
        address: string,
        phone: number,
        email: string,
        type: string
    ): void;
    updateAccount(): any;
    deleteAccount(): any;
}

class BankAccount implements Bank {
    createAccount = (
        id: number,
        firstName: string,
        lastName: string,
        address: string,
        phone: number,
        email: string,
        type: string
    ): void => {
        (this.id = id),
            (this.firstName = firstName),
            (this.lastName = lastName),
            (this.address = address),
            (this.phone = phone),
            (this.email = email),
            (this.type = type);
    };

    updateAccount() {
        throw new Error("Method not implemented.");
    }
    deleteAccount() {
        throw new Error("Method not implemented.");
    }
}

const person1 = new BankAccount(
    1,
    "abhay",
    "panchal",
    "Nilanga",
    9146334963,
    "abhay@gmail.com",
    "saving"
);

console.log(person1);
