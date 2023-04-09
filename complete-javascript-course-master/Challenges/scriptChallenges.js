
// JavaScript Fundamentals - Part 1
// Coding Challenge #1 
console.log('Fundamentals Part 1 - Challenge #1')


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
console.log('Fundamentals Part 1 - Challenge #2')

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

// Coding Challenge #3
console.log('Fundamentals Part 1 - Challenge #3')

const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;

const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

const avgDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
const avgKoalas = (koalas1 + koalas2 + koalas3) / 3;

if (avgDolphins > avgKoalas) {
    console.log('Dolphins won!');
} else if (avgDolphins < avgKoalas) {
    console.log('Koalas won!');
} else {
    console.log('Draw!');
}

// BONUS 

const dolphins1bonus = 97;    //bonus 1 97
const dolphins2bonus = 112;   //bonus 1 112
const dolphins3bonus = 101;   //bonus 1 101

const koalas1bonus = 109;     //bonus 1 109
const koalas2bonus = 95;      //bonus 1 95 
const koalas3bonus = 106;     //bonus 1 123

const avgDolphinsbonus = (dolphins1bonus + dolphins2bonus + dolphins3bonus) / 3;
const avgKoalasbonus = (koalas1bonus + koalas2bonus + koalas3bonus) / 3;

if (avgDolphinsbonus >= 100 && avgDolphinsbonus > avgKoalasbonus) {
    console.log('Dolphins won!');
} else if (avgKoalasbonus >= 100 && avgDolphinsbonus < avgKoalasbonus) {
    console.log('Koalas won!');
} else if (avgDolphinsbonus >= 100 && avgKoalasbonus >= 100 && avgDolphinsbonus === avgKoalasbonus) {
    console.log('Draw!');
} else {
    console.log('No one won!')
}


// Coding Challenge #4
console.log('Fundamentals Part 1 - Challenge #4')

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`
Bill value: ${bill}
Tip value: ${tip}
Total value: ${bill + tip}
`);


// JavaScript Fundamentals - Part 2

// Coding Challenge #1
console.log('Fundamentals Part 2 - Challenge #1')

const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 1
let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No one won!')
    }
}

checkWinner(averageDolphins, averageKoalas);

//Test 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);

checkWinner(averageDolphins, averageKoalas);


// Coding Challenge #2
console.log('Fundamentals Part 2 - Challenge #2')


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);


// Coding Challenge #3
console.log('Fundamentals Part 2 - Challenge #3')


const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi})`)
} else if (john.calcBMI() < mark.calcBMI()) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi})`)
} else {
    console.log("Equal BMI's")
}