// ========================================
// JavaScript Array Methods
// ========================================


// 1. push()
// Array er seshe notun element add kore

let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
// ["Apple", "Banana", "Mango"]


// Ek sathe multiple element add kora jay

fruits.push("Orange", "Grapes");

console.log(fruits);
// ["Apple", "Banana", "Mango", "Orange", "Grapes"]


// ========================================


// 2. pop()
// Array er sesher element remove kore

let fruits2 = ["Apple", "Banana", "Mango"];

fruits2.pop();

console.log(fruits2);
// ["Apple", "Banana"]


// pop() je element remove kore seta return kore

let fruits3 = ["Apple", "Banana", "Mango"];

let removedFruit = fruits3.pop();

console.log(removedFruit);
// Mango


// ========================================


// 3. shift()
// Array er prothom element remove kore

let fruits4 = ["Apple", "Banana", "Mango"];

fruits4.shift();

console.log(fruits4);
// ["Banana", "Mango"]


// shift() je element remove kore seta return kore

let fruits5 = ["Apple", "Banana", "Mango"];

let firstFruit = fruits5.shift();

console.log(firstFruit);
// Apple


// ========================================


// 4. unshift()
// Array er surute notun element add kore

let fruits6 = ["Banana", "Mango"];

fruits6.unshift("Apple");

console.log(fruits6);
// ["Apple", "Banana", "Mango"]


// Ek sathe multiple element add kora jay

fruits6.unshift("Orange", "Grapes");

console.log(fruits6);
// ["Orange", "Grapes", "Apple", "Banana", "Mango"]


// ========================================


// 5. splice()
// Splice diye array theke element remove kora jay

let fruits7 = ["Apple", "Banana", "Mango", "Orange"];

fruits7.splice(1, 1);

console.log(fruits7);
// ["Apple", "Mango", "Orange"]


// 1 = kon index theke start korbe
// 1 = koyta element remove korbe


// Splice diye multiple element remove kora jay

let fruits8 = ["Apple", "Banana", "Mango", "Orange"];

fruits8.splice(1, 2);

console.log(fruits8);
// ["Apple", "Orange"]


// Splice diye notun element add kora jay

let fruits9 = ["Apple", "Mango"];

fruits9.splice(1, 0, "Banana");

console.log(fruits9);
// ["Apple", "Banana", "Mango"]


// 0 mane kono element remove korbe na
// Sudhu notun element add korbe


// Splice diye replace kora jay

let fruits10 = ["Apple", "Banana", "Mango"];

fruits10.splice(1, 1, "Orange");

console.log(fruits10);
// ["Apple", "Orange", "Mango"]


// 1 number index er Banana remove hoye
// Orange diye replace hoyeche


// Splice removed element return kore

let fruits11 = ["Apple", "Banana", "Mango"];

let removed = fruits11.splice(1, 1);

console.log(removed);
// ["Banana"]


// ========================================


// 6. slice()
// Array er ekta part copy kore notun array dey
// Original array change kore na

let fruits12 = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits12.slice(1, 3);

console.log(result);
// ["Banana", "Mango"]


// 1 = starting index
// 3 = ending index
// Ending index include hoy na


// Last theke element nite pari

let fruits13 = ["Apple", "Banana", "Mango", "Orange"];

let lastFruits = fruits13.slice(-2);

console.log(lastFruits);
// ["Mango", "Orange"]


// Puro array copy kora jay

let numbers = [10, 20, 30, 40];

let copyNumbers = numbers.slice();

console.log(copyNumbers);
// [10, 20, 30, 40]


// ========================================


// 7. concat()
// Duita ba tar beshi array combine kore

let frontend = ["HTML", "CSS", "JavaScript"];

let backend = ["Node.js", "Express"];

let skills = frontend.concat(backend);

console.log(skills);
// ["HTML", "CSS", "JavaScript", "Node.js", "Express"]


// Multiple array combine kora jay

let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let allNumbers = a.concat(b, c);

console.log(allNumbers);
// [1, 2, 3, 4, 5, 6]


// concat() original array change kore na


// ========================================


// 8. join()
// Array er sob element ke ekta string e convert kore

let fruits14 = ["Apple", "Banana", "Mango"];

let fruitText = fruits14.join();

console.log(fruitText);
// Apple,Banana,Mango


// Nijer separator use kora jay

let fruits15 = ["Apple", "Banana", "Mango"];

let fruitText2 = fruits15.join(" ");

console.log(fruitText2);
// Apple Banana Mango


// Comma and space diye join

let skills2 = ["HTML", "CSS", "JavaScript"];

let skillText = skills2.join(", ");

console.log(skillText);
// HTML, CSS, JavaScript


// ========================================


// 9. reverse()
// Array er order ulta kore dey

let numbers2 = [1, 2, 3, 4, 5];

numbers2.reverse();

console.log(numbers2);
// [5, 4, 3, 2, 1]


// String reverse korar jonno
// split + reverse + join use kora jay

let word = "JavaScript";

let reversedWord = word.split("").reverse().join("");

console.log(reversedWord);
// tpircSavaJ


// ========================================


// 10. sort()
// Array er element sort kore

let fruits16 = ["Mango", "Apple", "Orange", "Banana"];

fruits16.sort();

console.log(fruits16);
// ["Apple", "Banana", "Mango", "Orange"]


// Number sort korar somoy important

let numbers3 = [10, 5, 100, 25, 2];

numbers3.sort();

console.log(numbers3);
// [10, 100, 2, 25, 5]

// Karon default sort number ke string hisebe compare kore


// Number ascending order

let numbers4 = [10, 5, 100, 25, 2];

numbers4.sort((a, b) => a - b);

console.log(numbers4);
// [2, 5, 10, 25, 100]


// Number descending order

let numbers5 = [10, 5, 100, 25, 2];

numbers5.sort((a, b) => b - a);

console.log(numbers5);
// [100, 25, 10, 5, 2]


// ========================================


// Object array sort kora

let users = [
    { name: "Rahim", age: 25 },
    { name: "Karim", age: 20 },
    { name: "Hasan", age: 30 }
];


// Age onujayi ascending sort

users.sort((a, b) => a.age - b.age);

console.log(users);


// Age onujayi descending sort

users.sort((a, b) => b.age - a.age);

console.log(users);


// Name onujayi sort

users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);


// ========================================
// Important Summary
// ========================================


// push()
// Seshe element add kore


// pop()
// Sesher element remove kore


// shift()
// Prothom element remove kore


// unshift()
// Surute element add kore


// splice()
// Add, remove, replace sob kora jay


// slice()
// Array er part copy kore
// Original array change kore na


// concat()
// Multiple array combine kore


// join()
// Array ke string e convert kore


// reverse()
// Array er order ulta kore


// sort()
// Array sort kore


// ========================================
// Original Array Change Kore
// ========================================

// push()
// pop()
// shift()
// unshift()
// splice()
// reverse()
// sort()


// ========================================
// Original Array Change Kore Na
// ========================================

// slice()
// concat()
// join()