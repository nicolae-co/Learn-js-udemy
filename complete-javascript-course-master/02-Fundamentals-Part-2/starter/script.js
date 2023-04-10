//Activating Strict Mode
'use strict';

/*

let hasDriversLicense = false;
const passTest = true;
if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio';
// const private = 543;

// const if = 23;



// Functions

function logger() {
    console.log('My name is Jonas');
}

// calling, running, invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// Function Declaration vs Expressions

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);



// Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirment = (birthYear, fisrtName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    //return retirment;
    return `${fisrtName} retiers in ${retirment} years`
}

console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1980, 'Bob'));



// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));



// Function Calling Other Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirment = function (birthYear, fisrtName) {
    const age = calcAge(birthYear);
    const retirment = 65 - age;
    if (retirment > 0) {
        console.log(`${fisrtName} retiers in ${retirment} years`)
        return retirment;
    } else {
        console.log(`${fisrtName} allready retired`)
        return -1;
    }

    //return retirment;
    //return
}

console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1970, 'Mike'));



// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);
//console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1997, 'teacher', friends];
console.log(jonas);


// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);



// Basic Array Operations (Methods)


// .push() --> adds element at the end of the array
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends, newLenght);


// .unshift() --> adds element at he begining of the array
friends.unshift('John');
console.log(friends);


// .pop()  --> remove element at the end of the array
friends.pop();
const popped = friends.pop();
console.log(friends, popped);


// .shift()  --> removes element at the begining of the array
friends.shift();
console.log(friends);


// .indexOf() --> returns the index at which the element is located
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


// .includes() --> return TRUE if the elem. is in the array or FALSE if it's not
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// Introduction to Objects

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}



// Dot vs. Bracket Notation

console.log(jonas);

// Dot notation
console.log(jonas.lastName);
//Brackets notation
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interetedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');


if (jonas[interetedIn]) {
    console.log(jonas[interetedIn]);
} else {
    console.log('Wrong request!Choose between firstName, lastName, age, job and friends')
}



jonas.location = 'Portugal';
jonas['twitter'] = '@jonassch,edtman';

console.log(jonas);

//Challenge
// 'Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }

};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// 'Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary())


// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️')
// console.log('Lifting weights repetition 2 🏋️‍♀️')
// console.log('Lifting weights repetition 3 🏋️‍♀️')
// console.log('Lifting weights repetition 4 🏋️‍♀️')
// console.log('Lifting weights repetition 5 🏋️‍♀️')
// console.log('Lifting weights repetition 6 🏋️‍♀️')
// console.log('Lifting weights repetition 7 🏋️‍♀️')
// console.log('Lifting weights repetition 8 🏋️‍♀️')
// console.log('Lifting weights repetition 9 🏋️‍♀️')
// console.log('Lifting weights repetition 10 🏋️‍♀️')


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}



// Looping Arrays, Breaking and Continuing

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    types.push(typeof jonas[i]);
    // types[i] = typeof jonas[i];

}

console.log(types);

const currentYear = 2037;
const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(currentYear - years[i]);
}
console.log(age);


// continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}
console.log('---BREAK WITH NUMBER')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}



// Looping Backwards and Loops in Loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


// Loop in Loop

for (let execise = 1; execise < 4; execise++) {
    console.log(`-----Starting exercise ${execise}-----`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
    }
}




// The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`"FOR LOOP" -- Lifting weights repetition ${rep}`);
// }


let rep = 1;
while (rep <= 10) {
    //console.log(`"WHILE LOOP" -- Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}

*/