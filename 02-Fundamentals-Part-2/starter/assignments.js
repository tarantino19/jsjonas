'use strict';

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

console.log (`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbouring countries ${myCountry.neighbours} and a capital called ${myCountry.capital}`);

myCountry [`population`] = (myCountry [`population`] - 2);

console.log (`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbouring countries ${myCountry.neighbours} and a capital called ${myCountry.capital}`);

