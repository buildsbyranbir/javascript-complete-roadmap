// ==========================================
// PART 10: SCOPE AND HOISTING
// PART 2: LEXICAL SCOPE, HOISTING AND TDZ
// ==========================================


// 12. Lexical Scope
// Function je jaygay create hoy
// Sei jaygar scope access korte pare
// Eta lexical scope

let country = "Bangladesh";

function outerFunction() {

    let city = "Thakurgaon";

    function innerFunction() {

        console.log(country);

        console.log(city);
    }

    innerFunction();
}

outerFunction();


// innerFunction tar outer scope er variable access korte parche


// 13. Lexical Scope Example

function parent() {

    let message = "Hello from Parent";

    function child() {

        console.log(message);
    }

    child();
}

parent();


// child function parent er variable access korte parche


// 14. Lexical Scope with Nested Function

let username = "Ranbir";

function outer() {

    let age = 20;

    function middle() {

        let skill = "JavaScript";

        function inner() {

            console.log(username);

            console.log(age);

            console.log(skill);
        }

        inner();
    }

    middle();
}

outer();


// 15. Hoisting
// JavaScript execution er age kichu declaration
// memory te tule rakhe
// Ei behavior ke hoisting bole


// Function Declaration Hoisting

greet();

function greet() {

    console.log("Hello World");
}


// Function declaration call age korleo kaj kore


// 16. Function Declaration Hoisting Example

sayHello();

function sayHello() {

    console.log("Hello Ranbir");
}


// 17. var Hoisting
// var declaration hoist hoy
// Kintu initial value undefined thake

console.log(age);

var age = 20;


// Output hobe:
// undefined


// JavaScript internally erokom vabe bujha jay

var age;

console.log(age);

age = 20;


// 18. let Hoisting
// let o hoist hoy
// Kintu declaration er age access kora jay na

// console.log(number);
// let number = 10;


// Eta error dibe


// 19. const Hoisting
// const o hoist hoy
// Kintu declaration er age access kora jay na

// console.log(value);
// const value = 100;


// Eta error dibe


// 20. TDZ
// TDZ er full form Temporal Dead Zone
// let ebong const declaration theke initialization porjonto
// je time thake take TDZ bole


// Example

// console.log(x);
// let x = 10;


// console.log(x) er somoy x TDZ er moddhe ache
// Tai ReferenceError hobe


// 21. TDZ with const

// console.log(price);
// const price = 500;


// price declaration er age access koray
// ReferenceError hobe


// 22. let Declaration and TDZ

let number = 10;

console.log(number);


// Declaration complete howar por
// variable safely use kora jay


// 23. var vs let vs const

console.log(varValue);

var varValue = 10;


// var er khetre undefined pawa jay


// let er khetre declaration er age access kora jay na

// console.log(letValue);
// let letValue = 20;


// const er khetreo declaration er age access kora jay na

// console.log(constValue);
// const constValue = 30;


// 24. Hoisting with Function Expression

// sayHi();

const sayHi = function () {

    console.log("Hi");
};

sayHi();


// Function expression variable er moddhe store hoy
// Tai declaration er age call kora uchit noy


// 25. Hoisting with Arrow Function

const hello = () => {

    console.log("Hello");
};

hello();


// Arrow function o variable er moddhe store hoy
// Tai declaration er age call kora jabe na


// 26. Practical Example

let user = "Ranbir";

function showUser() {

    let message = "Welcome " + user;

    console.log(message);
}

showUser();


// 27. Scope and Hoisting Combined

var globalVar = "Global";

function testScope() {

    var localVar = "Local";

    console.log(globalVar);

    console.log(localVar);
}

testScope();


// 28. Block Scope and Hoisting

if (true) {

    let message = "Hello";

    console.log(message);
}


// message block er baire available noy


// 29. Important Difference

// var
// Function scoped
// Hoisting hoy
// Declaration er age undefined pawa jay

// let
// Block scoped
// Hoisting hoy
// TDZ er jonno declaration er age access kora jay na

// const
// Block scoped
// Hoisting hoy
// TDZ er jonno declaration er age access kora jay na


// 30. Best Practice
// Modern JavaScript e normally let ebong const use kora hoy
// const default hisebe use kora valo
// Value change korte hole let use kora hoy
// var generally avoid kora hoy