
// ==================================================
// JavaScript Primitive Data Types
// Full Stack Web Developer Guide
// ==================================================

// JavaScript e mot 7 ta Primitive Data Type ache:
//
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol
//
// Primitive value holo basic data type.
// Egula direct value hisebe store hoy.
// Primitive value copy korle alada value copy hoy.


// ==================================================
// 1. NUMBER
// ==================================================

// Number diye integer, decimal, negative number
// ebong Infinity er moto value store kora hoy.
//
// JavaScript e Number er jonno alada integer
// ba float data type nei.
// Duita-i Number type.

let age = 22;
let price = 999.99;
let negative = -50;

console.log(age);
console.log(price);
console.log(negative);


// Infinity:
// Infinity mane oshim value.
// Number ke zero diye vag korle
// JavaScript e Infinity pete pari.

let infinity = Infinity;

console.log(infinity);


// NaN:
// NaN er full form Not a Number.
// Jokhon kono invalid mathematical operation
// er result number hisebe ber kora jay na,
// tokhon NaN return korte pare.

let notANumber = NaN;

console.log(notANumber);


// typeof:
// typeof diye kono value er data type check kora hoy.

console.log(typeof age);       // number
console.log(typeof NaN);       // number
console.log(typeof Infinity);  // number


// ==================================================
// 2. STRING
// ==================================================

// String holo text data.
// Name, address, message, email etc. store korte
// String use kora hoy.
//
// String lekhar jonno single quote,
// double quote ba template literal use kora jay.


// Single Quote
let firstName = "Ranbir";

// Double Quote
let lastName = "Roy";

// Template Literal:
// Backtick (`) use kore template literal banano hoy.
// ${} er moddhe variable er value bosano jay.

let fullName = `${firstName} ${lastName}`;

console.log(fullName);
console.log(typeof fullName); // string


// ==================================================
// STRING METHODS
// ==================================================

let text = "JavaScript";


// length:
// String er total character koyta
// seta return kore.

console.log(text.length);


// toUpperCase():
// Sob letter capital kore notun string return kore.

console.log(text.toUpperCase());


// toLowerCase():
// Sob letter small kore notun string return kore.

console.log(text.toLowerCase());


// includes():
// String er moddhe kono text ache kina check kore.
// Thakle true, na thakle false.

console.log(text.includes("Script"));


// startsWith():
// String kono specific text diye start kore kina check kore.

console.log(text.startsWith("Java"));


// endsWith():
// String kono specific text diye end hoy kina check kore.

console.log(text.endsWith("Script"));


// slice(start, end):
// String er ekta part copy kore return kore.
// End index include hoy na.
//
// JavaScript
// Index: 0 1 2 3 4 5 6 7 8 9
//        J a v a S c r i p t

console.log(text.slice(0, 4)); // Java


// replace():
// String er kono part replace kore.
// Ekhane Java er jaygay Type bosbe.

console.log(text.replace("Java", "Type"));


// charAt():
// Specific index er character return kore.
// Index 0 mane first character.

console.log(text.charAt(0)); // J


// indexOf():
// Kono character ba text er first index return kore.
// Na pele -1 return kore.

console.log(text.indexOf("S")); // 4


// ==================================================
// STRING CONCATENATION
// ==================================================

// Duita ba tar beshi string combine korake
// String Concatenation bole.

let fName = "Ranbir";
let lName = "Roy";


// Plus operator diye combine

console.log(fName + " " + lName);


// Template literal diye combine
// React e dynamic text show korar somoy
// template literal useful.

console.log(`${fName} ${lName}`);


// ==================================================
// 3. BOOLEAN
// ==================================================

// Boolean er sudhu 2 ta value ache:
//
// true  = shotto
// false = mittha
//
// Login status, admin status, permission,
// condition check etc. e Boolean use hoy.

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

console.log(typeof isLoggedIn); // boolean


// Boolean Example:

let marks = 80;

console.log(marks >= 40); // true
console.log(marks < 40);  // false


// ==================================================
// 4. UNDEFINED
// ==================================================

// Undefined mane variable declare kora hoyeche,
// kintu tar moddhe kono value assign kora hoy nai.
//
// Function kono value return na korleo
// undefined return korte pare.

let city;

console.log(city);        // undefined
console.log(typeof city); // undefined


// Function return na korle undefined

function test() {
}

console.log(test()); // undefined


// ==================================================
// 5. NULL
// ==================================================

// Null mane intentionally empty value.
//
// Developer nijer icchay kono variable er value
// empty hisebe set korte chaile null use kore.
//
// Example:
// User profile e image na thakle null rakha jay.

let user = null;

console.log(user);        // null
console.log(typeof user); // object


// Important:
// typeof null "object" return kore.
// Eta JavaScript er purono behavior.
// Null asole Primitive Data Type.


// ==================================================
// NULL VS UNDEFINED
// ==================================================

// Undefined:
// Value assign kora hoy nai.

let a;


// Null:
// Intentionally empty value assign kora hoyeche.

let b = null;

console.log(a); // undefined
console.log(b); // null


// ==================================================
// 6. BIGINT
// ==================================================

// BigInt khub boro integer number store korte
// use hoy.
//
// Number er safe integer limit er baire
// boro integer handle korar jonno BigInt useful.
//
// BigInt value er seshe n dite hoy.

let bigNumber = 123456789123456789123456789n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint


// BigInt Example:

let num1 = 100n;
let num2 = 200n;

console.log(num1 + num2); // 300n


// Important:
// BigInt er sathe normal Number directly
// arithmetic operation kora jay na.
//
// Example:
// 100n + 200
//
// Eta TypeError dibe.
// Duita value same type er hote hobe.


// ==================================================
// 7. SYMBOL
// ==================================================

// Symbol holo unique primitive value.
//
// Same description diye Symbol banaleo
// prottek Symbol alada hoy.
//
// Object er unique property key create korte
// Symbol use kora jay.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1);
console.log(id2);


// Duita Symbol er description same.
// Kintu value duita alada.

console.log(id1 === id2); // false

console.log(typeof id1); // symbol


// ==================================================
// TYPEOF OPERATOR
// ==================================================

// typeof diye value er data type check kora hoy.

console.log(typeof 100);         // number
console.log(typeof "Hello");     // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof 100n);        // bigint
console.log(typeof Symbol());    // symbol


// ==================================================
// PRIMITIVE COPY
// ==================================================

// Primitive value copy korle actual value copy hoy.
// Duita variable alada value store kore.
//
// Tai ekta variable change korle
// onno variable change hoy na.

let x = 10;

let y = x;

// Ekhon y er value 10.

y = 20;

// Sudhu y change hoyeche.
// x er value ager motoi 10.

console.log(x); // 10
console.log(y); // 20


// ==================================================
// STRING COPY
// ==================================================

// String-o Primitive Data Type.
// Tai string copy korle alada value copy hoy.

let country1 = "Bangladesh";

let country2 = country1;

country2 = "Japan";

console.log(country1); // Bangladesh
console.log(country2); // Japan


// ==================================================
// TRUTHY & FALSY
// ==================================================

// JavaScript e kichu value condition er moddhe
// false hisebe behave kore.
// Egula ke Falsy Value bole.
//
// Baki onek value true hisebe behave kore.
// Egula ke Truthy Value bole.


// ==================================================
// FALSY VALUES
// ==================================================

// JavaScript er main Falsy value gula:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
// Ei value gula Boolean() diye false hoy.

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// ==================================================
// TRUTHY VALUES
// ==================================================

// Ei value gula Boolean() diye true hoy.
//
// Empty array [] ebong empty object {}
// JavaScript e Truthy.

console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("Hello"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("0"));
console.log(Boolean("false"));


// ==================================================
// TYPE CONVERSION
// ==================================================

// Ek data type er value ke onno data type e
// convert korake Type Conversion bole.
//
// JavaScript e String(), Number(), Boolean()
// diye manually conversion kora jay.


// ==================================================
// NUMBER TO STRING
// ==================================================

let number = 100;

console.log(String(number));        // "100"
console.log(typeof String(number)); // string


// ==================================================
// STRING TO NUMBER
// ==================================================

let str = "500";

console.log(Number(str));        // 500
console.log(typeof Number(str)); // number


// ==================================================
// BOOLEAN TO NUMBER
// ==================================================

// true  => 1
// false => 0

console.log(Number(true));  // 1
console.log(Number(false)); // 0


// ==================================================
// NUMBER TO BOOLEAN
// ==================================================

// Zero => false
// Non-zero number => true

console.log(Boolean(100)); // true
console.log(Boolean(0));   // false


// ==================================================
// STRING TO BOOLEAN
// ==================================================

// Empty string => false
// Non-empty string => true

console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false


// ==================================================
// IMPLICIT TYPE CONVERSION
// ==================================================

// JavaScript nijer theke ek type ke
// onno type e convert korle
// take Implicit Type Conversion bole.
//
// Operator onujayi result change hote pare.


// + operator string thakle concatenation korte pare.

console.log("10" + 5); // "105"


// - operator number e convert korar chesta kore.

console.log("10" - 5); // 5


// * operator number e convert kore.

console.log("10" * 5); // 50


// / operator number e convert kore.

console.log("10" / 5); // 2


// ==================================================
// == VS ===
// ==================================================

// ==
// Loose Equality.
// Value compare kore.
// Proyojone type conversion kore.

console.log(5 == "5"); // true


// ===
// Strict Equality.
// Value ebong type duitai compare kore.
// Type conversion kore na.

console.log(5 === "5"); // false


// null ebong undefined er special comparison

console.log(null == undefined);  // true
console.log(null === undefined); // false


// Best Practice:
// Real project e beshirvag somoy === use kora hoy.
// Karon eta type conversion chara compare kore.


// ==================================================
// COMMON INTERVIEW EXAMPLES
// ==================================================

// NaN er type number.

console.log(typeof NaN); // number


// null er type object.

console.log(typeof null); // object


// NaN nijer sathe-o equal na.

console.log(NaN == NaN); // false


// Invalid string ke Number e convert korle NaN.

console.log(Number("abc")); // NaN


// Empty array Truthy.

console.log(Boolean([])); // true


// Empty object Truthy.

console.log(Boolean({})); // true


// Space thaka string empty na.
// Tai Truthy.

console.log(Boolean(" ")); // true


// Non-empty string "0" Truthy.

console.log(Boolean("0")); // true


// Number 0 Falsy.

console.log(Boolean(0)); // false


// ==================================================
// REAL PROJECT EXAMPLE
// ==================================================

// Ekta user profile e Primitive Data Types
// kivabe use hoy tar example.

let username = "Ranbir";       // String
let userAge = 22;              // Number
let isVerified = true;         // Boolean
let profileImage = null;       // Null
let phone;                     // Undefined
let accountId = 1000000000000000000n; // BigInt
let uniqueId = Symbol("user"); // Symbol

console.log(username);
console.log(userAge);
console.log(isVerified);
console.log(profileImage);
console.log(phone);
console.log(accountId);
console.log(uniqueId);


// ==================================================
// IMPORTANT TOPICS TO REMEMBER
// ==================================================

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol
//
// 8. typeof
// 9. Truthy & Falsy
// 10. Type Conversion
// 11. == vs ===
// 12. Primitive Copy
// 13. String Methods
// 14. Implicit Type Conversion