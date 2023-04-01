
// JavaScript Fundamentals - Part 1
// Coding Challenge #1

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heighJohn1 = 1.95;

const bmiMark1 = massMark1 / heightMark1 ** 2;
const bmiJohn1 = massJohn1 / heighJohn1 ** 2;

const markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log(bmiMark1, bmiJohn1)
console.log(markHigherBMI1);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heighJohn2 = 1.76;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heighJohn2 ** 2;

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(bmiMark2, bmiJohn2)
console.log(markHigherBMI2);

// Coding Challenge #2

if (bmiMark1 > bmiJohn1) {
    console.log(`Mark's BMI (${bmiMark1}) is higher than John's BMI (${bmiJohn1})`)
} else {
    console.log(`John's BMI (${bmiJohn1}) is higher than Mark's BMI (${bmiMark1})`)
}

if (bmiMark2 > bmiJohn2) {
    console.log(`Mark's BMI (${bmiMark2}) is higher than John's BMI (${bmiJohn2})`)
} else {
    console.log(`John's BMI (${bmiJohn2}) is higher than Mark's BMI (${bmiMark2})`)
}