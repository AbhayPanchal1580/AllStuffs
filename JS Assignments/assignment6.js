// let n1 = 10
//  let n2 = 20
//  swap(n1, n2) ➞ n1: 20, n2: 10

//Using third variable

let n1,n2,temp;

const swap=(n1,n2)=>{

    console.log(`Before swap n1=${n1} and n2=${n2}`);
    temp=n1;
    n1=n2;
    n2=temp;

    console.log(`After swap n1=${n1} and n2=${n2}`);
}

swap(10,20);

//Without using third variable

let n_1,n_2;

const swap_func=(n_1,n_2)=>{

    console.log(`Before swap n1=${n_1} and n2=${n_2}`);
    
    n_1=n_1+n_2;
    n_2=n_1-n_2;
    n_1=n_1-n_2;

    console.log(`After swap n1=${n_1} and n2=${n_2}`);
}

swap(10,20);