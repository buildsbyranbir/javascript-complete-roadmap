// ======================================================
//  PART 4: TYPE CONVERSION
// JavaScript Type Conversion er important sob topic
// ======================================================


// ======================================================
// 1 STRING CONVERSION
// ======================================================

// Number → String
let num = 100;
let str = String(num);

console.log(str);        // "100"
console.log(typeof str); // string


// Boolean → String
let bool = true;
let boolStr = String(bool);

console.log(boolStr);        // "true"
console.log(typeof boolStr); // string


// Null → String
let value1 = null;

console.log(String(value1)); // "null"


// Undefined → String
let value2;

console.log(String(value2)); // "undefined"


// Array → String
let fruits = ["Apple", "Mango", "Banana"];

console.log(String(fruits)); // "Apple,Mango,Banana"


// Object → String
let user = {
    name: "Ranbir",
    age: 20
};

console.log(String(user)); // "[object Object]"


//  Shortcut: toString()
let number = 500;

console.log(number.toString()); // "500"



// ======================================================
// 2 NUMBER CONVERSION
// ======================================================

// String → Number
let age = "20";

let convertedAge = Number(age);

console.log(convertedAge);        // 20
console.log(typeof convertedAge); // number


// Decimal String → Number
let price = "99.99";

console.log(Number(price)); // 99.99


// Empty String → Number
console.log(Number("")); // 0


// Space String → Number
console.log(Number("   ")); // 0


// Boolean → Number
console.log(Number(true));  // 1
console.log(Number(false)); // 0


// null → Number
console.log(Number(null)); // 0


// undefined → Number
console.log(Number(undefined)); // NaN


// Invalid String → Number
console.log(Number("hello")); // NaN


//  NaN check
console.log(Number.isNaN(Number("hello"))); // true



// ======================================================
// 3 BOOLEAN CONVERSION
// ======================================================

// Boolean() diye kono value ke true/false e convert kora jay.


// String
console.log(Boolean("Hello")); // true

// Empty String
console.log(Boolean("")); // false


// Number
console.log(Boolean(100)); // true

// Zero
console.log(Boolean(0)); // false


// Negative Number
console.log(Boolean(-10)); // true


// null
console.log(Boolean(null)); // false


// undefined
console.log(Boolean(undefined)); // false


// NaN
console.log(Boolean(NaN)); // false


// Array
console.log(Boolean([])); // true


// Object
console.log(Boolean({})); // true



// ======================================================
// 4 TRUTHY & FALSY VALUES
// ======================================================

// JavaScript e kichu value automatically false hoy.
// Eguloke Falsy value bole.


// JavaScript er main Falsy values:

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


// Ei value gula chara almost sobkichui Truthy.

console.log(Boolean("Hello")); // true
console.log(Boolean("0"));     // true
console.log(Boolean(1));       // true
console.log(Boolean(-1));      // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true



// ======================================================
// 5 parseInt()
// ======================================================

// parseInt() String theke Integer Number ber kore.

console.log(parseInt("100")); // 100

console.log(parseInt("100px")); // 100

console.log(parseInt("25.99")); // 25

console.log(parseInt("50 years")); // 50


// Invalid value hole NaN return kore.

console.log(parseInt("Hello")); // NaN


// Decimal number ke integer kore dey.

let value3 = "99.99";

console.log(parseInt(value3)); // 99



// ======================================================
// 6 parseFloat()
// ======================================================

// parseFloat() String theke Decimal Number ber kore.

console.log(parseFloat("99.99")); // 99.99

console.log(parseFloat("25.50px")); // 25.5

console.log(parseFloat("100.75")); // 100.75


// Integer-o return korte pare.

console.log(parseFloat("100")); // 100


// Invalid hole NaN.

console.log(parseFloat("Hello")); // NaN



// ======================================================
// 7 Number()
// ======================================================

// Number() value ke Number e convert kore.

console.log(Number("100")); // 100

console.log(Number("99.99")); // 99.99

console.log(Number(true)); // 1

console.log(Number(false)); // 0

console.log(Number(null)); // 0

console.log(Number("")); // 0

console.log(Number("Hello")); // NaN


//  Important difference:
// Number("100px") → NaN
// parseInt("100px") → 100

console.log(Number("100px"));    // NaN
console.log(parseInt("100px"));  // 100



// ======================================================
// 8 String()
// ======================================================

// String() diye value ke String e convert kora jay.

console.log(String(100)); // "100"

console.log(String(99.99)); // "99.99"

console.log(String(true)); // "true"

console.log(String(false)); // "false"

console.log(String(null)); // "null"

console.log(String(undefined)); // "undefined"

console.log(String(["A", "B", "C"])); // "A,B,C"



// ======================================================
// 9 Boolean()
// ======================================================

// Boolean() diye value ke true/false e convert kora jay.

console.log(Boolean(1)); // true

console.log(Boolean(0)); // false

console.log(Boolean("Hello")); // true

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

console.log(Boolean([])); // true

console.log(Boolean({})); // true



// ======================================================
// 10. IMPLICIT TYPE CONVERSION
// ======================================================

// JavaScript automatically type convert korle
// take Implicit Type Conversion bole.


// String + Number
console.log("10" + 5);
// Output: "105"
// Number 5 String e convert hoye geche


// String - Number
console.log("10" - 5);
// Output: 5
// String "10" Number e convert hoye geche


// String * Number
console.log("10" * 5);
// Output: 50


// String / Number
console.log("20" / 5);
// Output: 4


// Boolean + Number
console.log(true + 5);
// Output: 6
// true = 1


console.log(false + 5);
// Output: 5
// false = 0



// ======================================================
// 11. EXPLICIT TYPE CONVERSION
// ======================================================

// Developer nijer ichchay type convert korle
// take Explicit Type Conversion bole.

let a = "100";

let b = Number(a);

console.log(b); // 100


let c = 200;

let d = String(c);

console.log(d); // "200"


let e = 1;

let f = Boolean(e);

console.log(f); // true



// ======================================================
// 12. typeof OPERATOR
// ======================================================

// Kon value er type ki seta check korte typeof use hoy.

console.log(typeof "Hello"); // string

console.log(typeof 100); // number

console.log(typeof true); // boolean

console.log(typeof undefined); // undefined

console.log(typeof null); 
// object
//  JavaScript er old/known behavior


console.log(typeof []); 
// object


console.log(typeof {});
// object



// ======================================================
// 13. NaN
// ======================================================

// NaN = Not a Number

let result = Number("Hello");

console.log(result); // NaN

console.log(typeof result); // number


// NaN check korar jonno Number.isNaN() best.

console.log(Number.isNaN(result)); // true



// ======================================================
// 14. parseInt() vs parseFloat() vs Number()
// ======================================================

let value4 = "100.50px";

console.log(Number(value4));
// NaN
// Karon puro string valid number na.


console.log(parseInt(value4));
// 100
// Integer porjonto ney.


console.log(parseFloat(value4));
// 100.5
// Decimal porjonto ney.



// ======================================================
// 15. Real World Example: User Input
// ======================================================

// HTML input theke normally value String hisebe ase.

// Example:

let input1 = "50";
let input2 = "30";

console.log(input1 + input2);
// "5030"
// Karon duita-i String


// Correct calculation:
let total = Number(input1) + Number(input2);

console.log(total);
// 80



// ======================================================
//  Price Calculation
// ======================================================

let productPrice = "500";
let quantity = "3";

let totalPrice = Number(productPrice) * Number(quantity);

console.log(totalPrice);
// 1500



// ======================================================
//  Login / Condition Example
// ======================================================

let username = "Ranbir";

if (Boolean(username)) {
    console.log("Username ache");
} else {
    console.log("Username nei");
}


// Short way:

if (username) {
    console.log("User exists");
}



// ======================================================
//  Form Input Example
// ======================================================

let ageInput = "20";

// String → Number
let userAge = Number(ageInput);

if (userAge >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}



// ======================================================
//  Safe Number Conversion
// ======================================================

let userInput = "abc";

let numberValue = Number(userInput);

if (Number.isNaN(numberValue)) {
    console.log("Invalid number");
} else {
    console.log("Valid number:", numberValue);
}



// ======================================================
//  MOST IMPORTANT SUMMARY
// ======================================================

// String(value)
// → value ke String kore.

console.log(String(100)); // "100"


// Number(value)
// → value ke Number kore.

console.log(Number("100")); // 100


// Boolean(value)
// → value ke true/false kore.

console.log(Boolean(1)); // true


// parseInt(value)
// → Integer Number ber kore.

console.log(parseInt("100.50")); // 100


// parseFloat(value)
// → Decimal Number ber kore.

console.log(parseFloat("100.50")); // 100.5


// typeof value
// → value er data type check kore.

console.log(typeof "Hello"); // string


// Number.isNaN(value)
// → value NaN kina check kore.

console.log(Number.isNaN(Number("abc"))); // true



// ======================================================
//  FULL STACK WEB DEVELOPER ER JONNO MUST KNOW
// ======================================================

// 1. String()
// 2. Number()
// 3. Boolean()
// 4. parseInt()
// 5. parseFloat()
// 6. typeof
// 7. NaN
// 8. Number.isNaN()
// 9. Truthy & Falsy
// 10. Implicit Type Conversion
// 11. Explicit Type Conversion
// 12. String → Number
// 13. Number → String
// 14. Boolean → Number
// 15. Number → Boolean
// 16. Form/Input value conversion
// 17. Number() vs parseInt() vs parseFloat()
// 18. null / undefined conversion
// 19. Array/Object conversion basics
// 20. Real-world data validation