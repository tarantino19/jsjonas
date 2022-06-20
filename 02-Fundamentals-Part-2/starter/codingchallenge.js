'use strict';
/*

//activating strict mode//


//  function calcAverage = (a + b +c / 3) {
//     const scoreDolphins = (calcAverage (44, 23,71));
//     const scoreKoalas = (calcAverage (65, 54, 29));
// }

const calcAverage = (a, b, c) =>  (a + b+ c) / 3 
    console.log (calcAverage);

const scoreDolphins = (calcAverage (85, 54, 41));
const scoreKoalas = (calcAverage (23, 34, 27));

console.log (scoreDolphins, scoreKoalas);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas ) {
        console.log (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`); 
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log (`Koalas win ( ${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log (`No team wins`);
    }
}

checkWinner (scoreDolphins, scoreKoalas);

     //review this

    //  if (`content`) {
    //     console.log (`log`);
    //  } else if (content) {
    //     console.log (`log`);
    //  }

//my answer before i quit
// const calcTip = function (bill) {
//     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//    
// }

// const bills = [125, 555, 44];
// console.log (bills);

// const tips = [calcTip (bills(0)), calcTip (bills (1)) , calcTip (bills (2))]; //shoudlve been (bills [0]) NOT (0)
// console.log (tips);

//the answer in expression

//or arrow
// const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip (bills[0]), calcTip (bills [1]) , calcTip (bills [2])];
const total = [bills [0] + tips [0], bills [1] + tips [1], bills [2] + tips [2] ];

console.log (bills, tips, total);

// coding challenge 3 object, method.

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function ()  {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
 // I'm almost right the first time - just needed to put one calcbmi formula below each const and then use this.mass instead of mark.mass

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function ()  {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI ();
console.log (mark.bmi);

john.calcBMI ();
console.log (john.bmi);

if (mark.bmi > john.bmi) {
    console.log (`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}) `);
} else if (john.bmi > mark.bmi) {
    console.log (`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}) `);
};

//CODING CHALLENGE #4

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
   return bill >= 50  &&  bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i= 0 ; i < bills.length ; i++) {
    let tip = calcTip (bills [i]);
    tips.push (tip);
    totals.push (tip + bills [i]);
}

console.log (bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        // sum = sum + arr [i];
        sum += arr[i];
    }
    return sum / arr.length;
};
calcAverage ([2, 3, 6]);

console.log (calcAverage([2,3,7]));
console.log (calcAverage(totals));
console.log (calcAverage(tips));

*/