// ==========================================
// PART 9: FUNCTIONS
// Part 1: Basic Functions
// ==========================================


// 1. Function Declaration
// Function declaration diye function create kora hoy

function greet() {
    console.log("Hello World");
}

// Function call
greet();


// 2. Function with Parameter
// Parameter holo function er vitore newa variable

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Ranbir");


// 3. Multiple Parameters
// Ekta function e ekadhik parameter thakte pare

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// 4. Arguments
// Function call korar somoy je value pathano hoy
// Seguloke arguments bole

function student(name, age) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}

student("Ranbir", 20);


// 5. Return
// Return diye function theke kono value ferot pathano hoy

function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log(result);


// Return er porer code execute hoy na

function test() {
    return "Hello";

    console.log("This will not run");
}

console.log(test());


// 6. Function with Return and Calculation

function multiply(a, b) {
    return a * b;
}

let total = multiply(5, 4);

console.log(total);


// 7. Function Expression
// Function ke ekta variable er moddhe store kora jay

const sayHello = function () {
    console.log("Hello");
};

sayHello();


// Function expression with parameter

const addNumbers = function (a, b) {
    return a + b;
};

console.log(addNumbers(10, 20));


// 8. Function Declaration vs Function Expression

// Function Declaration
function declaration() {
    console.log("Declaration");
}

declaration();


// Function Expression
const expression = function () {
    console.log("Expression");
};

expression();


// 9. Default Parameter
// Argument na dile default value use hobe

function welcome(name = "Guest") {
    console.log("Welcome " + name);
}

welcome("Ranbir");

welcome();


// Multiple default parameters

function userInfo(name = "Unknown", age = 0) {
    console.log(name);
    console.log(age);
}

userInfo("Ranbir", 20);

userInfo();


// Default parameter with calculation

function calculatePrice(price, tax = 10) {
    return price + tax;
}

console.log(calculatePrice(100));

console.log(calculatePrice(100, 20));


// 10. Function returning string

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

let name = fullName("Ranbir", "Roy");

console.log(name);


// 11. Function returning Boolean

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(20));

console.log(isAdult(15));


// 12. Function inside another function

function outerFunction() {

    function innerFunction() {
        console.log("Inner Function");
    }

    innerFunction();
}

outerFunction();