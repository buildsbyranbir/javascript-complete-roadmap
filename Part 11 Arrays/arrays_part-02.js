// ==========================================
// PART 11: ARRAYS
// PART 2: NESTED ARRAY AND PRACTICAL USE
// ==========================================


// 21. Nested Array
// Ekta array er vitore arekta array thakle
// Take nested array bole

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numbers);


// 22. Nested Array Access
// Prothom index diye inner array access kora hoy

console.log(numbers[0]);

console.log(numbers[1]);

console.log(numbers[2]);


// 23. Nested Array er Element Access

console.log(numbers[0][0]);

console.log(numbers[0][1]);

console.log(numbers[0][2]);


// 24. Second Row Access

console.log(numbers[1][0]);

console.log(numbers[1][1]);

console.log(numbers[1][2]);


// 25. Third Row Access

console.log(numbers[2][0]);

console.log(numbers[2][1]);

console.log(numbers[2][2]);


// 26. Nested Array Update

numbers[0][1] = 100;

console.log(numbers);


// 27. Three Level Nested Array

let data = [
    [
        ["A", "B"],
        ["C", "D"]
    ],
    [
        ["E", "F"],
        ["G", "H"]
    ]
];

console.log(data);


// Three level access

console.log(data[0][0][0]);

console.log(data[0][0][1]);

console.log(data[1][1][0]);


// 28. Nested Array Length

let students = [
    ["Rahim", "Karim"],
    ["Ranbir", "Hasan"],
    ["Sakib", "Rakib"]
];

console.log(students.length);

console.log(students[0].length);


// 29. Nested Array with Loop

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

        console.log(matrix[i][j]);
    }
}


// 30. Array of Objects
// Real project e eta onek beshi use hoy

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mobile",
        price: 20000
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

console.log(products[0]);

console.log(products[0].name);

console.log(products[1].price);


// 31. Array of Objects with Loop

for (let product of products) {

    console.log(product.name);

    console.log(product.price);
}


// 32. Add Element using push
// Array er last e element add kore

let fruits = [
    "Apple",
    "Banana"
];

fruits.push("Mango");

console.log(fruits);


// 33. Remove Last Element using pop

fruits.pop();

console.log(fruits);


// 34. Add Element at Beginning

fruits.unshift("Orange");

console.log(fruits);


// 35. Remove First Element

fruits.shift();

console.log(fruits);


// 36. Check Element Exists

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

console.log(skills.includes("JavaScript"));

console.log(skills.includes("Python"));


// 37. Find Index

console.log(skills.indexOf("React"));

console.log(skills.indexOf("Python"));


// 38. Convert Array to String

let tech = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(tech.join(", "));


// 39. Spread Operator
// Ekta array er value arekta array te copy/add kora jay

let frontend = [
    "HTML",
    "CSS"
];

let backend = [
    "Node.js",
    "Express.js"
];

let fullStack = [
    ...frontend,
    "JavaScript",
    "React",
    ...backend
];

console.log(fullStack);


// 40. Destructuring
// Array theke value alada variable e neya jay

let languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

let [html, css, javascript] = languages;

console.log(html);

console.log(css);

console.log(javascript);


// 41. Skip Array Element

let values = [
    10,
    20,
    30
];

let [, secondValue, thirdValue] = values;

console.log(secondValue);

console.log(thirdValue);


// 42. Practical Example
// User list

let users = [
    "Ranbir",
    "Rahim",
    "Karim",
    "Hasan"
];

for (let user of users) {

    console.log("User:", user);
}


// 43. Practical Example
// Cart items

let cart = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

for (let item of cart) {

    console.log(item.name);

    console.log(item.price);
}


// 44. Important Array Rules

// Array index 0 theke start hoy

// First element
console.log(cart[0]);

// Last element
console.log(cart[cart.length - 1]);

// Array er length
console.log(cart.length);

// Element update
cart[0].price = 45000;

console.log(cart[0]);


// 45. Full Stack Development e Array er Use

let technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB"
];

console.log(technologies);


// Array of Objects API data er moto

let apiUsers = [
    {
        id: 1,
        name: "Ranbir"
    },
    {
        id: 2,
        name: "Rahim"
    }
];

console.log(apiUsers[0].name);

console.log(apiUsers[1].name);