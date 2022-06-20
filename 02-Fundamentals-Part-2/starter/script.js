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



// FUNCTIONS FROM YOUTUBE https://www.youtube.com/watch?v=xUI5Tsl2JpY&t=2207s
// function declaration
// function greet () {
//     console.log (`hello there`);
// }
// console log will not show anything, we have to CALL the function, which is to use GREET in this case\
// greet ();

//function expression

// const bark = function () {
//     console.log (`Arf arf`)
// };

// bark ();

// const speak = function () {
//     console.log (`good day`);
// };  //use semicolon at the end if its an expression

// speak ();

// because of hoisting, function declaration can be called above the function// func expression cannot - use expression to declare something first

//arguments and parameters

const speak = function (name = `beautiful person`, time = `day`) {   // if we call the SPEAK below without any value, LUIGI and NIGHT will come out by default.
    console.log (`good ${time}! ${name}`);  // 'name' is parameter
}; 

speak (); //would not work on console.log (name); - `mario` here is an argument

//returning values

const calcArea = function (radius) {
    const area = 3.14 * radius **2;  //we dont wanna log this cause we cant do anything later, we must return it for it to be more useful.
    return area; 
};

//or clean up

const calcArea = function (radius) {
    return 3.14 * radius **2;     (if there are more variables + computations we cannot just return directly, see example CONST BILL***)
};


//arrow function

// const calcArea = (radius) => {   //1 parameter i can remove the parenthesis
//     return 3.14 * radius **2; 
// };

// single line      
// const calcArea = radius =>  3.14 * radius **2;

//when we return a value then we want to store a value to a new variable
const area = calcArea (5); 
console.log (area);

// examples - expression to arrow

const greet = function () {
    return `hello world`;
};

const greet = () => `hello world`;
const result = greet ();  // put the function in a variable because we 'return' a value
console.log (result);


const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

//to  function arrow

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

console.log (bill ([10, 15, 30], 0.2));


// FUNCTIONS

const calcAge1 = function (birthYear) {
    return 2022 - birthYear;
};

const age1 = calcAge1(1993); //the const function is the answer to the function body, then we assign that answer to a new variable.
console.log (age1);

const calcAge2 = function (birthYear) { 
    return 2032 - birthYear;
};  
//the const function is the answer to the function body, then we assign that answer to a new variable.

const age2 = calcAge2 (1991)
console.log (age2);


//function arrow anotha example
const name = `red`;

const greet = () => `hello`;

let resultOne = greet ();
console.log (resultOne);


// METHODS - we using DOT notation - associated with object or data type.

const name = `red`;

const resultTwo = name.toUpperCase ();
console.log (resultTwo);


//CALLBACK FUNCTION - function calling functions

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc (value);
};

// myFunc (function (value) {
//     console.log (value);
// }); to arrow

myFunc (value => {
    console.log (value);
});

// foreach method - iterate over an array

let people = [`mario`, `luigi`, `ryu`, `shaun`, `chun-li`];

// people.forEach (function(person) {
//     console.log (person);
// });

const logPerson = (person, index) => {
        console.log (`${index}, Hello ${person}`);
    };

//to arrow function
people.forEach (logPerson);

// FUNCTIONS FROM YOUTUBE https://www.youtube.com/watch?v=xUI5Tsl2JpY&t=2207s

// OBJECT METHODS

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,


    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

//     calcAge: function () {
//         console.log (this);
//         return 2037 - this.birthYear;
//     }
// };

// console.log (jonas.calcAge());

// console.log (jonas.calcAge (1991));

//another way - if we need to call age multiple times

calcAge: function () {
   this.age = 2037 - this.birthYear;
   return this.age;
},

getSummary: function () {
    return `${this.firstName} is a ${this.calcAge ()} year old 
    ${jonas.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }   
};

console.log (jonas.calcAge ());
console.log (jonas.age);
console.log (jonas.age);


// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
console.log (jonas.getSummary ());


//The for loop - allows us to automateb repetitive tasks

// console.log (`Lifting weights repetition 1`);
// console.log (`Lifting weights repetition 2`);
// console.log (`Lifting weights repetition 3`);
// console.log (`Lifting weights repetition 4`);
// console.log (`Lifting weights repetition 5`);

// for loop keeps running while condition is true 
//below ... rep ++ same as` rep = rep + 1`
// below - starts at 1, ends at 10 or less , then how many number per reps
for (let rep = 1 ; rep <= 10 ; rep++) {
    console.log (`Lifting weights repetition ${rep}`);
}


// looping arrays, breaking, and continuing


const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];
//arrays use []
const types = [];

//without for loops
// console.log (jonasArray [0])
// console.log (jonasArray [1])
// console.log (jonasArray [2])
// ...4 Jonasarray 5 does not exist

// START WITH ZERO BECAUSE THIS IS AN ARRAY
for (let i = 0 ; i < jonasArray.length  ;  i++ ) {
    console.log (jonasArray [i], typeof jonasArray [i]);

    // filling type of array
    // types [i] = typeof jonasArray [i];
    types.push (typeof jonasArray [i]) // same as above
}

console.log (types);

//create a new array with types of variables `type of `above


//task: calculate ages for these birthyear and store to new array

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length ; i++) {
    ages.push (2037 - years [i]);
}

console.log (ages);

// cotinue to current iteration and break statement -break whole loop
//continue
console.log (`-----ONLY STRINGS------`)
for (let i = 0 ; i < jonasArray.length  ;  i++ ) {
    if (typeof jonasArray [i] !== `string`) continue; //log strings only
    console.log (jonasArray [i], typeof jonasArray [i]);
}

//break 
console.log (`-----BREAK TILL NUMBER------`)
for (let i = 0 ; i < jonasArray.length  ;  i++ ) {
    if (typeof jonasArray [i] === `number`) break;
    console.log (jonasArray [i], typeof jonasArray [i]);
}

// LOOPING BACKWARDS AND LOOPS IN LOOPS

const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];

// 0, 1...4
// to 4, 3 ,...0

for (let i = jonas.length - 1;  i >= 0 ; i--) {
    console.log (jonas [i]);
}

// loop inside a loop
for (let exercise = 1 ; exercise < 4 ; exercise++) {
    console.log (`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6 ; rep++ )
    console.log (`Exercise ${exercise}: Lifting weight repetition ${rep} `);
}


//the while loop

// for (let rep = 1 ; rep <= 10 ; rep++) {
//     console.log (`Lifting weights repetition ${rep}`);
// }


// let rep = 1;
// while (rep <= 10) {
//     console.log (`WHILE: Lifting weights repetition ${rep}`);
//     rep++;   // without rep++ this will keep repeating forever - super dangerous and expensive
// }; 

let dice = Math.trunc (Math.random () * 6) + 1;

while (dice !== 6) {
    console.log (`You rolled a ${dice}`);
    dice = Math.trunc (Math.random () * 6) + 1;
     // without this. this is an infinite loop, and it would crash the computer - happyn to me 5 fken times
    if (dice === 6) console.log (`You got a 6`);
};

// if we got a 6 immediately, it wont apear.   If no way of knowing how many times loop will run, we can use a WHILE LOOP. If we know number of loop, FOR LOOP is more useful.
*/



