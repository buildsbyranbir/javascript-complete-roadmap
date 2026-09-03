// ======================================================
// PART 1
// MODERN JAVASCRIPT
// ======================================================


// ======================================================
// 01. LET
// ======================================================

// let diye variable declare kora hoy
// let er value pore change kora jay

let userName = "Rahim";

console.log(userName);

userName = "Karim";

console.log(userName);


// let block scoped

{
    let age = 20;

    console.log(age);
}


// ======================================================
// 02. CONST
// ======================================================

// const er value abar directly assign kora jay na

const country = "Bangladesh";

console.log(country);


// const object

const user = {
    name: "Rahim",
    age: 20,
    country: "Bangladesh"
};

console.log(user);


// const object er property change kora jay

user.name = "Karim";

console.log(user);


// const array

const skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

skills.push("React");

console.log(skills);


// ======================================================
// 03. ARROW FUNCTION
// ======================================================


// normal function

function addNormal(a, b) {

    return a + b;

}

console.log(
    addNormal(
        10,
        20
    )
);


// arrow function

const add = (a, b) => {

    return a + b;

};

console.log(
    add(
        10,
        20
    )
);


// short arrow function

const multiply = (a, b) => a * b;

console.log(
    multiply(
        10,
        20
    )
);


// single parameter

const square = number => number * number;

console.log(
    square(5)
);


// no parameter

const sayHello = () => {

    console.log(
        "Hello JavaScript"
    );

};

sayHello();


// multiple statements

const calculate = (a, b) => {

    const sum = a + b;

    const result = sum * 2;

    return result;

};

console.log(
    calculate(
        10,
        20
    )
);


// object return

const createUser = () => ({

    name: "Rahim",

    age: 20

});

console.log(
    createUser()
);


// arrow function with map

const numbers = [
    1,
    2,
    3,
    4,
    5
];

const doubledNumbers = numbers.map(
    number => number * 2
);

console.log(
    doubledNumbers
);


// arrow function with filter

const bigNumbers = numbers.filter(
    number => number > 3
);

console.log(
    bigNumbers
);


// ======================================================
// 04. TEMPLATE LITERAL
// ======================================================

// backtick diye template literal lekha hoy

const firstName = "Rahim";

const age = 20;

const message = `
    My name is ${firstName}
    and I am ${age} years old
`;

console.log(message);


// expression use kora

const a = 10;

const b = 20;

console.log(
    `Total is ${a + b}`
);


// function er result

const getName = () => {

    return "Rahim";

};

console.log(
    `User name is ${getName()}`
);


// multiline string

const information = `
    Name: Rahim
    Age: 20
    Country: Bangladesh
`;

console.log(
    information
);


// HTML create kora

const product = {

    name: "Laptop",

    price: 50000

};

const productCard = `
    <div class="product">

        <h2>
            ${product.name}
        </h2>

        <p>
            Price: ${product.price} BDT
        </p>

    </div>
`;

console.log(
    productCard
);


// ======================================================
// 05. OBJECT DESTRUCTURING
// ======================================================

const student = {

    name: "Rahim",

    age: 20,

    department: "Computer"

};


// normal way

const studentName = student.name;

const studentAge = student.age;

console.log(
    studentName
);

console.log(
    studentAge
);


// destructuring

const {

    name,

    age: studentAgeTwo,

    department

} = student;

console.log(name);

console.log(studentAgeTwo);

console.log(department);


// different variable name

const {

    name: userFullName,

    age: userAge

} = student;

console.log(
    userFullName
);

console.log(
    userAge
);


// default value

const person = {

    name: "Karim"

};

const {

    name: personName,

    age: personAge = 18

} = person;

console.log(
    personName
);

console.log(
    personAge
);


// nested object destructuring

const developer = {

    name: "Rahim",

    address: {

        city: "Dhaka",

        country: "Bangladesh"

    }

};

const {

    name: developerName,

    address: {

        city: developerCity,

        country: developerCountry

    }

} = developer;

console.log(
    developerName
);

console.log(
    developerCity
);

console.log(
    developerCountry
);


// ======================================================
// 06. ARRAY DESTRUCTURING
// ======================================================

const marks = [

    80,

    90,

    95

];

const [

    firstMark,

    secondMark,

    thirdMark

] = marks;

console.log(
    firstMark
);

console.log(
    secondMark
);

console.log(
    thirdMark
);


// value skip kora

const numbersTwo = [

    10,

    20,

    30

];

const [

    numberOne,

    ,

    numberThree

] = numbersTwo;

console.log(
    numberOne
);

console.log(
    numberThree
);


// default value

const values = [

    100

];

const [

    valueOne,

    valueTwo = 200

] = values;

console.log(
    valueOne
);

console.log(
    valueTwo
);


// variable swap

let x = 10;

let y = 20;

[x, y] = [y, x];

console.log(x);

console.log(y);


// ======================================================
// FUNCTION PARAMETER DESTRUCTURING
// ======================================================

const showUser = ({

    name,

    age

}) => {

    console.log(
        `Name: ${name}`
    );

    console.log(
        `Age: ${age}`
    );

};


showUser({

    name: "Rahim",

    age: 20

});
