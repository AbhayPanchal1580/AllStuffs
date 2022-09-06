interface Params {
    firstParam?: string;

    secondParam?: string;
}

class MyClass implements Params {
    firstParam: string;

    secondParam: string;

    constructor(
        firstParam: string = "defaultFirst",
        secondParam: string = "defaultSecond"
    ) {
        this.firstParam = firstParam;

        this.secondParam = secondParam;
    }

    myFunc = (obj?: MyClass) => {
        if (obj) {
            console.log(`${obj?.firstParam} ${obj?.secondParam}`);
        } else {
            console.log(`${this.firstParam} ${this.secondParam}`);
        }
    };
}

let m1=new MyClass();

m1.myFunc(m1);

