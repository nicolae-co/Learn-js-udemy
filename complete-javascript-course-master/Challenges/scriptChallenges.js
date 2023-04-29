// JavaScript Fundamentals - Part 1
// Coding Challenge #1
'use strict';
/*
console.log("Fundamentals Part 1 - Challenge #1");

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heighJohn1 = 1.95;

const bmiMark1 = massMark1 / heightMark1 ** 2;
const bmiJohn1 = massJohn1 / heighJohn1 ** 2;

const markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log(bmiMark1, bmiJohn1);
console.log(markHigherBMI1);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heighJohn2 = 1.76;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heighJohn2 ** 2;

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(bmiMark2, bmiJohn2);
console.log(markHigherBMI2);

// Coding Challenge #2
console.log("Fundamentals Part 1 - Challenge #2");

if (bmiMark1 > bmiJohn1) {
  console.log(
    `Mark's BMI (${bmiMark1}) is higher than John's BMI (${bmiJohn1})`
  );
} else {
  console.log(
    `John's BMI (${bmiJohn1}) is higher than Mark's BMI (${bmiMark1})`
  );
}

if (bmiMark2 > bmiJohn2) {
  console.log(
    `Mark's BMI (${bmiMark2}) is higher than John's BMI (${bmiJohn2})`
  );
} else {
  console.log(
    `John's BMI (${bmiJohn2}) is higher than Mark's BMI (${bmiMark2})`
  );
}

// Coding Challenge #3
console.log("Fundamentals Part 1 - Challenge #3");

const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;

const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

const avgDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
const avgKoalas = (koalas1 + koalas2 + koalas3) / 3;

if (avgDolphins > avgKoalas) {
  console.log("Dolphins won!");
} else if (avgDolphins < avgKoalas) {
  console.log("Koalas won!");
} else {
  console.log("Draw!");
}

// BONUS

const dolphins1bonus = 97; //bonus 1 97
const dolphins2bonus = 112; //bonus 1 112
const dolphins3bonus = 101; //bonus 1 101

const koalas1bonus = 109; //bonus 1 109
const koalas2bonus = 95; //bonus 1 95
const koalas3bonus = 106; //bonus 1 123

const avgDolphinsbonus = (dolphins1bonus + dolphins2bonus + dolphins3bonus) / 3;
const avgKoalasbonus = (koalas1bonus + koalas2bonus + koalas3bonus) / 3;

if (avgDolphinsbonus >= 100 && avgDolphinsbonus > avgKoalasbonus) {
  console.log("Dolphins won!");
} else if (avgKoalasbonus >= 100 && avgDolphinsbonus < avgKoalasbonus) {
  console.log("Koalas won!");
} else if (
  avgDolphinsbonus >= 100 &&
  avgKoalasbonus >= 100 &&
  avgDolphinsbonus === avgKoalasbonus
) {
  console.log("Draw!");
} else {
  console.log("No one won!");
}

// Coding Challenge #4
console.log("Fundamentals Part 1 - Challenge #4");

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`
Bill value: ${bill}
Tip value: ${tip}
Total value: ${bill + tip}
`);

// JavaScript Fundamentals - Part 2

// Coding Challenge #1
console.log("Fundamentals Part 2 - Challenge #1");

const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 1
let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No one won!");
  }
}

checkWinner(averageDolphins, averageKoalas);

//Test 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);

checkWinner(averageDolphins, averageKoalas);

// Coding Challenge #2
console.log("Fundamentals Part 2 - Challenge #2");

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);

// Coding Challenge #3
console.log("Fundamentals Part 2 - Challenge #3");

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(1);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(1);
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi})`
  );
} else if (john.calcBMI() < mark.calcBMI()) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi})`
  );
} else {
  console.log("Equal BMI's");
}

// Coding Challenge #4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];

for (let i = 0; i < bills2.length; i++) {
  const tip = calcTip(bills2[i]);
  tips2.push(tip);
  total2.push(tip + bills2[i]);
}

console.log(tips2, total2);

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage2(total2));



// Developer Skills & Editor Setup

// Coding Challenge #1

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

// My approach
const printForecast = function (temps) {
  let forecast = ['...'];
  for (let i = 0; i < temps.length; i++) {
    forecast.push(` ${temps[i]}°C in ${i + 1} days ...`);
  }
  return forecast.join('');
};

console.log(printForecast(testData1));
console.log(printForecast(testData2));

// Course approach

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - String need to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const printForecastCourse = function (arr) {
  let str = '...';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(str);
};

console.log(printForecastCourse(testData1));



// Data Structures, Modern Operators and Strings

// Challenge #1

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`Number of goals: ${players.length}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// Challenge #2

// 1.
for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);

// 2.
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(sum / Object.values(game.odds).length);

// 3.
// const values = Object.entries(game);
// console.log(values);

const odds = Object.entries(game.odds);
console.log(odds);

for (const [team, odd] of [...odds]) {
  console.log(
    `Odd of ${team !== 'x' ? 'victory' : 'draw'} ${
      team !== 'x' ? game[team] : ''
    }: ${odd}`
  );
}

// Course solution
for (const [team, odd] of odds) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  console.log(`[${min <= 45 ? 'FIRST' : 'SECOND'} HALF] ${min}: ${event}`);
}

// Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(text, rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// Challenge #5

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}



// A Closer Look at Functions

// Challenge #1

// 1.
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  //1.1
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}\n
    (Write option number)
    `)
    );
    //1.2

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },

  //3.
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll result are ${this.answers.join(', ')}`);
    }
  },
};

const answer = poll.registerNewAnswer;

// 2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// [5,2,3]
// [1,5,3,9,6,1]

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');


// Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();



// WORKING WITH ARRAYS

// Challange #1
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];

const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const copyDogJulia = dogsJulia;
  const correctDogJulia = copyDogJulia.slice(1, -2);
  const finalDogCount = correctDogJulia.concat(dogsKate);
  finalDogCount.forEach((dogAge, i) => {
    dogAge >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
        )
      : console.log(`Dog number ${i + 1} is still a puppy 🐶!`);
  });
};

console.log('---TEST DATA 1---');
checkDogs(juliaData1, kateData1);
console.log('---TEST DATA 2---');
checkDogs(juliaData2, kateData2);

// Challenge #2
const calcAverageHumanAge = function (arr) {
  const dogAge = arr.map(dog => (dog <= 2 ? dog * 2 : dog * 4 + 16));
  const filteredAge = dogAge.filter(dog => dog >= 18);
  // const dogAvgAge = dogAge.reduce((acc, cur) => acc + cur, 0) / dogAge.length;
  // console.log(dogAvgAge);
  const dogAvgAge = filteredAge.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  console.log(dogAvgAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challenge #3
const calcAverageHumanAge2 = ages =>
  ages
    .map(dog => (dog <= 2 ? dog * 2 : dog * 4 + 16))
    .filter(dog => dog >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const test1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const test2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(test1, test2);

// Challenge #4


Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog.recommended = Math.trunc(dog.weight ** 0.75 * 28);
});
//console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating to ${
    dogSarah.curFood > dogSarah.recommended ? 'much' : 'little'
  }`
);

// 3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommended)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommended)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommended));

// 6.
const checkEatingOk = dog =>
  dog.curFood > dog.recommended * 0.9 && dog.curFood < dog.recommended * 1.1;

console.log(dogs.some(checkEatingOk));

// 7.
console.log(dogs.filter(checkEatingOk));

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.recommended - b.recommended);
console.log(dogsCopy);


// OBJECT ORIENTED PROGRAMING (OOP) WITH JAVASCRIPT

// Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();


// Coding Challenge #2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speed);


// Coding Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.chargeBattery(30);
tesla.accelerate();


// Coding Challenge #4

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }
}

class EVCL extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian.chargeBattery(40).accelerate().brake();
*/

// Asynchronous JavaScript: Promises, Async/Await, and AJAX

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

const whereAmI = function (lat, lng) {
  const apiKEY = '292845561963529523645x22003';
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKEY}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding: ${res.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => console.log(data[0]))
    .catch(err => console.error(`${err.message}`));
};

whereAmI(52.508, 13.381);
