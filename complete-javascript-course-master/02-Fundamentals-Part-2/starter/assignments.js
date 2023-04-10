'use strict'

// Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const cambogia = describeCountry('Cambogia', 5, 'Cameerrs');
const england = describeCountry('England', 5, 'London');
const romania = describeCountry('Romania', 5, 'Bucharest');

// console.log(cambogia, england, romania);


// Function Declaration vs Expressions

function percentageOfWorld1(population) {
    return `${(population / 79).toFixed(2)}% of world population`
}

const population1 = percentageOfWorld1(54);
const population2 = percentageOfWorld1(523);
const population3 = percentageOfWorld1(1302);

//console.log(population1, population2, population3);

const percentageOfWorld2 = function (population) {
    return `${(population / 79).toFixed(2)}% of world population`
}

const population4 = percentageOfWorld2(234);
const population5 = percentageOfWorld2(24);
const population6 = percentageOfWorld2(987);

//console.log(population4, population5, population6);


// Arrow Functions

const percentageOfWorld3 = population => (population / 79).toFixed(2)

const population7 = percentageOfWorld2(653);
const population8 = percentageOfWorld2(3425);
const population9 = percentageOfWorld2(132);

//console.log(population7, population8, population9);


//Functions Calling Other Functions

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
}

const population10 = describePopulation('England', 53);
const population11 = describePopulation('China', 123);
const population12 = describePopulation('India', 763);

//console.log(population10, population11, population12);


// Introduction to Arrays

const populations = [34, 65, 76, 87];
//console.log(population1.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
//console.log(percentages);




// Basic Array Operations (Methods)
const neighbours = ['Moldova', 'Bulgaria', 'Ukraina', 'Ungaria', 'Serbia'];

neighbours.push('Utopia');
neighbours.pop('Utopia');
if (!neighbours.includes('Germany')) {
    //console.log('Probably not a central European country :D')
}

neighbours[neighbours.indexOf('Moldova')] = 'Republic of Moldova';
//console.log(neighbours);




// Introduction to Objects

// const myCountry = {
//     country: 'Romania',
//     capital: 'Bucharest',
//     language: 'romanian',
//     population: 19,
//     neighbours: ['Moldova', 'Bulgaria', 'Ukraina', 'Ungaria', 'Serbia']
// }



// Dot vs. Bracket Notation

//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// Object Methods

const myCountry = {
    country: 'Romania',
    capital: 'Bucharest',
    language: 'romanian',
    population: 19,
    neighbours: ['Moldova', 'Bulgaria', 'Ukraina', 'Ungaria', 'Serbia'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsIsland: function () {
        this.isIsland;
        this.neighbours === 0
            ? this.isIsland = true
            : this.isIsland = false;
        // this.isIsland = this.neighbours.lenghts === 0 ? true : false;
    }
}
// myCountry.describe()
// myCountry.checkIsIsland()
// console.log(myCountry)


// Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
    //console.log(`Voter number ${i} is currently voting`);
}

// Looping Arrays, Breaking and Continuing

const populations2 = [34, 65, 76, 87];
const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
    percentages2.push(percentageOfWorld1(populations2[i]));
}
//console.log(percentages2);

// Looping Backwards and Loops is Loops

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    //console.log(listOfNeighbours[i]);
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        //console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}


// The while Loop

const percentages3 = [];

let i = 0;
while (i < populations2.length) {
    percentages3.push(percentageOfWorld1(populations2[i]));
    i++;
}

//console.log(percentages3);



