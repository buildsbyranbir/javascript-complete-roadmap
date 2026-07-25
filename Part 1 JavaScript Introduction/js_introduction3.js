/****************************************************************
            ECMAScript (ES6+)
****************************************************************/

/*
ECMAScript (ES) holo JavaScript er official standard.

JavaScript language ke update korar rule ba specification ke
ECMAScript bola hoy.

Sohoj vabe bolle:

ECMAScript = Rules
JavaScript = Language

JavaScript ei rules follow kore kaj kore.
*/

// ======================================================
// ECMAScript Version
// ======================================================

/*
ES5  -> 2009

ES6 (ES2015) -> 2015 ⭐ (Most Important)

ES7 -> 2016
ES8 -> 2017
ES9 -> 2018
ES10 -> 2019
ES11 -> 2020
ES12 -> 2021
ES13 -> 2022
ES14 -> 2023
ES15 -> 2024
*/

// ======================================================
// ES6 Keno Ashlo?
// ======================================================

/*
ES5 e onek limitation chilo.

Tai JavaScript ke aro easy,
modern,
powerful
bananor jonno ES6 ana hoy.

ES6 er por JavaScript onek improve hoyeche.
*/

// ======================================================
// ES5 Example
// ======================================================

// ES5 te var use kora hoto

var name = "Ranbir";

console.log(name);

// ======================================================
// ES6 Example
// ======================================================

// ES6 e let & const use hoy

let city = "Dhaka";
const country = "Bangladesh";

console.log(city);
console.log(country);

// ======================================================
// ES6 Important Features
// ======================================================

/*
✔ let
✔ const
✔ Arrow Function
✔ Template Literal
✔ Destructuring
✔ Spread Operator (...)
✔ Rest Operator (...)
✔ Default Parameter
✔ Modules (import/export)
✔ Classes
✔ Promises
*/

// ======================================================
// Example : Template Literal
// ======================================================

let user = "Ranbir";

console.log(`Welcome ${user}`);

// Output:
// Welcome Ranbir

// ======================================================
// Example : Arrow Function
// ======================================================

const greet = () => {
  console.log("Hello JavaScript");
};

greet();

// ======================================================
// Example : Default Parameter
// ======================================================

function sum(a, b = 0) {
  console.log(a + b);
}

sum(10);
sum(10, 20);

// ======================================================
// Example : Spread Operator
// ======================================================

const numbers = [10, 20, 30];

console.log(...numbers);

// Output:
// 10 20 30

// ======================================================
// Example : Destructuring
// ======================================================

const person = {
  name: "Ranbir",
  age: 20,
};

const { name, age } = person;

console.log(name);
console.log(age);

// ======================================================
// ES6 Benefits
// ======================================================

/*
✔ Code choto hoy
✔ Code readable hoy
✔ Performance better hoy
✔ React e beshirvag feature use hoy
✔ Modern JavaScript lekha jay
*/

// ======================================================
// Interview Note
// ======================================================

/*
Question:
ECMAScript ki?

Answer:
ECMAScript holo JavaScript er official standard ba
specification, ja JavaScript language ke update
ebong maintain kore.

Question:
ES6 keno important?

Answer:
ES6 JavaScript e onek notun feature eneche,
jemon let, const, Arrow Function,
Template Literal, Destructuring, Spread,
Modules ityadi.
*/

// ======================================================
// Summary
// ======================================================

/*
✔ ECMAScript = JavaScript er Standard

✔ ES6 = Most Important Version

✔ ES6 Features:
- let
- const
- Arrow Function
- Template Literal
- Destructuring
- Spread
- Rest
- Modules
- Classes
- Promises

👉 React, Node.js, Next.js shikhte ES6 bhalo vabe jana
onek important.
*/