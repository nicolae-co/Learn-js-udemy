
// Values and Variables

const country = "Romania";
const continent = "Europe";
let population = 19;

//console.log(country, continent, population);



//Data Types

const isIsland = false;
let language;

//console.log(typeof isIsland, typeof population, typeof country, typeof language)



// let, const and var

language = 'Romanian';



// Basic Operators

let halfPopulation = population / 2;
//console.log(halfPopulation);

population++;
//console.log(population);

let populationFinland = 6;
//console.log(population > populationFinland);

let avgPopulation = 33;
//console.log(avgPopulation > population);

const description = country + ' is in ' + continent + ' ,and its '
    + population + ' million people speak ' + language;
//console.log(description);


// String and Template Literals

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`
//console.log(description2)
// Taking Decisions: if / else Statements


if (population > avgPopulation) {
    //console.log(`${country} is above average.`)
} else {
    //console.log(`${country}'s population is ${avgPopulation - population} millions below average.`)
}

// Type Conversion and Coercion
/*
'9' - '5' = 4;
'19' - '13' + '17' = '617';
'19' - '13' + 17 = 23;
'123' < 57 = false;
5 + 6 + '4' + 9 - 4 - 2 = 1143
*/


// Equality Operators: == vs ===

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     //console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     // console.log('More than 1 border');
// } else {
//     // console.log('No borders');
// }


// Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
    //console.log(`You should live in ${country}! :)`)
} else {
    //console.log(`${country} does not meet your criteria :(`)
}

// The switch Statement


// The Conditional (Ternary) Operator


