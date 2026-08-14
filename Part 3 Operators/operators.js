// =====================================================
//  JAVASCRIPT OPERATORS - COMPLETE PRACTICE
// =====================================================


// =====================================================
// 1 ARITHMETIC OPERATORS
// =====================================================

let a = 20;
let b = 6;

// + mane jog kora
console.log(a + b); // 26

// - mane biyog kora
console.log(a - b); // 14

// * mane gun kora
console.log(a * b); // 120

// / mane vag kora
console.log(a / b); // 3.333...

// % mane vagshesh ber kora
console.log(a % b); // 2

// ** mane power kora
console.log(a ** 2); // 400


// ++ mane value 1 bariye deya
let count = 5;

count++;

console.log(count); // 6


// -- mane value 1 komiye deya
count--;

console.log(count); // 5



// =====================================================
// 2 ASSIGNMENT OPERATORS
// =====================================================

let balance = 1000;

// = mane variable er moddhe value rakha
balance = 1500;

console.log(balance); // 1500


// += mane ager value er sathe jog kora
// balance = balance + 500
balance += 500;

console.log(balance); // 2000


// -= mane ager value theke biyog kora
// balance = balance - 300
balance -= 300;

console.log(balance); // 1700


// *= mane ager value er sathe gun kora
// balance = balance * 2
balance *= 2;

console.log(balance); // 3400


// /= mane ager value ke vag kora
// balance = balance / 2
balance /= 2;

console.log(balance); // 1700


// %= mane vagshesh rekhe value update kora
// balance = balance % 1000
balance %= 1000;

console.log(balance); // 700


// **= mane power kore value update kora
let number = 2;

// number = number ** 3
number **= 3;

console.log(number); // 8



// =====================================================
// 3 COMPARISON OPERATORS
// =====================================================

let x = 10;
let y = 20;


// > mane x y er cheye boro kina check kora
console.log(x > y); // false


// < mane x y er cheye choto kina check kora
console.log(x < y); // true


// >= mane boro othoba soman kina check kora
console.log(x >= y); // false


// <= mane choto othoba soman kina check kora
console.log(x <= y); // true


// == mane shudhu value compare kore
// proyojon hole type conversion korte pare
console.log(5 == "5"); // true


// === mane value ebong type dutoi compare kore
// modern JavaScript e === beshi use kora hoy
console.log(5 === "5"); // false


// != mane value alada kina check kore
console.log(5 != 10); // true


// !== mane value othoba type alada kina check kore
console.log(5 !== "5"); // true



// =====================================================
// 4 LOGICAL OPERATORS
// =====================================================

// && mane AND
// shob condition true hole result true hobe

let age = 20;
let hasID = true;

if (age >= 18 && hasID === true) {
    console.log("Allowed");
}


// || mane OR
// jekono ekti condition true holei result true hobe

let email = "";
let phone = "01700000000";

if (email || phone) {
    console.log("Contact available");
}


// ! mane NOT
// true ke false ebong false ke true kore

let isLoggedIn = false;

console.log(!isLoggedIn); // true

if (!isLoggedIn) {
    console.log("Please Login");
}



// =====================================================
// 5 UNARY OPERATORS
// =====================================================

// Unary operator shudhu ekti value er upor kaj kore


// ++ mane value 1 bariye dey

let value = 10;

value++;

console.log(value); // 11


// -- mane value 1 komiye dey

value--;

console.log(value); // 10


// Unary + diye string number ke number e convert kora jay

let price = "500";

price = +price;

console.log(price);        // 500
console.log(typeof price); // number


// Unary - diye negative value banano jay

let num = "100";

console.log(-num); // -100


// typeof diye kon value er data type jana jay

let name = "Ranbir";
let studentAge = 20;
let isStudent = true;

console.log(typeof name);       // string
console.log(typeof studentAge); // number
console.log(typeof isStudent);  // boolean



// =====================================================
// 6 TERNARY OPERATOR
// =====================================================

// Ternary operator holo if-else er short form
//
// Syntax:
// condition ? true hole : false hole


let userAge = 20;

let status = userAge >= 18
    ? "Adult"
    : "Minor";

console.log(status); // Adult


// arekti example

let marks = 80;

let result = marks >= 40
    ? "Pass"
    : "Fail";

console.log(result); // Pass



// =====================================================
// 7 NULLISH COALESCING OPERATOR (??)
// =====================================================

// ?? use kora hoy jokhon kono value
// null othoba undefined hole default value dite chai


let username = null;

let displayName = username ?? "Guest";

console.log(displayName); // Guest


// value thakle oi value tai return korbe

let userName = "Ranbir";

let finalName = userName ?? "Guest";

console.log(finalName); // Ranbir


// variable undefined hole default value dibe

let userEmail;

let emailAddress = userEmail ?? "No Email";

console.log(emailAddress); // No Email



// =====================================================
// 8 ?? EBONG || ER MODDHE PARTHOKKO
// =====================================================

// || falsy value hole default value dey
// jemon: 0, "", false, null, undefined

let score = 0;

console.log(score || 100);
// Output: 100


// ?? shudhu null othoba undefined hole
// default value dey

console.log(score ?? 100);
// Output: 0



// =====================================================
// 9 OPTIONAL CHAINING (?.)
// =====================================================

// ?. use korle object er kono property na thakleo
// error na diye undefined return kore


const user = {
    name: "Ranbir",

    profile: {
        email: "ranbir@example.com"
    }
};


// normal property access

console.log(user.name);
// Output: Ranbir


// optional chaining use kore safely property access

console.log(user?.profile?.email);
// Output: ranbir@example.com


// address property nei
// tai error hobe na
// undefined return korbe

console.log(user?.profile?.address?.city);
// Output: undefined



// =====================================================
// 10. OPTIONAL CHAINING WITH ARRAY
// =====================================================

const users = [
    {
        name: "Ranbir"
    }
];


// array er first object er name access kora

console.log(users[0]?.name);
// Output: Ranbir


// ei index nei
// tai error hobe na

console.log(users[5]?.name);
// Output: undefined



// =====================================================
// OPTIONAL CHAINING WITH FUNCTION
// =====================================================

const account = {
    name: "Ranbir"
};


// sayHello function nei
// ?. use korar karone error hobe na

account.sayHello?.();



 // =====================================================
 // OPTIONAL CHAINING + NULLISH COALESCING
 // =====================================================

const currentUser = {

    name: "Ranbir",

    profile: {
        email: "ranbir@example.com"
    }
};


// city property nei
// tai ?? diye default value "Unknown" deya holo

const city =
    currentUser?.profile?.address?.city ?? "Unknown";

console.log(city);
// Output: Unknown



// =====================================================
//  REAL WORLD API EXAMPLE
// =====================================================

// dhoro backend theke ei user data ta asche

const apiUser = {

    name: "Ranbir",

    age: 20,

    profile: {
        email: "ranbir@example.com"
    }
};


// optional chaining diye safely name neya

const apiName = apiUser?.name ?? "Guest";


// profile theke safely email neya

const apiEmail =
    apiUser?.profile?.email ?? "No Email";


// address na thakleo error hobe na

const apiCity =
    apiUser?.profile?.address?.city ?? "Unknown";


console.log(apiName);
console.log(apiEmail);
console.log(apiCity);


// Output:
// Ranbir
// ranbir@example.com
// Unknown



// =====================================================
//  FINAL PRACTICE
// =====================================================

let userAge2 = 21;

let isLogged = true;

let userRole = "admin";


// && diye duita condition check kora

if (userAge2 >= 18 && isLogged) {

    console.log("User is allowed");

}


// Ternary diye short if-else

let message = isLogged
    ? "Welcome Back"
    : "Please Login";

console.log(message);


// || diye default value deya

let role = userRole || "user";

console.log(role);


// ?? diye null/undefined check kora

let permission = null;

let finalPermission =
    permission ?? "user";

console.log(finalPermission);


// ?. diye safely object property access kora

const profile = {

    username: "Ranbir"

};

console.log(profile?.username);


// ?. ebong ?? eksathe use kora

const location =
    profile?.address?.city ?? "Unknown";

console.log(location);



// =====================================================
// FULL STACK DEVELOPER ER JONNO MOST IMPORTANT
// =====================================================
//
// Arithmetic:
// +  -  *  /  %  **
//
// Assignment:
// =  +=  -=  *=  /=  %=  **=
//
// Comparison:
// >  <  >=  <=  ==  ===  !=  !==
//
// Logical:
// &&  ||  !
//
// Unary:
// ++  --  +  -  typeof
//
// Ternary:
// ?:
//
// Nullish:
// ??
//
// Optional Chaining:
// ?.
//
// =====================================================
// Ei operator gulo React, Node.js, Express,
// API data handling, form validation,
// authentication ebong backend logic e
// onek beshi use hobe.
// =====================================================