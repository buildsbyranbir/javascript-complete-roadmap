// ==========================================
// Primitive Data Types in JavaScript
// Full Stack Web Developer Guide
// ==========================================

// JavaScript e mot 7 ta Primitive Data Type ache

// 1. Number
let age = 22;
let price = 999.99;
let negative = -50;
let infinity = Infinity;
let notANumber = NaN;

console.log(age);
console.log(price);
console.log(negative);
console.log(infinity);
console.log(notANumber);

// typeof diye type check
console.log(typeof age); // number
console.log(typeof NaN); // number


// ==========================================
// 2. String
// ==========================================

// Single Quote
let firstName = 'Ranbir';

// Double Quote
let lastName = "Roy";

// Template Literal
let fullName = `${firstName} ${lastName}`;

console.log(fullName);

console.log(typeof fullName); // string


// ==========================================
// String Methods
// ==========================================

let text = "JavaScript";

console.log(text.length); // total character

console.log(text.toUpperCase());

console.log(text.toLowerCase());

console.log(text.includes("Script"));

console.log(text.startsWith("Java"));

console.log(text.endsWith("Script"));

console.log(text.slice(0,4));

console.log(text.replace("Java","Type"));

console.log(text.charAt(0));

console.log(text.indexOf("S"));


// ==========================================
// String Concatenation
// ==========================================

let fName = "Ranbir";
let lName = "Roy";

console.log(fName + " " + lName);

console.log(`${fName} ${lName}`);


// ==========================================
// 3. Boolean
// ==========================================

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

console.log(typeof isLoggedIn);


// ==========================================
// Boolean Example
// ==========================================

let marks = 80;

console.log(marks >= 40);

console.log(marks < 40);


// ==========================================
// 4. Undefined
// ==========================================

// Variable declare korechi kintu value dei nai

let city;

console.log(city);

console.log(typeof city);


// ==========================================
// Undefined Example
// ==========================================

function test(){
}

console.log(test());


// ==========================================
// 5. Null
// ==========================================

// Null mane intentionally empty value

let user = null;

console.log(user);

console.log(typeof user); // object (JavaScript er old bug)


// ==========================================
// Null vs Undefined
// ==========================================

let a;
let b = null;

console.log(a);

console.log(b);


// ==========================================
// 6. BigInt
// ==========================================

// Khub boro number handle korte use hoy

let bigNumber = 123456789123456789123456789n;

console.log(bigNumber);

console.log(typeof bigNumber);


// ==========================================
// BigInt Example
// ==========================================

let num1 = 100n;
let num2 = 200n;

console.log(num1 + num2);


// ==========================================
// 7. Symbol
// ==========================================

// Unique value create kore

let id1 = Symbol("id");

let id2 = Symbol("id");

console.log(id1);

console.log(id2);

console.log(id1 === id2);


// ==========================================
// typeof Operator
// ==========================================

console.log(typeof 100);

console.log(typeof "Hello");

console.log(typeof true);

console.log(typeof undefined);

console.log(typeof null);

console.log(typeof 100n);

console.log(typeof Symbol());


// ==========================================
// Primitive Copy
// ==========================================

// Primitive copy hole value copy hoy

let x = 10;

let y = x;

y = 20;

console.log(x);

console.log(y);


// ==========================================
// String Copy
// ==========================================

let country1 = "Bangladesh";

let country2 = country1;

country2 = "Japan";

console.log(country1);

console.log(country2);


// ==========================================
// Truthy & Falsy
// ==========================================

// Falsy Values

console.log(Boolean(false));

console.log(Boolean(0));

console.log(Boolean(-0));

console.log(Boolean(0n));

console.log(Boolean(""));

console.log(Boolean(null));

console.log(Boolean(undefined));

console.log(Boolean(NaN));


// Truthy Values

console.log(Boolean(1));

console.log(Boolean(-1));

console.log(Boolean("Hello"));

console.log(Boolean([]));

console.log(Boolean({}));

console.log(Boolean("0"));

console.log(Boolean("false"));


// ==========================================
// Type Conversion
// ==========================================

// Number to String

let number = 100;

console.log(String(number));

console.log(typeof String(number));


// String to Number

let str = "500";

console.log(Number(str));

console.log(typeof Number(str));


// Boolean to Number

console.log(Number(true));

console.log(Number(false));


// Number to Boolean

console.log(Boolean(100));

console.log(Boolean(0));


// String to Boolean

console.log(Boolean("Hello"));

console.log(Boolean(""));


// ==========================================
// Implicit Type Conversion
// ==========================================

console.log("10" + 5);

console.log("10" - 5);

console.log("10" * 5);

console.log("10" / 5);


// ==========================================
// == vs ===
// ==========================================

// == sudhu value compare kore

console.log(5 == "5");


// === value + type duitai compare kore

console.log(5 === "5");

console.log(null == undefined);

console.log(null === undefined);


// ==========================================
// Common Interview Examples
// ==========================================

console.log(typeof NaN);

console.log(typeof null);

console.log(NaN == NaN);

console.log(Number("abc"));

console.log(Boolean([]));

console.log(Boolean({}));

console.log(Boolean(" "));

console.log(Boolean("0"));

console.log(Boolean(0));


// ==========================================
// Real Project Example
// ==========================================

let username = "Ranbir";      // String

let userAge = 22;             // Number

let isVerified = true;        // Boolean

let profileImage = null;      // Null

let phone;                    // Undefined

let accountId = 1000000000000000000n; // BigInt

let uniqueId = Symbol("user"); // Symbol

console.log(username);
console.log(userAge);
console.log(isVerified);
console.log(profileImage);
console.log(phone);
console.log(accountId);
console.log(uniqueId);


// ==========================================
// Summary
// ==========================================

// Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// Important Topics
// ✔ typeof
// ✔ Truthy & Falsy
// ✔ Type Conversion
// ✔ == vs ===
// ✔ Primitive Copy
// ✔ String Methods
// ✔ Common Interview Questions