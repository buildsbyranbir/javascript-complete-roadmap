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


// ---------- Global Scope ----------

let username = "Ranbir";

function showUser() {
    console.log(username);
}

showUser();
console.log(username);



// ---------- Function Scope ----------

function testFunction() {
    var number = 100;
    console.log(number);
}

testFunction();

// console.log(number); 



// ---------- Block Scope (let) ----------

if (true) {
    let city = "Dhaka";
    console.log(city);
}

// console.log(city); 



// ---------- Block Scope (const) ----------

if (true) {
    const language = "JavaScript";
    console.log(language);
}

// console.log(language); 



// ---------- var is NOT Block Scope ----------

if (true) {
    var x = 500;
}

console.log(x); // 500



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