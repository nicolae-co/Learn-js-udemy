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


*/
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
