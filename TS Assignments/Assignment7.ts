// Use inheritance
// Write a class Course with name,fees. Provide following functionalities
//            *initializer
//            *Accept data
//            *Print Data .
// #Write a Class Computer with subjectList.
// #Provide following functionalities
//            *initializer
//            *Accept data
//            *Print Data .
// #Write a Class Electonics with subjectList.
// #Provide following functionalities
//            *initializer
//            *Accept data
//            *Print Data

class Course {
    name: string='';
    fees: string ='';

    courses:any = [];

    // constructor(name: string = '', fees: string = '') {
    //     this.name = name;
    //     this.fees = fees;
    // }
    
//     acceptData=(obj:Object)=>{
// this.courses.push(this);
//     }

    acceptData = (course: string, fees: string)=>{
        this.courses.push({ course, fees });
    }

    printData = (course:string)=>{
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].course == course) {
                console.log( this.courses[i]);
            }
}
    }
}

 let c1 = new Course();

c1.acceptData('JS','2000');

let c2 = new Course();

c1.acceptData('JAVA','2000');

c1.printData('JS');

// for(let i=0;i<c1.courses.length;i++){
//     console.log(c1.courses[i].course)
// }



// c1.acceptData(c1)

