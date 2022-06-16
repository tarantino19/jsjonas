//variables//
/*
let js = 'amazing';
console.log (2 + 2);

let firstName = 'Bobby';
console.log (firstName);

naming - use camelcase lowerUpperUpper - js standard
Syntax error - on the code - plus we can see what line on devtools. variables can only be $, letters numbers underscore.
reserve js keywords = new, function... change to $function, name is also reserve but it would work but rather not use this one. 
dont start with uppercase letter.
VARIABLES (store of value)should be descriptive, should be on read then others know what kind of value is that.

let myFirstJob = 'finance analyst';
let myCurrentJob = 'programmer';

console.log (myFirstJob);

//data types//
 - primitive data types - number, string, boolean, undefined,null,symbol 2015 , bigint larger integers)//
dynamic typing, matic value. value has type, not the variable. ex above, finance analyst has the data type, not the variable myFirstJob
variable no need for quotes, and if it's a string for console.log then use quotes

first time declare use LET, new value no need for declaration

let javaScriptIsFun = true;
console.log (javaScriptIsFun);

console.log (typeof true);
console.log (typeof javaScriptIsFun);
console.log (typeof 23);
console.log (typeof 'Bolilia');

javaScriptIsFun = 'YES!';
console.log (typeof javaScriptIsFun);

let year;
console.log (year);
console.log (typeof year);

year = 1991;
console.log (typeof year);

console.log (typeof null); /*bug or error. never naayos for legacy reasons*/

//let const var//

/*reassigning a variable, mutating.

 let age = 30;
 age = 31;

const birthYear = 1991; 
//birthYear = 1990;
//const job;  use const as default, best practice , use let when youre sure value needs to change. Avoid VAR, outdated but learn how it works for legacy system.

//basic operators// 

const now = 2037
const ageRed = now - 1993;
const ageSara = now - 1998;
console.log (ageRed, ageSara );

console.log (ageRed * 2, ageRed / 10, 2 ** 3)
//  2 ** 3 means to the power of 3 which means 2*2*2
// + to concatinate strings..math operators,, typeof operators, assignment operator, comparison operators to produce boolean values

const firstName = 'Red';
const lastName = 'Tarantino';

console.log (firstName + ' ' + lastName);

//asignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4;
x ++; // x = x + 1
x --; // x - 1
console.log (x);

//comparison operators

console.log (ageRed > ageSara); // true... >, <. >=, <=  /
console.log (ageSara >= 18); // true  ..we store these results in variables and not just into console in real life development.

const isFullAge = ageSara >= 18; //for direct result

console.log (now - 1993 > now - 1998); //JS knows how to compare these 2 parts 

//operator precedence//

const now = 2037
const ageRed = now - 1993;
const ageSara = now - 1998;
console.log (ageRed, ageSara );

console.log (now - 1993 > now - 1998);

let x, y;
x = y = 25 - 10 -5; // x = y = 10 (left to right)... then = is right to left... 10 = y, y = x
console.log (x, y);  

const averageAge = (ageRed + ageSara)/ 2;   // parenthesis takes precedence
console.log (ageRed, ageSara, averageAge);  

//Strings & Template Literals//

const firstName = 'Red';
const job = 'programmer';
const birthYear = 1991;
const year = 2037;

const red = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!' ; //spaces pain in the ass to do - concatination
console.log (red);

const redNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log (redNew); // both method works but its up to me what I like to use - this one is template literal - best practice for modernjs

console.log (`just a regular string`) // we can also use back ticks for any regular string

console.log ('string\n\
multiple \n\
lines')
//multiline strings before es6

console.log (`string
multiple
lines`)
// use backticks to create multi line strings - useful for html inside js as well  


// if else statements//
     // if () true -> {} will be executed

const age = 15;

if (age >= 18) { 
    console.log ('Sara can get drivers license 😍')
}  else {
    const yearsLeft = 18 - age;
    console.log (`Sara is too young, wait another ${yearsLeft} years`);
}  // if else control structure

const birthYear = 2010;
let century;
if (birthYear <= 2000) {
    century = '20th';
} else {
    century = '21st';
}
console.log (century); 


// need to assign undefined century fist because its outside code block - so do let century;  first then reassign century without declaration let 

// type conversion  - convert types, explicitly, and coercion behind the scenes

const inputYear = '1991';
console.log (Number (inputYear), inputYear);
console.log (Number (inputYear) + 18);  // result still 199118 - explicitly (conversion) 

console.log (Number ('Red')); //NaN not a number or invalid number
console.log (typeof NaN); //NaN not a number or invalid number but its still a NUMBER 

console.log (String (23), 23);

//type coercion js usually matically does in most situation

console.log ('I am ' + 23 + ' years old') //coercion to string

console.log ('23' - '10' + 3);  // coercion
console.log ('23' + 10 + 3);  //concatinate if plus from the start

console.log ('23' / '2'); //coercion

let n = '1' + 1 ; // 11
n = n - 1;  // n - 1 = 10
console.log (n);

console.log (2 + 4 + 4 + '5');  // 2+3+4 = 10  + 5 the string = 95
console.log (2 * 4 + 4 + '5'); 
console.log ((1 + 5 ) / 2 + '5'); //precedence for + with () then /



// truthy falsy values

// 5 falsy values : 0, ' ', undefined, null, NaN - when attempted to convert to boolean

console.log (Boolean (0));
console.log (Boolean (undefined));
console.log (Boolean ('Red'));
console.log (Boolean ({}));
console.log (Boolean (''));    //probably not gonna use in real life - mostly type coercion

const money = 0;
if (money) {
    console.log (`Don't spend it all :)`);
} else {
    console.log ('You should get a job');
}  //else got log becauase js try to coerce 0 into a boolean whihc is false

const money2 = 25;
if (money2) {
    console.log (`Don't spend it all :)`);
} else {
    console.log ('You should get a job');
}

let height = 0; //height undefined
if (height) {
    console.log (`Yay, height is defined`);
} else {
    console.log (`boohoo, height is undefined`);
}  

//equality operators//

const age = 18;  // 1 equal is an assignment 
if (age === 18) console.log ('You just became an adult (strict)');  // triple equal is strict equality operator / double equal does coercon triple does not do coercion
if (age == 18) console.log ('You just became an adult (loose)');  // loose equality operator - general rule: try to use strict quality operator ===

const favorite = Number (prompt (`What's your favorite numbr?`));
console.log (favorite);
console.log (typeof favorite);

if (favorite === 23) {  // '23' == 23  // will no ..but wiht NUMBER it willbe true
    console.log (`23 is a cool number`)
} else if (favorite === 7){
    console.log (`7 is also a cool number`)
} else if (favorite === 9) {
    console.log (`9 is also a good number`)
} else {
    console.log (`Number is not 23 or 7`)
};
 // try to use strcit operator === more , then just use data type converte

//operator for different  !===

if (favorite !== 23) {
    console.log (`Why not the 23?`);
}   

//boolean logic - true or false to solve complex problems - AND, OR, NOT operators - check pdf for review

//logical operator// boolean logic
const hasDriversLicense = true; // variable A
const hasGoodVision = true // variable B

console.log (hasDriversLicense && hasGoodVision);
console.log (hasDriversLicense || hasGoodVision);
console.log (!hasDriversLicense);

/* const shouldDrive = (hasDriversLicense && hasGoodVision);
if (shouldDrive ) {
    console.log (`Sara is able to drive`)
} else {
    console.log (`Someone else should drive`)
} 

// can also be

// if (hasDriversLicense && hasGoodVision) {
//     console.log (`Sara is able to drive`);
// } else  {
//     console.log (`Someone else should drive`);
// } 

const isTired = false; // variable C
console.log (hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision, !isTired) {
        console.log (`Sara is able to drive`);
    } else  {
        console.log (`Someone else should drive`);
     }  

//switch statement// 1 value to multiple options ...more for equality not for comparing stuff

// const day = 'tuesday';

// switch (day) {
//     case 'monday' : // day === 'monday'
//         console.log (`Plan my course structure`);
//         console.log (`Go to coding meetup`);
//         break;
//     case 'tuesday' :
//         console.log (`Prepare theory videos`);
//         break;
//     case 'wednesday' :
//     case 'thursday':
//         console.log (`Write code examples`);
//         break;
//     case 'friday':
//         console.log (`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday' :
//             console.log (`Enjoy the weekend off`);
//             break;
//     default:
//             console.log (`Not a valid day!`);
// }

//if else operator//


// const day = 'tuesday';

//     if (day === 'monday') {
//         console.log (`Plan my course structure`);
//         console.log (`Go to coding meetup`);
//     } else if (day === 'tuesday') {
//         console.log (`Prepare theory videos`);
//     } else if (day === 'wednesday' || day ===  'thursday') {
//         console.log (`Write code examples`);
//     } else if (day === 'friday') {
//         console.log (`Record videos`);
//     } else if (day === 'saturday' || day ===  'sunday') {
//         console.log (`Enjoy the weekend off`);
//     } else {
//         console.log (`Not a valid day!`);
//     }

//statements and expressions - piece of code that produces a value//
// expressions produce value, statement translates actions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger'; // const str = '23 is bigger'; statement ... '23 is bigger" is an expression
}

//template literal - we can only insert an express - not the whole statement
console.log (`I'm ${2037 - 1991} years old`) 

//conditional ternary operator - (conditional: if else, switch, conditional operator)//
// if else in 1 line - AN OPERATOR IS AN EXPRESSION - it always produces a value.


const age = 23;
// age >= 18 ? console.log (`I like to drink wine😎`) : console.log (`I like to drink wader`);

const drink = age >= 18 ? 'wine' : 'water';
console.log (drink);     // this is super useful but it's not a replacement for if else for bigger blocks of code


console.log (`I like to drink ${drink}`);
console.log (`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//templayte literal version




//the if else way

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }

// console.log (drink2);
*/

//es6 and versions//

