// ======================================================
// PART 6: NUMBERS & MATH
// Full Stack Web Developer er jonno important topics
// ======================================================


// ======================================================
// 1 NUMBER BASICS
// ======================================================

// Number holo JavaScript er numeric data type
let age = 20;
let price = 99.99;
let temperature = -5;

console.log(age);         // 20
console.log(price);       // 99.99
console.log(temperature); // -5


// Integer check
console.log(Number.isInteger(10));    // true
console.log(Number.isInteger(10.5));  // false


// Number kina check kora
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN(100));       // false


// Infinity check
console.log(Number.isFinite(100));    // true
console.log(Number.isFinite(Infinity)); // false


// ======================================================
// 2 NUMBER CONVERSION
// ======================================================

// String ke Number e convert
let num1 = Number("100");

console.log(num1);        // 100
console.log(typeof num1); // number


// Decimal string
let num2 = Number("99.99");

console.log(num2); // 99.99


// Invalid number
console.log(Number("Hello")); // NaN


// Empty string
console.log(Number("")); // 0


// ======================================================
// 3 NUMBER METHODS
// ======================================================

// toString()
// Number ke String e convert kore
let number = 100;

console.log(number.toString()); // "100"


// toFixed()
// Decimal er koyti digit rakhbo seta bole
let amount = 99.4567;

console.log(amount.toFixed(2)); // "99.46"
console.log(amount.toFixed(1)); // "99.5"


// IMPORTANT:
// toFixed() String return kore
let result = amount.toFixed(2);

console.log(typeof result); // string


// abar Number korte hole
let result2 = Number(amount.toFixed(2));

console.log(result2);        // 99.46
console.log(typeof result2); // number


// toPrecision()
// Total koyti significant digit rakhbo
let num3 = 123.456;

console.log(num3.toPrecision(4)); // "123.5"


// ======================================================
// 4 MATH OBJECT
// ======================================================

// Math holo JavaScript er built-in object
// Mathematical calculation er jonno use hoy


// Math.PI
console.log(Math.PI);
// 3.141592653589793


// Math.E
console.log(Math.E);
// Euler's number


// ======================================================
// 5 ROUND()
// ======================================================

// Nearest integer e niye jay

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5


// Negative number
console.log(Math.round(-4.5)); // -4


// ======================================================
// 6 FLOOR()
// ======================================================

// Sobshomoy nicher dike integer e niye jay

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(4.99)); // 4


// Negative number
console.log(Math.floor(-4.2)); // -5


// ======================================================
// 7 CEIL()
// ======================================================

// Sobshomoy uporer dike integer e niye jay

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.01)); // 5


// Negative number
console.log(Math.ceil(-4.2)); // -4


// ======================================================
// 8 TRUNC()
// ======================================================

// Decimal part remove kore
// Round kore na

console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(4.2));  // 4
console.log(Math.trunc(-4.9)); // -4


// Difference:
// round(4.6) => 5
// floor(4.6) => 4
// ceil(4.6)  => 5
// trunc(4.6) => 4


// ======================================================
// 9 MIN()
// ======================================================

// Koyekti number er moddhe smallest number dey

console.log(Math.min(10, 5, 20, 3)); // 3


// Variable diyeo kora jay
let a = 50;
let b = 20;
let c = 80;

console.log(Math.min(a, b, c)); // 20


// ======================================================
// 10 MAX()
// ======================================================

// Koyekti number er moddhe largest number dey

console.log(Math.max(10, 50, 20)); // 50

console.log(Math.max(a, b, c)); // 80


// ======================================================
// 11 POWER
// ======================================================

// Math.pow(base, exponent)

console.log(Math.pow(2, 3));
// 8
// 2 × 2 × 2 = 8


console.log(Math.pow(5, 2));
// 25


// Modern JavaScript e ** operator beshi use hoy

console.log(2 ** 3); // 8
console.log(5 ** 2); // 25


// ======================================================
// 12 SQRT()
// ======================================================

// Square root ber kore

console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(100)); // 10


// ======================================================
// 13 ABS()
// ======================================================

// Negative number ke positive kore
// Absolute value dey

console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));  // 10
console.log(Math.abs(-25)); // 25


// ======================================================
// 14 RANDOM NUMBER
// ======================================================

// Math.random() 0 theke 1 er moddhe random number dey
// 0 included, 1 excluded

console.log(Math.random());

// Example output:
// 0.1234
// 0.7892
// 0.4567


// ======================================================
// 15 RANDOM INTEGER 0 - 9
// ======================================================

// Math.random() * 10
// floor kore integer banano hoy

let randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);

// Output hote pare:
// 0,1,2,3,4,5,6,7,8,9


// ======================================================
// 16 RANDOM INTEGER 1 - 10
// ======================================================

let random1to10 = Math.floor(Math.random() * 10) + 1;

console.log(random1to10);

// Output:
// 1 - 10


// ======================================================
// 17 RANDOM INTEGER MIN - MAX
// ======================================================

// General formula:
// Math.floor(Math.random() * (max - min + 1)) + min

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumberBetween(1, 100));
// 1 theke 100 er moddhe random number


console.log(randomNumberBetween(50, 100));
// 50 theke 100 er moddhe random number


// ======================================================
// 18 RANDOM OTP
// ======================================================

// 6 digit random OTP

let otp = Math.floor(100000 + Math.random() * 900000);

console.log(otp);


// ======================================================
// 19 RANDOM ARRAY INDEX
// ======================================================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

let randomIndex = Math.floor(Math.random() * fruits.length);

console.log(fruits[randomIndex]);


// ======================================================
// 20 MIN/MAX WITH ARRAY
// ======================================================

// Math.min() directly array ney na
// Spread operator (...) use korte hoy

let numbers = [10, 30, 5, 80, 20];

console.log(Math.min(...numbers)); // 5
console.log(Math.max(...numbers)); // 80


// ======================================================
// 21 ROUNDING PRICE
// ======================================================

let productPrice = 499.786;

let finalPrice = Math.round(productPrice);

console.log(finalPrice); // 500


// 2 decimal e price
let price2 = Number(productPrice.toFixed(2));

console.log(price2); // 499.79


// ======================================================
// 22 PERCENTAGE CALCULATION
// ======================================================

let totalMarks = 500;
let obtainedMarks = 425;

let percentage = (obtainedMarks / totalMarks) * 100;

console.log(percentage); // 85


// Decimal percentage hole round kora jay
console.log(Math.round(percentage));


// ======================================================
// 23 DISCOUNT CALCULATION
// ======================================================

let product = 1000;
let discount = 20;

// Discount amount
let discountAmount = product * (discount / 100);

console.log(discountAmount); // 200


// Discount er por final price
let finalProductPrice = product - discountAmount;

console.log(finalProductPrice); // 800


// ======================================================
// 24 CEIL() REAL PROJECT EXAMPLE
// ======================================================

// Dhoro 25 ta product ache
// Protiti box e 6 ta product dhore

let products = 25;
let perBox = 6;

let boxes = Math.ceil(products / perBox);

console.log(boxes); // 5


// Karon:
// 6 + 6 + 6 + 6 + 1
// Total 5 ta box lagbe


// ======================================================
// 25 FLOOR() REAL PROJECT EXAMPLE
// ======================================================

// Dhoro 25 ta item ache
// Protiti group e 6 ta item

let items = 25;
let groupSize = 6;

let completeGroups = Math.floor(items / groupSize);

console.log(completeGroups); // 4


// 4 ta complete group hobe
// 1 ta item baki thakbe


// ======================================================
// 26 NUMBER CONSTANTS
// ======================================================

console.log(Number.MAX_VALUE);
// JavaScript e maximum possible number

console.log(Number.MIN_VALUE);
// Positive number er khub small value

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991


// ======================================================
// 27 SAFE INTEGER
// ======================================================

console.log(Number.isSafeInteger(100));
// true

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// true


// ======================================================
// 28 NaN
// ======================================================

// NaN = Not a Number

let x = Number("Hello");

console.log(x); // NaN

console.log(Number.isNaN(x)); // true


// ======================================================
// 29 PARSE INT
// =======================================================

// String theke integer number ber kore

console.log(parseInt("100px")); // 100
console.log(parseInt("50.99")); // 50


// ======================================================
// 30 PARSE FLOAT
// ======================================================

// String theke decimal number ber kore

console.log(parseFloat("50.99")); // 50.99
console.log(parseFloat("100.50px")); // 100.5


// ======================================================
// 31 IMPORTANT DIFFERENCE
// ======================================================

console.log(Number("100px"));
// NaN

console.log(parseInt("100px"));
// 100

// Number() pura value valid number kina check kore
// parseInt() string er beginning theke integer ber kore


// ======================================================
// 32 EXPONENTIAL / SCIENTIFIC NOTATION
// ======================================================

let bigNumber = 1000000;

console.log(bigNumber.toExponential());
// 1e+6


// ======================================================
// 33 DECIMAL PRECISION
// ======================================================

// JavaScript floating point calculation e kichu precision issue hote pare

console.log(0.1 + 0.2);
// Expected: 0.3
// JavaScript e result: 0.30000000000000004


// Fix korte:
let fixedResult = Number((0.1 + 0.2).toFixed(2));

console.log(fixedResult); // 0.3


// ======================================================
// 34 COMMON MATH METHODS
// ======================================================

console.log(Math.sign(10));  // 1
console.log(Math.sign(-10)); // -1
console.log(Math.sign(0));   // 0


console.log(Math.cbrt(27)); // 3
// Cube root


console.log(Math.hypot(3, 4)); // 5
// √(3² + 4²)


// ======================================================
//  MOST IMPORTANT SUMMARY
// ======================================================

// Math.round()
// Nearest integer

// Math.floor()
// Nicher integer

// Math.ceil()
// Upore integer

// Math.trunc()
// Decimal remove

// Math.min()
// Smallest number

// Math.max()
// Largest number

// Math.pow()
// Power

// 2 ** 3
// Modern power syntax

// Math.sqrt()
// Square root

// Math.abs()
// Positive/absolute value

// Math.random()
// Random number

// Number()
// String -> Number

// parseInt()
// String -> Integer

// parseFloat()
// String -> Decimal

// Number.isInteger()
// Integer kina check

// Number.isNaN()
// NaN kina check

// Number.isFinite()
// Finite number kina check

// toFixed()
// Decimal point control


// ======================================================
//  FULL STACK DEVELOPMENT E REAL USE
// ======================================================

// 1. E-commerce price calculation
// 2. Discount calculation
// 3. Tax calculation
// 4. Product quantity calculation
// 5. Pagination
// 6. Random OTP
// 7. Random product selection
// 8. Rating calculation
// 9. Percentage calculation
// 10. Statistics / average calculation
// 11. Cart total calculation
// 12. Payment amount calculation
// 13. API data formatting
// 14. Coordinates / distance calculation
// 15. Game/random logic


// ======================================================
//  DEVELOPER LEVEL PRACTICE
// ======================================================

// Average ber kora

let marks = [80, 70, 90, 85, 75];

let total = marks.reduce((sum, mark) => sum + mark, 0);

let average = total / marks.length;

console.log(average); // 80


// Average ke 2 decimal e dekhano

console.log(average.toFixed(2));


// Highest mark
console.log(Math.max(...marks)); // 90


// Lowest mark
console.log(Math.min(...marks)); // 70