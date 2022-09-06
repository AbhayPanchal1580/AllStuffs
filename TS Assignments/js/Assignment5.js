"use strict";
// Write a program that asks the user how many days are in a particular month, and what day of the
// week the month begins on (0 for Monday, 1 for Tuesday, etc), and then prints a calendar for that
// month. For example, here is the output for a 30-day month that begins on day 4 (Thursday)
function enterData() {
    let mDays = Number(prompt("Enter Number of days in Month", ""));
    let wDayS = Number(prompt("Enter When the month starts Ex- If Monday - 0 and so ON", ""));
    let days = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    let nWeek = [];
    for (let i = 0; i <= 5; i++) {
        for (let j = wDayS; j < 7; j++) {
            if (nWeek.length < mDays) {
                nWeek.push(days[j]);
            }
        }
        wDayS = 0;
    }
    for (let i = 0; i < nWeek.length; i++) {
        document.write(`${i + 1} ${nWeek[i]} <br>`);
    }
}
enterData();
