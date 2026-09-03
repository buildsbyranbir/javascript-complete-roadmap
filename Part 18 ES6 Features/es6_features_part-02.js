// ======================================================
// PART 2
// MODERN JAVASCRIPT
// ======================================================


// ======================================================
// 01. SPREAD OPERATOR
// ======================================================

// spread operator diye array er value spread kora hoy


// array copy

const numbers = [

    1,

    2,

    3

];

const copyNumbers = [

    ...numbers

];

console.log(
    copyNumbers
);


// array te new value add

const newNumbers = [

    ...numbers,

    4,

    5

];

console.log(
    newNumbers
);


// array merge

const frontend = [

    "HTML",

    "CSS",

    "JavaScript"

];

const backend = [

    "Node.js",

    "Express"

];

const fullStackSkills = [

    ...frontend,

    ...backend

];

console.log(
    fullStackSkills
);


// multiple array merge

const database = [

    "MongoDB",

    "MySQL"

];

const allSkills = [

    ...frontend,

    ...backend,

    ...database

];

console.log(
    allSkills
);


// ======================================================
// SPREAD WITH OBJECT
// ======================================================


// object copy

const userData = {

    name: "Rahim",

    age: 20

};

const copiedUser = {

    ...userData

};

console.log(
    copiedUser
);


// object e new property add

const newUser = {

    ...userData,

    country: "Bangladesh"

};

console.log(
    newUser
);


// object property update

const updatedUser = {

    ...userData,

    age: 21

};

console.log(
    updatedUser
);


// multiple object merge

const basicInfo = {

    name: "Rahim",

    age: 20

};

const addressInfo = {

    city: "Dhaka",

    country: "Bangladesh"

};

const completeUser = {

    ...basicInfo,

    ...addressInfo

};

console.log(
    completeUser
);


// ======================================================
// 02. REST OPERATOR
// ======================================================

// rest operator multiple value collect kore


// multiple arguments collect

const collectNumbers = (...numbers) => {

    console.log(
        numbers
    );

};

collectNumbers(

    10,

    20,

    30,

    40

);


// rest diye total ber kora

const total = (...numbers) => {

    let sum = 0;

    for (const number of numbers) {

        sum = sum + number;

    }

    return sum;

};

console.log(
    total(
        10,
        20,
        30,
        40
    )
);


// normal parameter er sathe rest

const introduce = (

    name,

    ...skills

) => {

    console.log(
        `Name: ${name}`
    );

    console.log(
        `Skills: ${skills}`
    );

};

introduce(

    "Rahim",

    "HTML",

    "CSS",

    "JavaScript",

    "React"

);


// ======================================================
// REST WITH ARRAY DESTRUCTURING
// ======================================================

const numbersTwo = [

    10,

    20,

    30,

    40,

    50

];

const [

    firstNumber,

    ...remainingNumbers

] = numbersTwo;

console.log(
    firstNumber
);

console.log(
    remainingNumbers
);


// ======================================================
// REST WITH OBJECT DESTRUCTURING
// ======================================================

const userInfo = {

    name: "Rahim",

    age: 20,

    country: "Bangladesh",

    profession: "Developer"

};

const {

    name: infoName,

    ...otherInformation

} = userInfo;

console.log(
    infoName
);

console.log(
    otherInformation
);


// ======================================================
// SPREAD VS REST
// ======================================================


// Spread
// existing value ke spread kore

const oldSkills = [

    "HTML",

    "CSS"

];

const updatedSkills = [

    ...oldSkills,

    "JavaScript"

];

console.log(
    updatedSkills
);


// Rest
// multiple value collect kore

const collectSkills = (...skills) => {

    console.log(
        skills
    );

};

collectSkills(

    "HTML",

    "CSS",

    "JavaScript"

);


// ======================================================
// 03. MODULES
// ======================================================

// Modules normally separate file e use hoy
//
// Example:
//
// math.js
// user.js
// app.js
//
// niche alada alada file er example deya holo



// ======================================================
// math.js
// ======================================================

// named export

export const addNumbers = (a, b) => {

    return a + b;

};


export const subtractNumbers = (a, b) => {

    return a - b;

};


export const multiplyNumbers = (a, b) => {

    return a * b;

};



// ======================================================
// user.js
// ======================================================

// default export

const userObject = {

    name: "Rahim",

    age: 20,

    country: "Bangladesh"

};

export default userObject;



// ======================================================
// app.js
// ======================================================


// named import

import {

    addNumbers,

    subtractNumbers,

    multiplyNumbers

} from "./math.js";


console.log(

    addNumbers(

        10,

        20

    )

);


console.log(

    subtractNumbers(

        20,

        10

    )

);


console.log(

    multiplyNumbers(

        10,

        5

    )

);


// default import

import userObject from "./user.js";

console.log(
    userObject
);


// alias import

import {

    addNumbers as add

} from "./math.js";

console.log(

    add(

        50,

        50

    )

);


// ======================================================
// FINAL REAL WORLD EXAMPLE
// ======================================================


// user data

const developerUser = {

    name: "Rahim",

    age: 20,

    skills: [

        "HTML",

        "CSS",

        "JavaScript"

    ],

    address: {

        city: "Dhaka",

        country: "Bangladesh"

    }

};


// object destructuring

const {

    name,

    age,

    skills,

    address: {

        city,

        country

    }

} = developerUser;


// spread diye new skills add

const finalSkills = [

    ...skills,

    "React",

    "Node.js",

    "MongoDB"

];


// rest function

const printSkills = (...skills) => {

    console.log(
        skills
    );

};


printSkills(
    ...finalSkills
);


// arrow function

const getDeveloperInfo = ({

    name,

    age,

    skills,

    address: {

        city,

        country

    }

}) => {

    return `

        Developer Name: ${name}

        Age: ${age}

        Skills: ${skills.join(", ")}

        City: ${city}

        Country: ${country}

    `;

};


// template literal

console.log(

    getDeveloperInfo({

        ...developerUser,

        skills: finalSkills

    })

);
