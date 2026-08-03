// =========================================
// JavaScript typeof Operator
// =========================================

// typeof diye kon variable er data type check kora hoy.

// -------------------------
// Number
// -------------------------
let age = 22;
console.log(typeof age); // "number"

// Integer
let num1 = 100;
console.log(typeof num1); // number

// Float
let num2 = 99.99;
console.log(typeof num2); // number

// NaN o number
let result = 10 / "abc";
console.log(result); // NaN
console.log(typeof result); // number

// Infinity o number
let inf = 10 / 0;
console.log(inf); // Infinity
console.log(typeof inf); // number



// -------------------------
// String
// -------------------------
let name = "Ranbir";
console.log(typeof name); // string

let city = 'Dhaka';
console.log(typeof city); // string

let emptyString = "";
console.log(typeof emptyString); // string



// -------------------------
// Boolean
// -------------------------
let isStudent = true;
console.log(typeof isStudent); // boolean

let isLoggedIn = false;
console.log(typeof isLoggedIn); // boolean



// -------------------------
// Undefined
// -------------------------
let address;
console.log(address); // undefined
console.log(typeof address); // undefined



// -------------------------
// Null
// -------------------------
let user = null;

console.log(user); // null
console.log(typeof user); // object

// Note:
// Eta JavaScript er purono bug.
// null er typeof object dekhay.



// -------------------------
// BigInt
// -------------------------
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint



// -------------------------
// Symbol
// -------------------------
let id = Symbol("id");

console.log(id);
console.log(typeof id); // symbol



// -------------------------
// Object
// -------------------------
let person = {
    name: "Ranbir",
    age: 22
};

console.log(typeof person); // object



// -------------------------
// Array
// -------------------------
let fruits = ["Apple", "Mango", "Orange"];

console.log(typeof fruits); // object

// Array check korar best way
console.log(Array.isArray(fruits)); // true



// -------------------------
// Function
// -------------------------
function greet() {
    return "Hello";
}

console.log(typeof greet); // function



// -------------------------
// Arrow Function
// -------------------------
const sum = (a, b) => a + b;

console.log(typeof sum); // function



// -------------------------
// Date
// -------------------------
let today = new Date();

console.log(today);
console.log(typeof today); // object



// -------------------------
// RegExp
// -------------------------
let pattern = /abc/;

console.log(typeof pattern); // object



// -------------------------
// Map
// -------------------------
let map = new Map();

console.log(typeof map); // object



// -------------------------
// Set
// -------------------------
let set = new Set();

console.log(typeof set); // object



// -------------------------
// WeakMap
// -------------------------
let weakMap = new WeakMap();

console.log(typeof weakMap); // object



// -------------------------
// WeakSet
// -------------------------
let weakSet = new WeakSet();

console.log(typeof weakSet); // object



// -------------------------
// Promise
// -------------------------
let promise = Promise.resolve("Success");

console.log(typeof promise); // object



// -------------------------
// Class
// -------------------------
class Student {}

console.log(typeof Student); // function



// -------------------------
// Math Object
// -------------------------
console.log(typeof Math); // object



// -------------------------
// JSON Object
// -------------------------
console.log(typeof JSON); // object



// -------------------------
// Error Object
// -------------------------
let error = new Error("Something went wrong");

console.log(typeof error); // object



// -------------------------
// Constructor Function
// -------------------------
function Car(name) {
    this.name = name;
}

console.log(typeof Car); // function

let car = new Car("BMW");
console.log(typeof car); // object



// -------------------------
// Empty Object
// -------------------------
let obj = {};

console.log(typeof obj); // object



// -------------------------
// Empty Array
// -------------------------
let arr = [];

console.log(typeof arr); // object



// -------------------------
// Empty Function
// -------------------------
let fn = function () {};

console.log(typeof fn); // function



// -------------------------
// Empty Class
// -------------------------
class Animal {}

console.log(typeof Animal); // function



// =========================================
// Special Cases
// =========================================

// null
console.log(typeof null); // object (JavaScript bug)

// NaN
console.log(typeof NaN); // number

// Infinity
console.log(typeof Infinity); // number

// Array
console.log(typeof []); // object

// Function
console.log(typeof function () {}); // function

// Object
console.log(typeof {}); // object

// Undefined
console.log(typeof undefined); // undefined

// Boolean
console.log(typeof true); // boolean

// Number
console.log(typeof 100); // number

// String
console.log(typeof "Hello"); // string

// Symbol
console.log(typeof Symbol()); // symbol

// BigInt
console.log(typeof 100n); // bigint



// =========================================
// Summary
// =========================================

/*
typeof Result

Number      -> "number"
String      -> "string"
Boolean     -> "boolean"
Undefined   -> "undefined"
Null        -> "object" (Bug)
Object      -> "object"
Array       -> "object"
Function    -> "function"
Symbol      -> "symbol"
BigInt      -> "bigint"
Date        -> "object"
RegExp      -> "object"
Map         -> "object"
Set         -> "object"
WeakMap     -> "object"
WeakSet     -> "object"
Promise     -> "object"
Class       -> "function"
Math        -> "object"
JSON        -> "object"
Error       -> "object"
*/