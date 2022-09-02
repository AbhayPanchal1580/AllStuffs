// Write a function which Calculate the sum of marks provided in an array, average it and also show
// Grade
// Grade criteria/mechanism is:
// 0% to 70% = > D Grade
// 71% to 79% => C Grade
// 81% to 89% => B Grade
// 91% to 100% => A Grade
// const marks = [55, 85, 55, 65];
// calculateGrades(marks) ➞ Grade: D

const marks = [55, 85, 95, 95];
let sum = 0, count = 0;
let calculateGrades = (array) => {

    array.forEach(element => {
        count++;
        sum += element;
    });

    let average = sum / count;

    console.log(average)

    if (average >= 0 && average <= 70) {
        console.log(`D Grade`);
    } else if (average >= 71 && average <= 79) {
        console.log(`C Grade`);
    } else if (average >= 80 && average <= 89) {
        console.log(`B Grade`);
    } else if (average >= 90 && average <= 100) {
        console.log(`A Grade`);
    }
}
calculateGrades(marks);
