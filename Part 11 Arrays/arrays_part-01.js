// ==========================================
// PART 11: ARRAYS
// PART 1: CREATE, ACCESS, UPDATE, LENGTH
// ==========================================


// 1. Create Array
// Array er moddhe ekadhik value rakha jay

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


// 2. Empty Array
// Empty array create kora

let students = [];

console.log(students);


// 3. Array with Numbers

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);


// 4. Mixed Array
// Array te different type er value rakha jay

let mixed = [
    "Ranbir",
    20,
    true,
    null
];

console.log(mixed);


// 5. Access Array Element
// Array er index 0 theke start hoy

let names = [
    "Rahim",
    "Karim",
    "Ranbir"
];

console.log(names[0]);

console.log(names[1]);

console.log(names[2]);


// 6. First Element Access

console.log(names[0]);


// 7. Last Element Access
// Last element pete length - 1 use kora hoy

console.log(names[names.length - 1]);


// 8. Update Array Element
// Index use kore array er value change kora jay

let colors = [
    "Red",
    "Blue",
    "Green"
];

colors[1] = "Yellow";

console.log(colors);


// 9. Multiple Elements Update

colors[0] = "Black";

colors[2] = "White";

console.log(colors);


// 10. Array Length
// length diye array te koyta element ache jana jay

let fruitsList = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

console.log(fruitsList.length);


// 11. Empty Array Length

let emptyArray = [];

console.log(emptyArray.length);


// 12. Access Last Element

let languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

let lastLanguage = languages[languages.length - 1];

console.log(lastLanguage);


// 13. Change Array Length

let items = [
    "A",
    "B",
    "C",
    "D"
];

items.length = 2;

console.log(items);


// 14. Array Index Check

let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(skills[0]);

console.log(skills[2]);


// 15. Invalid Index
// Je index array te nei
// Tar value undefined hobe

console.log(skills[10]);


// 16. Array with const
// const array er reference change kora jay na
// Kintu array er element change kora jay

const users = [
    "Rahim",
    "Karim"
];

users[0] = "Ranbir";

console.log(users);


// 17. Array er moddhe object

const userList = [
    {
        name: "Ranbir",
        age: 20
    },
    {
        name: "Rahim",
        age: 21
    }
];

console.log(userList);


// Object er value access

console.log(userList[0].name);

console.log(userList[1].age);


// 18. Array Check

console.log(Array.isArray(users));

console.log(Array.isArray("Hello"));


// 19. Array Copy

let original = [
    "HTML",
    "CSS",
    "JavaScript"
];

let copy = [...original];

console.log(copy);


// 20. Basic Array Practice

let webSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];

console.log(webSkills[0]);

console.log(webSkills[2]);

console.log(webSkills[4]);

console.log(webSkills.length);