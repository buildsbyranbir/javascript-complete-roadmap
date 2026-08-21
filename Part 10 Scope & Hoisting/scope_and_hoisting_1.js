// ==========================================
// PART 10: SCOPE AND HOISTING
// PART 1: GLOBAL, LOCAL AND BLOCK SCOPE
// ==========================================


// 1. Global Scope
// Je variable function ba block er baire declare kora hoy
// Take global scope variable bole
// Eta program er onek jayga theke access kora jay

let globalName = "Ranbir";

function showName() {
    console.log(globalName);
}

showName();

console.log(globalName);


// Global variable function er vitoreo access kora jay

let website = "My Website";

function showWebsite() {
    console.log(website);
}

showWebsite();


// 2. Local Scope
// Function er vitore declare kora variable
// Sudhu oi function er vitore access kora jay

function userInfo() {

    let name = "Ranbir";

    console.log(name);
}

userInfo();


// Function er baire local variable access kora jabe na

function test() {

    let message = "Hello";

    console.log(message);
}

test();


// 3. Local Scope with Parameters
// Function parameter o local scope er moddhe thake

function greet(name) {

    console.log("Hello " + name);
}

greet("Ranbir");


// name function er baire access kora jabe na


// 4. Global and Local Same Name

let name = "Global";

function show() {

    let name = "Local";

    console.log(name);
}

show();

console.log(name);


// Function er vitore local variable priority pay


// 5. Block Scope
// let ebong const block scoped
// Block holo {} er moddher area

if (true) {

    let age = 20;

    const country = "Bangladesh";

    console.log(age);

    console.log(country);
}


// age ebong country block er baire access kora jabe na


// 6. var er Block Scope nei
// var block scoped noy

if (true) {

    var city = "Thakurgaon";
}

console.log(city);


// var block er baireo access kora jay


// 7. let Block Scope

if (true) {

    let district = "Dinajpur";

    console.log(district);
}


// district ekhane access kora jabe na


// 8. const Block Scope

if (true) {

    const language = "JavaScript";

    console.log(language);
}


// language block er baire access kora jabe na


// 9. Block Scope in Loop
// for loop er let variable block scoped

for (let i = 0; i < 3; i++) {

    console.log(i);
}


// i ekhane access kora jabe na


// 10. Nested Block Scope
// Ekta block er vitore arekta block thakte pare

let outer = "Outer";

if (true) {

    let middle = "Middle";

    if (true) {

        let inner = "Inner";

        console.log(outer);

        console.log(middle);

        console.log(inner);
    }
}


// Inner block outer variable access korte pare


// 11. Scope Chain
// JavaScript prothome nijer scope e variable khuje
// na pele outer scope e khuje
// tarpor aro outer scope e khuje

let a = 10;

function first() {

    let b = 20;

    function second() {

        let c = 30;

        console.log(a);

        console.log(b);

        console.log(c);
    }

    second();
}

first();