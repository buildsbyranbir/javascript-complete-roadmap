// ======================================================
// PART 19: DOM BASICS
// PART 1
// ======================================================


// ======================================================
// 01. DOM
// ======================================================

// DOM er full form holo
// Document Object Model

// Browser HTML page ke ekta object tree hisebe dekhe
// JavaScript diye ei HTML elements access
// change, create, delete kora jay

console.log(document);


// pura HTML page dekha

console.log(
    document.documentElement
);


// body dekha

console.log(
    document.body
);



// ======================================================
// 02. DOCUMENT
// ======================================================

// document holo current HTML document er object

console.log(document);


// document diye HTML er element access kora jay


// page title

console.log(
    document.title
);


// body

console.log(
    document.body
);


// URL

console.log(
    document.URL
);


// document er head

console.log(
    document.head
);



// ======================================================
// 03. WINDOW
// ======================================================

// window holo browser er main global object
// browser er onek information and function
// window object er moddhe thake

console.log(window);


// browser er width

console.log(
    window.innerWidth
);


// browser er height

console.log(
    window.innerHeight
);


// current URL

console.log(
    window.location.href
);


// browser history

console.log(
    window.history
);


// console.log() er age window lekha mandatory na

window.console.log(
    "Hello"
);

console.log(
    "Hello"
);


// alert

// window.alert("Hello User");


// ======================================================
// DOCUMENT VS WINDOW
// ======================================================

// window = browser window

// document = browser er vitore thaka HTML document


console.log(window);

console.log(document);



// ======================================================
// 04. querySelector()
// ======================================================

// querySelector() diye first matching element
// select kora hoy


// ID diye select

const title = document.querySelector("#title");

console.log(title);


// class diye select

const text = document.querySelector(".text");

console.log(text);


// tag diye select

const heading = document.querySelector("h1");

console.log(heading);


// button select

const button = document.querySelector(".btn");

console.log(button);



// ======================================================
// querySelector() er important bishoy
// ======================================================

// jodi same class er multiple element thake
// querySelector() sudhu first element return kore


const firstText = document.querySelector(".text");

console.log(firstText);



// ======================================================
// querySelector() diye nested element select
// ======================================================

const body = document.querySelector("body");

console.log(body);


// body er vitore h1 select

const bodyHeading = document.querySelector(
    "body h1"
);

console.log(bodyHeading);



// ======================================================
// querySelector() diye multiple condition
// ======================================================

const buttonElement = document.querySelector(
    "button.btn"
);

console.log(buttonElement);



// ======================================================
// querySelector() diye attribute select
// ======================================================

const meta = document.querySelector(
    'meta[charset="UTF-8"]'
);

console.log(meta);