'use strict';

/*
// ACTIVATING STRICT MODE
//  use at the beginning of the script - less accidental errors
// 1 - forbid to do certain things
// 2 - will create visible errors in certain situation

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log (`I can drive!`)

// const interface = 'Audio'; strict mode reserve word for future js versions
// const private = 123;
// const if = 42 because there's already an if statement in js


// FUNCTIONS
// a piece of code we cna reuse over and over again, like variable wth value - function can hold one or more complete likes of code
// - use descriptive function name
// allows us to reuse code
// DRY - Don't Repeat Yourself - functions for clean code


function logger () {
    console.log (`My name is Red`);  //function buddy lol - it''s BODY haha
}
// calling, running, or invoking the function using parenthesis
logger ();
logger ();
logger ();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}

const appleJuice = fruitProcessor (5, 0);
console.log (appleJuice); 

const appleOrangeJuice = fruitProcessor (2, 4);
console.log (appleOrangeJuice);


// FUNCTION DECLARATION AND EXPRESSIONS

// a FUNCTION is a value, we can store in a variable.


// function declaration
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1 (1991);
console.log (age1);

// function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2 (1991)
console.log (age2);

// ARROW FUNCTIONS

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3 (1991)
console.log (age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = (65 - age);
    return `${firstName} retires in ${retirement}`
    // return retirement;
}

console.log ((yearsUntilRetirement) (1991, 'Red'));
console.log ((yearsUntilRetirement) (1980, 'Jonas'));

// functions calling other funtions

function cutPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutPieces (apples);
    const orangePieces = cutPieces (oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice; 
}

console.log (fruitProcessor (2, 3));


// FUNCTION REVIEW


const calcAge = function (birthYear) {
return 2037 - birthYear;
}

// below could also be? 

const yearsUntilRetirement = function (birthYear, firstName)  {
    const age = calcAge (birthYear);
    const retirement = (65 - age);

    if (retirement > 0) {
        console.log (`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log (`${firstName} has already retired`);
        return -1;
    }

}

console.log (yearsUntilRetirement (1991, 'Red'));
console.log (yearsUntilRetirement (1950, 'Mike'));


ARRAYS
big containers where we can throw variables



// const friend1 = `Michael`;
// const friend2 = `Steve`;  too many variables

const friends =  ['Michael', 'Steven', 'Peter']; // literal syntax
console.log (friends);

const year= new Array (1991, 1984, 2008, 2020);

console.log (friends [0]); //arrays are zero based - 0 1 2 3 4...

console.log (friends.length); //property - not zero based
console.log (friends [friends.length - 1]); //for the last element // we can put expression inside the array

friends [2] = 'Jay';
console.log (friends);  // an array is not a primitive vaue so we can mutate the const
// friends = ['bob', 'alice'] wont work

const firtName = `Red`;
const red = [`firstName`, `Tarantino`, 2037 - 1993, `programmer`, friends];
console.log (red);
console.log (red.length);

//exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
    }

const years = [1990, 1967, 2002, 2010, 2018];

// calcAge (years);  //won't work because years is array it doesnt know what to do
// console.log (calcAge (years));

const age1 = calcAge (years [0]);
const age2 = calcAge (years [1]);
const age3 = calcAge (years [years.length-1]);
console.log (age1, age2, age3);

// const ages = [calcAge (years [0]), calcAge (years [1]), calcAge (years [years.length-1] ) ]; 
const ages = [age1, age2, age3];
console.log (ages);


//basic array operations (methods)//

const friends =  ['Michael', 'Steven', 'Peter'];
friends.push (`Jay`);
// const newLength = friends.push (`Jay`); // push is a function (method) for adding elements
console.log (friends);
// console.log (newLength);

friends.unshift (`John`); //unshift adds 1 in the beginning
console.log (friends);

//remove elements
friends.pop (); //last element - removes 'Jay'
const popped = friends.pop (); //removes 'Peter'
console.log (popped); //logs "Peter" in the log
console.log (friends); //shows array

friends.shift (); // remove 1 at the beginning
console.log (friends)

console.log (friends.indexOf (`Steven`)); //pass of what element number
console.log (friends.indexOf (`Bruh`)); // hehe not there so -1 on log

console.log (friends.includes (`Steven`)); // includes shows true or false
console.log (friends.includes (`Bobbbyy`));

friends.push (23); 
console.log (friends.includes ('23')); // false cause number then string

console.log (friends);
console.log (friends.includes (23)); // will be true

//conditionals

// if (friends.includes (`Peter`)) {
//     console.log (`You have a friend called Peter`); //nothing happens in the log
// } 

if (friends.includes (`Steven`)) {
    console.log (`You have a friend called Steven`);
}  //it shows `You have a friend called Steven` in the log


//objects allows us to NAME or define key value pairs.
// [] square for arrays, {} curly for objects

// object literal syntax - for grouping different variables that belongs together - object, order values doesnt matter

const red = {
    firstName: `Red`,
    lastName: `Tarantino`,
    age: 2022 - 1993,
    job: `programmer`,
    friends:  [`Gian`, `James`, `Ken`]
};

//DOT VS BRACKET NOTATION

const red = {
    firstName: `Red`,
    lastName: `Tarantino`,
    age: 2022 - 1993,
    job: `programmer`,
    friends:  [`Gian`, `James`, `Ken`]
};
console.log (red);

console.log (red.lastName);
console.log (red [`lastName`]);

const nameKey = `Name`;
console.log (red [`first` + nameKey]);
console.log (red [`last` + nameKey]);

// console.log (red. `last` + nameKey]);)  would not work,we need real property name
// when to use BRACKET? example:

const interestedIn = prompt (`What do you want to know about Red? Choose between firstName, lastName, age, job, and friends`);

// console.log (red [interestedIn]);

if  (red [interestedIn]) {
    console.log (red [interestedIn]);
} else {
    console.log (`info not available. Choose between firstName, lastName, age, job, and friends`);
}

//adding new properties
red.location = `Pilipinas`; // can be    red [`Pilipinas`];
red [`twitter`] = `@redify`; // can be  red.twitter = `@redify`;
console.log (red);

// Challenge

// "Jonas has 3 friends, and his best friend is called Gian"

console.log (`${red.firstName} has ${red.friends.length} friends, and his best friend is called ${red.friends [0]}`);

// dot and bracket are operators. - this works cause of operator precedence
*/