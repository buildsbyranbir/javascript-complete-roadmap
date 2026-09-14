/***************************************************************
            var, let, const (Complete Guide for MERN)
****************************************************************/

/*
=====================================================
1. var, let, const কী?
=====================================================

var   -> ES5 (Old Way)
let   -> ES6 (Value Change Kora Jay)
const -> ES6 (Value Change Kora Jay Na)
*/

var oldName = "Ranbir";
let age = 22;
const country = "Bangladesh";

console.log(oldName);
console.log(age);
console.log(country);



/*
=====================================================
2. Reassign
=====================================================
*/

var a = 10;
a = 20;

let b = 30;
b = 40;

const c = 50;
// c = 60; //  Error

console.log(a);
console.log(b);
console.log(c);



/*
=====================================================
3. Redeclare
=====================================================
*/

var name = "Ranbir";
var name = "Rahim"; //  Allowed

console.log(name);

// let city = "Dhaka";
// let city = "Rangpur"; //  Error

// const countryName = "BD";
// const countryName = "USA"; //  Error



/*
=====================================================
4. Scope
=====================================================
*/

// =====================================================
// 1. Global Scope
// =====================================================

// Function-er baire username variable declare kora hoyeche.
// Tai username Global Scope-e ache.

let username = "Ranbir";

// showUser name ekta function create kora holo.

function showUser() {

    // Function-er vitore Global Scope-er
    // username variable access kora holo.

    console.log(username);

    // Output: Ranbir

}

// Function call kora holo.
// Ekhon showUser function-er vitore thaka code run hobe.

showUser();

// Function-er baireo username access kora jay,
// karon username Global Scope-e declare kora hoyeche.

console.log(username);

// Output: Ranbir



// =====================================================
// 2. Function Scope
// =====================================================

// Function-er vitore var diye variable declare korle
// seta oi function-er Function Scope-e thake.

function testFunction() {

    // number variable-ta function-er vitore declare kora holo.

    var number = 100;

    // Function-er vitore number access kora jacche.

    console.log(number);

    // Output: 100

}

// Function call kora holo.
// Ekhon testFunction-er vitore code run hobe.

testFunction();

// Function-er baire number access kora jabe na,
// karon number function-er vitore declare kora hoyeche.

// console.log(number);

// Output: ReferenceError
// number is not defined



// =====================================================
// 3. Block Scope (let)
// =====================================================

// Block holo { } er vitore thaka code.
// if, for, while er block thakte pare.

// if (true) mane condition true,
// tai block-er vitore thaka code run hobe.

if (true) {

    // city variable-ta let diye declare kora holo.

    // let Block Scope follow kore.
    // Tai city shudhu ei { } block-er vitore access kora jabe.

    let city = "Dhaka";

    // Block-er vitore city access kora jacche.

    console.log(city);

    // Output: Dhaka

}

// Block-er baire city access kora jabe na,
// karon city block-er vitore declare kora hoyeche.

// console.log(city);

// Output: ReferenceError
// city is not defined



// =====================================================
// 4. Block Scope (const)
// =====================================================

// if condition true hole block-er code run hobe.

if (true) {

    // language variable-ta const diye declare kora holo.

    // const-o Block Scope follow kore.
    // Tai language shudhu ei block-er vitore access kora jabe.

    const language = "JavaScript";

    // Block-er vitore language access kora jacche.

    console.log(language);

    // Output: JavaScript

}

// Block-er baire language access kora jabe na,
// karon language block-er vitore declare kora hoyeche.

// console.log(language);

// Output: ReferenceError
// language is not defined



// =====================================================
// 5. var is NOT Block Scope
// =====================================================

// if condition true hole block-er code run hobe.

if (true) {

    // x variable-ta var diye declare kora holo.

    // Important:
    // var Block Scope follow kore na.
    // var Function Scope follow kore.

    var x = 500;

}

// Ekhon block-er baire x access kora jacche,
// karon var block-er moddhe atke thake na.

console.log(x);

// Output: 500

/*
=====================================================
5. Hoisting
=====================================================
*/

console.log(testVar); // undefined

var testVar = 100;


// console.log(testLet); //  ReferenceError
let testLet = 200;


// console.log(testConst); //  ReferenceError
const testConst = 300;



/*
=====================================================
6. Temporal Dead Zone (TDZ)
=====================================================

let & const declaration er age access kora jay na.
*/

// console.log(score);

let score = 90;



/*
=====================================================
7. const Object
=====================================================
*/

const person = {
    name: "Ranbir",
    age: 22
};

person.age = 23;
person.city = "Dinajpur";

console.log(person);



/*
=====================================================
8. const Array
=====================================================
*/

const numbers = [10,20,30];

numbers.push(40);
numbers.push(50);

console.log(numbers);

// numbers = [1,2,3]; 



/*
=====================================================
9. Loop (let)
=====================================================
*/

for(let i=1;i<=5;i++){
    console.log(i);
}

// console.log(i); 



/*
=====================================================
10. Loop (var)
=====================================================
*/

for(var j=1;j<=5;j++){
    console.log(j);
}

console.log(j); // 6



/*
=====================================================
11. Closure Problem (var)
=====================================================
*/

for(var i=1;i<=3;i++){

    setTimeout(function(){

        console.log(i);

    },1000);

}

// Output
// 4
// 4
// 4



/*
=====================================================
12. Closure Solution (let)
=====================================================
*/

for(let i=1;i<=3;i++){

    setTimeout(function(){

        console.log(i);

    },1000);

}

// Output
// 1
// 2
// 3



/*
=====================================================
13. Function Example
=====================================================
*/

function calculatePrice(){

    let price = 100;

    const vat = 15;

    return price + vat;

}

console.log(calculatePrice());



/*
=====================================================
14. API Data Example
=====================================================
*/

const users = [

    {
        id:1,
        name:"Rahim"
    },

    {
        id:2,
        name:"Karim"
    }

];

users.push({

    id:3,
    name:"Ranbir"

});

console.log(users);



/*
=====================================================
15. React Example
=====================================================
*/

// const App = () => {

//     const name = "Ranbir";

//     let age = 22;
//     age++;

//     return (
//         <div>
//             <h1>{name}</h1>
//             <h2>{age}</h2>
//         </div>
//     );

// };



/*
=====================================================
16. Node.js Example
=====================================================
*/

// const express = require("express");

// const app = express();

// let port = 5000;

// app.listen(port, () => {
//     console.log(`Server Running on ${port}`);
// });



/*
=====================================================
17. Best Practice
=====================================================
*/

// Always use const first

const company = "Google";

// Use let if value changes

let count = 0;

count++;

console.log(count);

//  Avoid var

var oldVariable = "Old Way";



/*
=====================================================
18. Interview Example
=====================================================
*/

const student = {

    name:"Ranbir",
    semester:5

};

student.semester = 6;

console.log(student);

// student = {}; 



/*
=====================================================
19. Summary
=====================================================

                var        let        const
-------------------------------------------------
Scope           Function   Block      Block
Redeclare       ✅         ❌         ❌
Reassign        ✅         ✅         ❌
Hoisting        undefined  TDZ        TDZ
Block Scope     ❌         ✅         ✅
Modern JS       ❌         ✅         ✅
Use Today       Avoid      Good       Best

=====================================================

Real Project Rule

✔ const -> Default use korbe
✔ let   -> Value change hole use korbe
❌ var  -> Modern React, Node, MERN e avoid korbe

=====================================================
*/