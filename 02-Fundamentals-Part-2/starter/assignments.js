'use strict';
/*
// activating strict mode

// FUNCTIONS assignment

function describeCountry (country, population, capitalCity) {
    const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return countryInfo;
}

const thePhilippines = describeCountry ('Philippines', 107,'Manila');
console.log (thePhilippines)

const theUnitedStates = describeCountry ('United States of America', 350, 'DC') ;
console.log (theUnitedStates);

const theIndonesia = describeCountry ('Indonesia',273,'Jakarta');
console.log (theIndonesia);

//assignment - function declaration vs expression//

function percentageOfWorld1 (population) {
    return (population/7900) * 100;
}

const percentageOfWorldPhilippines = percentageOfWorld1 (107);
const percentageOfWorldUnitedStates= percentageOfWorld1 (350);
const percentageOfWorldIndonesia = percentageOfWorld1 (273);

console.log (percentageOfWorldPhilippines, percentageOfWorldUnitedStates, percentageOfWorldIndonesia);

const percentageOfWorld2 = function (population) {
    return (population/7900) * 100;;
}

const percentageOfWorldPH = percentageOfWorld2 (107);
const percentageOfWorldUS= percentageOfWorld2 (350);
const percentageOfWorldID = percentageOfWorld2 (273);

console.log (percentageOfWorldPH, percentageOfWorldUS, percentageOfWorldID);

const percentageOfWorld3 = population => (population/7900) * 100;

const percentageOfWorldPhils = percentageOfWorld3 (107);
const percentageOfWorldUStates= percentageOfWorld3 (350);
const percentageOfWorldIndonish = percentageOfWorld3 (273);

console.log (percentageOfWorldPhils, percentageOfWorldUStates, percentageOfWorldIndonish);


function describePopulation (country, population) {
    const percentage = percentageOfWorld1 (population)
    const description = `${country} has a ${population} million people, which is about ${percentage}% of the world`;
   return description;
}

const desc1Philippines = describePopulation ('Philippines', 107)
const desc1America = describePopulation ('America', 350)
const desc1Indonesia = describePopulation ('Indonesia', 273)

console.log (desc1Philippines);
console.log (desc1America);
console.log (desc1Indonesia);

//arrays assignment//

const populations = [107, 350, 273, 30];
console.log (populations.length === 4);

const percentages = [
    percentageOfWorld1 (populations [0]),
    percentageOfWorld1 (populations [1]),
    percentageOfWorld1 (populations [2]),
    percentageOfWorld1 (populations [3])
];

console.log (percentages);

const neighbours = [`Vietnam`, `India`, `Brunei`];

neighbours.push (`Utopia`);
console.log (neighbours);

neighbours.pop ();
console.log (neighbours);

// if (neighbours !== `Germany`) {
//     console.log (`Probably not a central European country :D`);
// }

if (!neighbours.includes (`Germany`)) {
    console.log (`Probably not a central European country :D`);
}

console.log (neighbours.indexOf (`Vietnam`));
neighbours [0] = `Republic of Vietnam`;

//or

// neighbours[neighbours.indexOf('Vietnam')] = 'Republic of Vietnam';

console.log (neighbours);


const myCountry = {
    country: `Philippines`,
    capital: `Manila`,
    language: `filipino`,
    population: 107,
    neighbours: [`Vietnam`, `India`, `Brunei`]
};

console.log (myCountry);


// dot vs bracket notation

console.log (`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbouring countries ${myCountry.neighbours} and a capital called ${myCountry.capital}`);

myCountry.population = (2 + myCountry.population);
// or myCountry.population += 2;

console.log (`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries like ${myCountry.neighbours} and a capital called ${myCountry.capital}`);

// or   console.log(
//   `${myCountry.country} has ${myCountry.population} million
//   ${myCountry.language}-speaking people,
//   ${myCountry.neighbours.length} neighbouring countries and
//   a capital called ${myCountry.capital}.`
// );

myCountry [`population`] = (myCountry [`population`] - 2);
// or myCountry [`population`] -= 2;

console.log (`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbouring countries ${myCountry.neighbours} and a capital called ${myCountry.capital}`);

//object methods


const myCountry2 = {
    country: `Philippines`,
    capital: `Manila`,
    language: `filipino`,
    population: 107,
    neighbours: [`Vietnam`, `India`, `Brunei`],


describe: function () {
    console.log (
        `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries like ${this.neighbours} and a capital called ${this.capital}`
        );
},

checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
}

};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);


//The for loop - allows us to automateb repetitive tasks

for (let votes = 1 ; votes <= 50 ; votes ++) {
    console.log (`Voter number ${votes} is currently voting`)

//assignment for break continue

const populationNew = [107, 350, 273, 30];
const percentages2 = [];

for (let i = 0 ; i < populationNew.length ; i++ ) {
    const perc = percentageOfWorld1(populationNew[i]);
    percentages2.push(perc);
    }
console.log (percentages2);
};

// const listOfNeighbours = [
//     `Canada`,
//     `Mexico`,
//     `Spain`,
//     `Norway`,
//     `Sweden`,
//     `Russia`
// ];

// for (let i = 0 ; i < listOfNeighbours.length  ;  i++ ) {
//     console.log (`Neighbour: ${listOfNeighbours} [i]`);
// };

//answer

const listOfNeighbours = [ ['Canada', 'Mexico'], ['Spain'],
['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// 

//the while loop

// const populationNew = [107, 350, 273, 30];
// const percentages2 = [];

// for (let i = 0 ; i < populationNew.length ; i++ ) {
//     const perc = percentageOfWorld1(populationNew[i]);
//     percentages2.push(perc);
//     }
// console.log (percentages2);
// };

let percentages3= [];
let i = 0;
for (let i = 0 ; i < populations.length ; i++ ) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
    };

    console.log (percentages3);
*/


