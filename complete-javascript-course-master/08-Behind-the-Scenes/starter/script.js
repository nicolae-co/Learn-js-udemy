'use strict';
/*
// SCOPE PRACTICE

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with the same name as outer scorep's variable
      const firstName = 'Steven';

      // Reassigning out scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // REFERENCE ERROR
    console.log(millenial);
    // console.log(add(2, 3)); // REFERNCE ERROR IN STRICT MODE
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Nicolae';
calcAge(1991);

console.log('-----------------');
// HOISTING PRACTICE
console.log('HOISTING PRACTICE');

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Nicolae';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numPorducts);

if (!numPorducts) deleteShoppinCart();

var numPorducts = 10;

function deleteShoppinCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// this. IN PRACTICE

console.log(this);

const calcAge2 = function (birthYear) {
  const x = 2037 - birthYear;
  console.log(x);
  console.log(this);
};

calcAge2(1991);

const calcAge2Arrow = birthYear => {
  const x = 2037 - birthYear;
  console.log(x);
  console.log(this);
};

calcAge2Arrow(1921);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();



// REGULAR FUNCTIONS vs. ARROW FUNCTIONS

var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    // SOLUTION 1
    const self = this; // self that
    // const isMillenial = function () {
    //   console.log(self);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // SOLUTION 2
    const isMillenial = () => {
      console.log(this);
      //   console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// arguments keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);



// PRIMITIVES vs. REFERENCE TYPE

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'JOnas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

*/

// PRIMITIVES vs. REFERENCE TYPE PRACTICE

// Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
