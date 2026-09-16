
// ==================================================
// JavaScript typeof Operator
// Full Stack Web Developer Guide
// ==================================================

// typeof diye kono variable ba value er
// data type check kora hoy.
//
// Syntax:
// typeof value
//
// typeof operator sobsomoy ekta string return kore.
// Example:
// typeof 100 => "number"


// ==================================================
// 1. NUMBER
// ==================================================

// Number er moddhe integer, decimal,
// negative number, NaN ebong Infinity thakte pare.
//
// JavaScript e integer ebong float er jonno
// alada data type nei.
// Duita-i Number.

let age = 22;

console.log(typeof age); // "number"


// Integer

let num1 = 100;

console.log(typeof num1); // "number"


// Float

let num2 = 99.99;

console.log(typeof num2); // "number"


// NaN:
// Invalid mathematical operation er result
// NaN hote pare.
//
// NaN er full form Not a Number.
// Kintu typeof NaN holo "number".

let result = 10 / "abc";

console.log(result);        // NaN
console.log(typeof result); // "number"


// Infinity:
// Zero diye positive number divide korle
// Infinity return korte pare.
//
// Infinity-o Number type.

let inf = 10 / 0;

console.log(inf);        // Infinity
console.log(typeof inf); // "number"


// ==================================================
// 2. STRING
// ==================================================

// String holo text data.
// Single quote, double quote ba backtick diye
// string lekha jay.
//
// Empty string "" o String type.

let name = "Ranbir";

console.log(typeof name); // "string"


let city = "Dhaka";

console.log(typeof city); // "string"


let emptyString = "";

console.log(typeof emptyString); // "string"


// ==================================================
// 3. BOOLEAN
// ==================================================

// Boolean er sudhu 2 ta value ache:
//
// true
// false
//
// Login status, admin status, condition
// check korar somoy Boolean use hoy.

let isStudent = true;

console.log(typeof isStudent); // "boolean"


let isLoggedIn = false;

console.log(typeof isLoggedIn); // "boolean"


// ==================================================
// 4. UNDEFINED
// ==================================================

// Variable declare kora hoyeche,
// kintu kono value assign kora hoy nai.
//
// Tai variable er value undefined.

let address;

console.log(address);        // undefined
console.log(typeof address); // "undefined"


// ==================================================
// 5. NULL
// ==================================================

// Null mane intentionally empty value.
//
// Developer nijer icchay kono variable er value
// empty rakhar jonno null use korte pare.
//
// Important:
// typeof null holo "object".
//
// Eta JavaScript er purono behavior.
// Null asole Primitive Data Type.

let user = null;

console.log(user);        // null
console.log(typeof user); // "object"


// ==================================================
// 6. BIGINT
// ==================================================

// BigInt khub boro integer number handle korte
// use hoy.
//
// BigInt value er seshe n dite hoy.
//
// Example:
// 100n

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // "bigint"


// ==================================================
// 7. SYMBOL
// ==================================================

// Symbol holo unique Primitive Data Type.
//
// Same description diye Symbol banaleo
// prottek Symbol alada value hoy.
//
// Object er unique property key create korte
// Symbol use kora jay.

let id = Symbol("id");

console.log(id);
console.log(typeof id); // "symbol"


// ==================================================
// 8. OBJECT
// ==================================================

// Object holo key-value pair er collection.
//
// Object er typeof holo "object".

let person = {
  name: "Ranbir",
  age: 22
};

console.log(typeof person); // "object"


// Empty Object

let obj = {};

console.log(typeof obj); // "object"


// ==================================================
// 9. ARRAY
// ==================================================

// Array holo multiple value store korar
// data structure.
//
// Important:
// Array er typeof holo "object".
//
// Tai sudhu typeof diye array ar object
// alada kora jay na.
//
// Array check korar best way:
// Array.isArray()

let fruits = ["Apple", "Mango", "Orange"];

console.log(typeof fruits); // "object"

console.log(Array.isArray(fruits)); // true


// Empty Array

let arr = [];

console.log(typeof arr); // "object"


// ==================================================
// 10. FUNCTION
// ==================================================

// Function holo reusable code block.
//
// typeof function holo "function".
//
// Eta Object er moto reference type,
// kintu typeof e special result dey.

function greet() {
  return "Hello";
}

console.log(typeof greet); // "function"


// Arrow Function

const sum = (a, b) => a + b;

console.log(typeof sum); // "function"


// Function Expression

let fn = function () {};

console.log(typeof fn); // "function"


// ==================================================
// 11. DATE OBJECT
// ==================================================

// Date object date ebong time handle korte
// use hoy.
//
// Date er typeof holo "object".

let today = new Date();

console.log(today);
console.log(typeof today); // "object"


// ==================================================
// 12. REGEXP
// ==================================================

// RegExp mane Regular Expression.
//
// String er moddhe pattern search,
// match ba validation korte use hoy.
//
// RegExp er typeof holo "object".

let pattern = /abc/;

console.log(typeof pattern); // "object"


// ==================================================
// 13. MAP AND SET
// ==================================================

// Map:
// Key-value pair store kore.
//
// Set:
// Unique value store kore.
//
// Duita-i object type er.
// Tai typeof holo "object".

let map = new Map();

console.log(typeof map); // "object"


let set = new Set();

console.log(typeof set); // "object"


// ==================================================
// 14. PROMISE
// ==================================================

// Promise asynchronous operation er future result
// represent kore.
//
// Example:
// API call er result handle kora.
//
// Promise er typeof holo "object".

let promise = Promise.resolve("Success");

console.log(typeof promise); // "object"


// ==================================================
// 15. CLASS
// ==================================================

// Class diye object create korar blueprint
// banano hoy.
//
// JavaScript e class technically function er
// moto typeof result dey.
//
// Tai typeof class holo "function".

class Student {}

console.log(typeof Student); // "function"


// ==================================================
// 16. SPECIAL OBJECTS
// ==================================================

// Math object:
// Mathematical constants ebong methods er jonno use hoy.

console.log(typeof Math); // "object"


// JSON object:
// JSON data parse ebong stringify korte use hoy.

console.log(typeof JSON); // "object"


// Error object:
// Error information store korte use hoy.

let error = new Error("Something went wrong");

console.log(typeof error); // "object"


// ==================================================
// 17. CONSTRUCTOR FUNCTION
// ==================================================

// Constructor function diye new keyword use kore
// object create kora jay.
//
// Constructor function nijer typeof e "function".
//
// new diye create kora object er typeof "object".

function Car(name) {
  this.name = name;
}

console.log(typeof Car); // "function"


let car = new Car("BMW");

console.log(typeof car); // "object"


// ==================================================
// 18. SPECIAL CASES
// ==================================================

// Ei value gula interview ebong project e
// mone rakha important.


// NaN

console.log(typeof NaN); // "number"


// null

console.log(typeof null); // "object"


// Infinity

console.log(typeof Infinity); // "number"


// Array

console.log(typeof []); // "object"


// Function

console.log(typeof function () {}); // "function"


// Undefined

console.log(typeof undefined); // "undefined"


// ==================================================
// 19. typeof WITH UNDECLARED VARIABLE
// ==================================================

// typeof er ekta special behavior ache.
//
// Kono variable declare na kore typeof use korle
// normally ReferenceError na diye
// "undefined" return kore.
//
// Eta variable existence check korte useful hote pare.
//
// Important:
// Variable directly access korle error hobe.

console.log(typeof unknownVariable); // "undefined"


// ==================================================
// 20. TYPE CHECKING IN REAL PROJECT
// ==================================================

// Real project e API theke data ashar por
// data type check kora useful.
//
// Example:
// User er age Number kina check kora.

let userAge = 22;

if (typeof userAge === "number") {
  console.log("Age is a number");
}


// String check

let username = "Ranbir";

if (typeof username === "string") {
  console.log("Username is a string");
}


// Boolean check

let verified = true;

if (typeof verified === "boolean") {
  console.log("Verified is a boolean");
}


// Array check

let skills = ["HTML", "CSS", "JavaScript"];

if (Array.isArray(skills)) {
  console.log("Skills is an array");
}


// ==================================================
// IMPORTANT REVISION
// ==================================================

// Primitive Data Types:
//
// Number    => "number"
// String    => "string"
// Boolean   => "boolean"
// Undefined => "undefined"
// Null      => "object"  (special behavior)
// BigInt    => "bigint"
// Symbol    => "symbol"
//
// Reference Types:
//
// Object    => "object"
// Array     => "object"
// Function  => "function"
// Date      => "object"
// RegExp    => "object"
// Map       => "object"
// Set       => "object"
// Promise   => "object"
// Class     => "function"


// ==================================================
// FINAL PRACTICE
// ==================================================

console.log(typeof 100);         // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
console.log(typeof 100n);        // "bigint"
console.log(typeof Symbol());    // "symbol"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function () {}); // "function"