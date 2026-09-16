
// ==================================================
// JavaScript Dynamic Typing
// Full Stack Web Developer Guide
// ==================================================


// ==================================================
// 1. DYNAMIC TYPING
// ==================================================

// JavaScript dynamically typed language.
//
// Mane variable declare korar somoy
// data type alada kore likhte hoy na.
//
// Variable er moddhe je value assign kori,
// JavaScript shei value onujayi type bujhe ney.
//
// Example:
// String assign korle String.
// Number assign korle Number.
// Boolean assign korle Boolean.

let data = "Ranbir";

console.log(data);
console.log(typeof data);


// ==================================================
// 2. VARIABLE TYPE CHANGE
// ==================================================

// JavaScript e ekoi variable er moddhe
// different type er value assign kora jay.
//
// Ekhane prothome String,
// pore Number,
// seshe Boolean assign kora hocche.

let value = "100";

console.log(value);
console.log(typeof value); // string


value = 100;

console.log(value);
console.log(typeof value); // number


value = true;

console.log(value);
console.log(typeof value); // boolean


// Important:
// let variable er value change kora jay.
// const variable er value abar assign kora jay na.
//
// Dynamic typing mane type runtime e change
// hote pare. Eta variable er declaration
// e type lock kore rakhe na.


// ==================================================
// 3. TYPEOF OPERATOR
// ==================================================

// typeof diye kono value er data type
// check kora hoy.
//
// typeof sobsomoy ekta string return kore.
//
// Example:
// typeof "Hello" => "string"
// typeof 200 => "number"

console.log(typeof "Hello");   // string
console.log(typeof 200);       // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object
console.log(typeof []);        // object
console.log(typeof {});        // object


// Important:
// typeof null "object" return kore.
// Eta JavaScript er purono behavior.
//
// Array check korar jonno Array.isArray()
// use korte hoy.


// ==================================================
// 4. STRING TO NUMBER
// ==================================================

// String ke Number e convert korar jonno
// Number(), parseInt(), parseFloat()
// use kora jay.
//
// Number():
// Puro string ke number e convert korar
// chesta kore.
//
// parseInt():
// Integer number parse kore.
//
// parseFloat():
// Decimal number parse kore.

let price = "500";

console.log(Number(price));     // 500
console.log(parseInt(price));   // 500
console.log(parseFloat(price)); // 500


// Decimal Example:

let decimal = "99.99";

console.log(Number(decimal));     // 99.99
console.log(parseInt(decimal));   // 99
console.log(parseFloat(decimal)); // 99.99


// Important:
// Invalid string Number e convert korle NaN hoy.

console.log(Number("abc")); // NaN


// ==================================================
// 5. NUMBER TO STRING
// ==================================================

// Number ke String e convert kora jay
// String() ba toString() diye.

let number = 100;


// String() method

console.log(String(number));
console.log(typeof String(number)); // string


// toString() method

console.log(number.toString());


// ==================================================
// 6. BOOLEAN CONVERSION
// ==================================================

// Boolean() diye kono value ke
// true ba false e convert kora hoy.
//
// Truthy value => true
// Falsy value  => false

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false


// ==================================================
// 7. TRUTHY VALUES
// ==================================================

// Truthy value holo je value Boolean()
// diye convert korle true return kore.
//
// Important Truthy examples:
//
// Non-zero number
// Non-empty string
// Empty array
// Empty object
// Function

console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean("JavaScript")); // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
console.log(Boolean(function () {})); // true


// ==================================================
// 8. FALSY VALUES
// ==================================================

// Falsy value holo je value Boolean()
// diye convert korle false return kore.
//
// JavaScript er main Falsy values:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


// ==================================================
// 9. IMPLICIT TYPE CONVERSION
// TYPE COERCION
// ==================================================

// JavaScript jokhon nijer theke
// ek data type ke onno data type e convert kore,
// tokhon take Implicit Type Conversion bole.
//
// Eita operator er behavior er upor depend kore.


// + operator:
// String thakle concatenation korte pare.

console.log("5" + 5); // "55"


// - operator:
// String number hole Number e convert kore.

console.log("10" - 2); // 8


// * operator:
// Number e convert kore multiplication kore.

console.log("10" * 2); // 20


// / operator:
// Number e convert kore division kore.

console.log("20" / 4); // 5


// Important:
// + operator string er sathe use hole
// text combine korte pare.
// Tai "5" + 5 er result "55".


// ==================================================
// 10. EXPLICIT TYPE CONVERSION
// ==================================================

// Developer nijer hate type convert korle
// take Explicit Type Conversion bole.
//
// Common methods:
//
// Number()
// String()
// Boolean()

let age = "25";


// String theke Number e convert

age = Number(age);

console.log(age);        // 25
console.log(typeof age); // number


// ==================================================
// 11. == VS ===
// ==================================================

// ==
// Loose Equality.
//
// Value compare kore.
// Proyojone type conversion kore.
//
// Example:
// 5 == "5"
// Result true.

console.log(5 == "5"); // true


// ===
// Strict Equality.
//
// Value ebong type duitai compare kore.
// Type conversion kore na.
//
// Example:
// 5 === "5"
// Result false.

console.log(5 === "5"); // false


// Best Practice:
// Real project e beshirvag somoy === use kora hoy.
// Karon eta type conversion chara compare kore.


// ==================================================
// 12. DYNAMIC OBJECT
// ==================================================

// JavaScript e runtime e object er moddhe
// notun property add kora jay.
//
// Object er property update o kora jay.

let user = {
  name: "Ranbir"
};


// Runtime e property add

user.age = 21;
user.city = "Dinajpur";

console.log(user);


// Property update

user.age = 22;

console.log(user);


// ==================================================
// 13. DYNAMIC ARRAY
// ==================================================

// JavaScript array te different type er
// value store kora jay.
//
// Ekoi array te Number, String, Boolean,
// Object rakha possible.

let arr = [];

arr.push(10);
arr.push("Hello");
arr.push(true);
arr.push({
  name: "Ranbir"
});

console.log(arr);


// ==================================================
// 14. FUNCTION PARAMETER DYNAMIC
// ==================================================

// JavaScript function jekono type er value
// parameter hisebe receive korte pare.
//
// Function er parameter er type
// alada kore declare korte hoy na.

function printData(data) {
  console.log(data);
  console.log(typeof data);
}

printData("Hello");
printData(500);
printData(true);


// ==================================================
// 15. DYNAMIC RETURN TYPE
// ==================================================

// Function different condition e
// different type er value return korte pare.
//
// Ekhane ekbar String,
// arekbar Number return hocche.

function getData(type) {
  if (type === "name") {
    return "Ranbir";
  }

  return 21;
}

console.log(getData("name")); // Ranbir
console.log(getData("age"));  // 21


// ==================================================
// 16. TYPE CHECKING
// ==================================================

// Real project e kono data use korar age
// tar type check kora useful.
//
// Example:
// User input String kina check kore
// tarpor kaj kora.

let input = "100";

if (typeof input === "string") {
  console.log("Eta String");
}


// Explicit conversion

let result = Number(input);

console.log(result);
console.log(typeof result);


// ==================================================
// 17. REAL PROJECT EXAMPLE
// ==================================================

// API theke data ashar somoy
// data kon type er seta check kora
// important hote pare.
//
// Example:
// API theke age String hisebe ashle
// Number e convert kora hocche.

let apiAge = "30";

if (typeof apiAge === "string") {
  apiAge = Number(apiAge);
}

console.log(apiAge);
console.log(typeof apiAge);


// ==================================================
// 18. IMPORTANT PRACTICE
// ==================================================

// Variable er type runtime e change hote pare.
// Tai code lekhar somoy type niye careful
// thaka dorkar.
//
// Best Practice:
//
// 1. Comparison er jonno === use koro.
// 2. Proyojon hole explicit conversion koro.
// 3. User input er type check koro.
// 4. API data use korar age validate koro.
// 5. typeof diye basic type check koro.
// 6. Array check korte Array.isArray() use koro.


// ==================================================
// FINAL REVISION
// ==================================================

// JavaScript dynamically typed language.
//
// Same variable e multiple type assign
// kora jay.
//
// typeof diye data type check kora hoy.
//
// Number(), String(), Boolean()
// diye explicit conversion kora jay.
//
// parseInt() integer parse kore.
//
// parseFloat() decimal parse kore.
//
// == type conversion kore compare korte pare.
//
// === value + type duitai compare kore.
//
// Truthy/Falsy concept jana dorkar.
//
// Type Coercion bujhte hobe.
//
// Object, Array, Function dynamic behavior
// support kore.
//
// Professional code e === use kora best.