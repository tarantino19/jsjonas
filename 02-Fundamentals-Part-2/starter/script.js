'use strict';

/*
// ACTIVATING STRICT MODE
-  use at the beginning of the script - less accidental errors
1 - forbid to do certain things
2 - will create visible errors in certain situation

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log (`I can drive!`)

const interface = 'Audio'; strict mode reserve word for future js versions
const private = 123;
const if = 42 because there's already an if statement in js


FUNCTIONS
a piece of code we cna reuse over and over again, like variable wth value - function can hold one or more complete likes of code
- use descriptive function name
allows us to reuse code
DRY - Don't Repeat Yourself - functions for clean code


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


FUNCTION DECLARATION AND EXPRESSIONS

a FUNCTION is a value, we can store in a variable.


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

ARROW FUNCTIONS

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

functions calling other funtions

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


FUNCTION REVIEW


const calcAge = function (birthYear) {
return 2037 - birthYear;
}

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


*/