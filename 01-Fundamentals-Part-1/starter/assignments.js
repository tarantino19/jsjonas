/*variables*/
/*
let country = 'Philippines';
let continent = 'Asia';
let population =  107;

console.log (country);
console.log (continent);
console.log (population);

//data types//

let isIsland = true;

console.log (typeof isIsland);
console.log (typeof population);
console.log (typeof country);
console.log (typeof language);

//let const var//

let myLanguage = 'filipino';

//basic operators//

console.log (population / 2);
//population ++;
console.log (population);
console.log (population > 6);
console.log (population < 33);
const description1 = country + ' is in ' + continent + ' ,and its ' + population + ' million people speak ' + myLanguage;
console.log (description1);

const description1New = (`${country} is in ${continent}, and its ${population} million people speak ${myLanguage}`);
console.log (description1New);

if (population > 33) {
    console.log (`${country}' population is above average`)
} else {
    console.log (`${country}' population is ${33 - population} million below average`)
} 

console.log ('9' - '5'); //4
console.log ('19' - '13' + '17'); //617
console.log ('19' - '13' + 17); // 23
console.log ('123' < '57'); // true
console.log (5 + 6 + '4' + 9 - 4 - 2); //117 - i was wrong on this.. 5+6+'4" = 114 +  9-4-2 = 3 --- answer is 1143  - after the string, the next values arent added as is and are separate to the string value that becomes number because of coercion 


//truthy and false values//

//equality operators//

// const numNeighbours = prompt (`How many neighbour countries does your country have?`);

    // const numNeighbours = Number (prompt (`How many neighbour countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log (`Only 1 border`)
// } else if (numNeighbours > 1) {
//     console.log (`More than 1 border`)
// } else {
//     console.log (`No borders`)
// } 

//logical operators//

if (myLanguage === 'english' && population < 50 && isIsland) {
    console.log (`You should live in ${country}`) 
} else {
    console.log (`${country} does not meet your criteria`)
};


myLanguage = 'mandarin';

switch (myLanguage) {
    case 'chinese':
    case 'mandarin':
        console.log ('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log ('2nd place in number of native speakers');
        break;
    case 'english':
        console.log ('3rd place');
        break;
    case 'hindi':
        console.log ('Number 4');
        break;
      case 'arabic':
        console.log ('5th most spoken language');
        break;
   default:
        console.log ('Great language too!');  
}

// age >= 18 ? console.log (`I like to drink wine😎`) : console.log (`I like to drink wader`);

population > 33 ? console.log (`${country}' population is above average`) : console.log (`${country}' population is below average`);

//or

console.log(
    `${country}' population is ${population > 33 ? 'above' :
    'below'} average`,
  );
*/