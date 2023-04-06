'use strict'

// Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const cambogia = describeCountry('Cambogia', 5, 'Cameerrs');
const england = describeCountry('England', 5, 'London');
const romania = describeCountry('Romania', 5, 'Bucharest');

console.log(cambogia, england, romania);