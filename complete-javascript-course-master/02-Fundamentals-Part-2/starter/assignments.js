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

console.log(population1, population2, population3);

const percentageOfWorld2 = function (population) {
    return `${(population / 79).toFixed(2)}% of world population`
}

const population4 = percentageOfWorld2(234);
const population5 = percentageOfWorld2(24);
const population6 = percentageOfWorld2(987);

console.log(population4, population5, population6);
