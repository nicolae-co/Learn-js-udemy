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

*/

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
