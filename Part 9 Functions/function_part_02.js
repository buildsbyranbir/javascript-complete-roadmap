// ==========================================
// PART 9: FUNCTIONS
// Part 2: Arrow Function and Rest Parameter
// ==========================================


// 13. Arrow Function
// Arrow function holo function lekhar short way

const hello = () => {
    console.log("Hello World");
};

hello();


// 14. Arrow Function with Parameter

const greet = (name) => {
    console.log("Hello " + name);
};

greet("Ranbir");


// 15. Single Parameter
// Single parameter hole bracket na dileo hoy

const welcome = name => {
    console.log("Welcome " + name);
};

welcome("Ranbir");


// 16. Multiple Parameters
// Multiple parameter hole bracket use korte hoy

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// 17. Implicit Return
// Ek line er expression hole return keyword charao return kora jay

const sum = (a, b) => a + b;

console.log(sum(10, 20));


// 18. Arrow Function with Calculation

const square = number => number * number;

console.log(square(5));


// 19. Arrow Function returning Object
// Object return korle round bracket use korte hoy

const createUser = () => ({
    name: "Ranbir",
    age: 20
});

console.log(createUser());


// 20. Rest Parameter
// Rest parameter diye unlimited argument receive kora jay
// Rest parameter er age three dot use hoy

function numbers(...values) {
    console.log(values);
}

numbers(10, 20, 30, 40);


// 21. Rest Parameter with Loop

function total(...numbers) {

    let sum = 0;

    for (let number of numbers) {
        sum = sum + number;
    }

    return sum;
}

console.log(total(10, 20, 30));

console.log(total(5, 10, 15, 20, 25));


// 22. Rest Parameter with Normal Parameter
// Normal parameter age thakbe
// Rest parameter always last e thakbe

function studentInfo(name, ...subjects) {

    console.log("Name:", name);

    console.log("Subjects:", subjects);
}

studentInfo(
    "Ranbir",
    "JavaScript",
    "React",
    "Node.js"
);


// 23. Rest Parameter with Arrow Function

const addAll = (...numbers) => {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
};

console.log(addAll(10, 20, 30, 40));


// 24. Function as Argument
// Ekta function ke arekta function er argument hisebe pathano jay

function calculate(a, b, operation) {

    return operation(a, b);
}

const addition = (a, b) => a + b;

const multiplication = (a, b) => a * b;

console.log(calculate(10, 20, addition));

console.log(calculate(10, 20, multiplication));


// 25. Callback Function
// Je function arekta function er argument hisebe jay
// Take callback function bole

function processUser(name, callback) {

    console.log("User: " + name);

    callback();
}

function message() {
    console.log("User processing complete");
}

processUser("Ranbir", message);


// 26. Anonymous Function
// Je function er kono name thake na

setTimeout(function () {

    console.log("Hello after 1 second");

}, 1000);


// 27. Arrow Function as Callback

setTimeout(() => {

    console.log("Hello after 2 seconds");

}, 2000);


// 28. Function Scope

function scopeExample() {

    let message = "Hello";

    console.log(message);
}

scopeExample();


// message function er baire access kora jabe na


// 29. Function with Array

function printNames(names) {

    for (let name of names) {
        console.log(name);
    }
}

printNames([
    "Ranbir",
    "Rahim",
    "Karim"
]);


// 30. Function with Object

function showUser(user) {

    console.log(user.name);

    console.log(user.age);
}

showUser({
    name: "Ranbir",
    age: 20
});


// 31. Practical Example
// Product price calculate

function calculateTotal(price, quantity = 1) {

    return price * quantity;
}

console.log(calculateTotal(500));

console.log(calculateTotal(500, 3));


// 32. Practical Example with Rest Parameter

function calculateCartTotal(...prices) {

    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}

console.log(
    calculateCartTotal(100, 200, 300)
);


// 33. Practical Example
// User login check

function login(username, password) {

    if (username === "admin" && password === "1234") {
        return "Login successful";
    }

    return "Invalid username or password";
}

console.log(login("admin", "1234"));

console.log(login("user", "1111"));


// 34. Function Composition

function double(number) {
    return number * 2;
}

function addFive(number) {
    return number + 5;
}

let value = double(10);

value = addFive(value);

console.log(value);


// 35. Important Rule
// Rest parameter always last e thakbe

function example(name, age, ...skills) {

    console.log(name);
    console.log(age);
    console.log(skills);
}

example(
    "Ranbir",
    20,
    "HTML",
    "CSS",
    "JavaScript",
    "React"
);