/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';


console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;

console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;



// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


console.log(`Just a regular string...`);

console.log('Strign with \n\
multiple \n\
lines.');

console.log(`String with
multiple
lines`);


// Taking decisions: if / esle Statements

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)




// Type Conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);



// Type Coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');


let n = '1' + 1;
n = n - 1;
console.log(n);


//

// 5 falsy values: 0, '', undefiend, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined!")
} else {
    console.log('Height is UNDEFINED')
}



// Equality Operators: == vs ===

const age = 18;
if (age === 18) console.log('You just become an adult! (strict)');

if (age == 18) console.log('You just become an adult! (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //'23' ==  23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log('Number is not 23, 7 or 9!'); 7
}

if (favourite !== 23) console.log('Why not 23?');


// Boolean Logic
// Logical Operators

const hasDriversLicence = true;  // A
const hasGoodVision = true;      // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);


// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C

console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



// The switch Statement

const day = 'monday';


switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Preapare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Preapare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!')
}


// Statements vs Expressions

//expressions produces value
3 + 4
1991
true && false && !false
//statements does NOT produce a value on himself
if (23 > 10) {
    const str = '23 is bigger';
}

*/


// The Conditional (Ternary) Operator

const age = 15;
// age >= 18
//     ? console.log('I like to drink wine🍷')
//     : console.log('I like to drink juice🥤');

const drink = age >= 18 ? 'wine🍷' : 'juice🥤';
console.log(`1 - I like to drink ${drink}`)

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'juice🥤';
}
console.log(`2 - I like to drink ${drink2}`)

console.log(`3 - I like to drink ${age >= 18 ? 'wine🍷' : 'juice🥤'}`);
