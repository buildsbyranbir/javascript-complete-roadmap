// ==========================================
// Part 8: JavaScript Loops
// ==========================================


// ==========================================
// 1. for loop
// ==========================================

// for loop use kora hoy jokhon amra jani
// koybar code run korte hobe

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output
// 1
// 2
// 3
// 4
// 5


// for loop er structure

// for (initialization; condition; update) {
//     code
// }


// initialization
// loop shuru howar age variable create hoy

// condition
// condition true thakle loop cholbe

// update
// protibar loop sesh howar por variable update hobe


// Example

for (let i = 0; i < 10; i++) {
    console.log("Hello");
}

// Hello 10 bar print hobe



// ==========================================
// 2. for loop diye array traverse
// ==========================================

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// ekhane i holo array index
// fruits.length diye array er total item paoa jay
// fruits[i] diye current item paoa jay



// ==========================================
// 3. Reverse for loop
// ==========================================

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Output
// 5
// 4
// 3
// 2
// 1



// ==========================================
// 4. for loop with step
// ==========================================

// protibar 1 kore na bere 2 kore barbe

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Output
// 0
// 2
// 4
// 6
// 8
// 10



// ==========================================
// 5. while loop
// ==========================================

// while loop use kora hoy jokhon
// condition true thaka porjonto loop chalate chai

let i = 1;

while (i <= 5) {
    console.log(i);

    i++;
}

// Output
// 1
// 2
// 3
// 4
// 5


// while loop er structure

// while (condition) {
//     code
// }


// Important
// while loop er moddhe variable update na korle
// infinite loop hote pare



// ==========================================
// 6. while loop diye array traverse
// ==========================================

const users = ["Rahim", "Karim", "Jamal", "Hasan"];

let index = 0;

while (index < users.length) {
    console.log(users[index]);

    index++;
}



// ==========================================
// 7. do while loop
// ==========================================

// do while loop er special feature holo
// condition false holeo code minimum ekbar run korbe

let number = 10;

do {
    console.log(number);

    number++;
} while (number < 5);

// Output
// 10


// ekhane condition false
// karon 10 < 5 false
// tarporo do block ekbar execute hoyeche



// ==========================================
// 8. do while er arekti example
// ==========================================

let count = 1;

do {
    console.log(count);

    count++;
} while (count <= 5);

// Output
// 1
// 2
// 3
// 4
// 5



// ==========================================
// 9. for...of loop
// ==========================================

// for...of mainly iterable data er value pawar jonno use hoy
// Array er khetre eta khub beshi use hoy

const names = ["Rahim", "Karim", "Jamal"];

for (const name of names) {
    console.log(name);
}

// Output
// Rahim
// Karim
// Jamal


// ekhane directly value pachi
// index manually maintain korte hocche na



// ==========================================
// 10. for...of diye string traverse
// ==========================================

const word = "JavaScript";

for (const character of word) {
    console.log(character);
}

// prottekta character alada alada print hobe



// ==========================================
// 11. for...of diye array of objects
// ==========================================

const students = [
    {
        name: "Rahim",
        age: 20
    },
    {
        name: "Karim",
        age: 22
    },
    {
        name: "Jamal",
        age: 21
    }
];

for (const student of students) {
    console.log(student.name);
    console.log(student.age);
}



// ==========================================
// 12. for...in loop
// ==========================================

// for...in mainly object er property ba key pawar jonno use hoy

const person = {
    name: "Rahim",
    age: 25,
    city: "Dhaka"
};

for (const key in person) {
    console.log(key);
}

// Output
// name
// age
// city



// ==========================================
// 13. for...in diye key and value
// ==========================================

for (const key in person) {
    console.log(key, person[key]);
}

// Output
// name Rahim
// age 25
// city Dhaka


// ekhane person[key] diye value paoa jacche



// ==========================================
// 14. for...in diye object traverse
// ==========================================

const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    available: true
};

for (const property in product) {
    console.log(property);
    console.log(product[property]);
}



// ==========================================
// 15. for...of vs for...in
// ==========================================

// for...of
// mainly value pawar jonno

const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
    console.log(color);
}


// for...in
// mainly key ba index pawar jonno

for (const index in colors) {
    console.log(index);
}

// Output
// 0
// 1
// 2


// Array er jonno generally for...of beshi readable
// Object er jonno for...in useful



// ==========================================
// 16. break
// ==========================================

// break use korle loop completely stop hoye jay

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output
// 1
// 2
// 3
// 4


// jokhon i er value 5 hoy
// tokhon break loop completely stop kore dey



// ==========================================
// 17. break with while loop
// ==========================================

let num = 1;

while (num <= 10) {

    if (num === 6) {
        break;
    }

    console.log(num);

    num++;
}

// Output
// 1
// 2
// 3
// 4
// 5



// ==========================================
// 18. continue
// ==========================================

// continue current iteration skip kore
// kintu loop completely stop kore na

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output
// 1
// 2
// 4
// 5


// 3 skip hoyeche
// kintu loop continue koreche



// ==========================================
// 19. continue diye even number skip
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

// Output
// 1
// 3
// 5
// 7
// 9



// ==========================================
// 20. break and continue difference
// ==========================================

// break
// puro loop stop kore

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);
}

// Output
// 1
// 2


// continue
// sudhu current iteration skip kore

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output
// 1
// 2
// 4
// 5



// ==========================================
// 21. Nested loop
// ==========================================

// ekta loop er vitore arekta loop thakle
// take nested loop bole

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}


// Outer loop er prottekbar run er jonno
// inner loop full run kore



// ==========================================
// 22. Nested loop diye multiplication table
// ==========================================

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 10; j++) {

        console.log(i + " x " + j + " = " + i * j);
    }
}



// ==========================================
// 23. Loop er moddhe condition
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}



// ==========================================
// 24. Array theke specific value khuja
// ==========================================

const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {

    if (number === 30) {
        console.log("Number found");
        break;
    }
}



// ==========================================
// 25. Array theke specific value skip
// ==========================================

const scores = [50, 80, 30, 90, 40];

for (const score of scores) {

    if (score < 50) {
        continue;
    }

    console.log(score);
}

// 50 er niche je score ache
// segulo skip hobe



// ==========================================
// 26. Loop diye total sum
// ==========================================

const prices = [100, 200, 300, 400];

let total = 0;

for (const price of prices) {
    total = total + price;
}

console.log(total);

// Output
// 1000



// ==========================================
// 27. Loop diye average
// ==========================================

const marks = [70, 80, 90, 60, 100];

let sum = 0;

for (const mark of marks) {
    sum += mark;
}

const average = sum / marks.length;

console.log(average);

// Output
// 80



// ==========================================
// 28. Loop diye largest number
// ==========================================

const nums = [20, 50, 10, 90, 30];

let largest = nums[0];

for (const num of nums) {

    if (num > largest) {
        largest = num;
    }
}

console.log(largest);

// Output
// 90



// ==========================================
// 29. Loop diye smallest number
// ==========================================

const values = [20, 50, 10, 90, 30];

let smallest = values[0];

for (const value of values) {

    if (value < smallest) {
        smallest = value;
    }
}

console.log(smallest);

// Output
// 10



// ==========================================
// 30. Loop diye string reverse
// ==========================================

const text = "Hello";

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

console.log(reversed);

// Output
// olleH



// ==========================================
// 31. Loop diye vowel count
// ==========================================

const sentence = "javascript";

let vowelCount = 0;

for (const character of sentence) {

    if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ) {
        vowelCount++;
    }
}

console.log(vowelCount);

// Output
// 3



// ==========================================
// 32. Loop diye object er data check
// ==========================================

const user = {
    name: "Ranbir",
    age: 21,
    skill: "JavaScript",
    country: "Bangladesh"
};

for (const key in user) {

    console.log(key + " : " + user[key]);
}



// ==========================================
// 33. for loop diye multiple condition
// ==========================================

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// 3 and 5 duita diye divisible number print hobe



// ==========================================
// 34. Infinite loop
// ==========================================

// Nicher code dangerous
// karon i update hocche na

// let i = 1;

// while (i <= 5) {
//     console.log(i);
// }


// eta infinite loop hoye jabe


// Correct version

let counter = 1;

while (counter <= 5) {
    console.log(counter);

    counter++;
}



// ==========================================
// 35. for loop without update
// ==========================================

// technically possible

let x = 1;

for (; x <= 5;) {
    console.log(x);

    x++;
}



// ==========================================
// 36. for loop with multiple variables
// ==========================================

for (let i = 1, j = 5; i <= 5; i++, j--) {
    console.log(i, j);
}

// Output
// 1 5
// 2 4
// 3 3
// 4 2
// 5 1



// ==========================================
// 37. Nested loop with break
// ==========================================

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

        if (j === 3) {
            break;
        }

        console.log(i, j);
    }
}


// break ekhane inner loop ke stop korbe
// outer loop automatically stop hobe na



// ==========================================
// 38. Nested loop with continue
// ==========================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 5; j++) {

        if (j === 3) {
            continue;
        }

        console.log(i, j);
    }
}


// sudhu inner loop er current iteration skip hobe



// ==========================================
// 39. Labeled break
// ==========================================

// Advanced concept
// nested loop theke directly outer loop break korte use kora jay

outerLoop:

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

        if (i === 3 && j === 3) {
            break outerLoop;
        }

        console.log(i, j);
    }
}



// ==========================================
// 40. Labeled continue
// ==========================================

// Advanced concept
// outer loop er next iteration e chole jete pari

outerLoop:

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (j === 2) {
            continue outerLoop;
        }

        console.log(i, j);
    }
}



// ==========================================
// 41. Real world example
// Login attempt
// ==========================================

const correctPassword = "12345";

const passwords = [
    "11111",
    "22222",
    "33333",
    "12345"
];

for (const password of passwords) {

    console.log("Checking password");

    if (password === correctPassword) {
        console.log("Login successful");
        break;
    }
}



// ==========================================
// 42. Real world example
// Product search
// ==========================================

const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor"
];

const searchProduct = "Keyboard";

for (const product of products) {

    if (product === searchProduct) {
        console.log("Product found");
        break;
    }
}



// ==========================================
// 43. Real world example
// Active users
// ==========================================

const usersList = [
    {
        name: "Rahim",
        active: true
    },
    {
        name: "Karim",
        active: false
    },
    {
        name: "Jamal",
        active: true
    }
];

for (const user of usersList) {

    if (!user.active) {
        continue;
    }

    console.log(user.name);
}

// sudhu active user print hobe



// ==========================================
// 44. Real world example
// Cart total
// ==========================================

const cart = [
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
        price: 2000
    }
];

let cartTotal = 0;

for (const item of cart) {
    cartTotal += item.price;
}

console.log(cartTotal);

// Output
// 53000



// ==========================================
// 45. Loop er important comparison
// ==========================================

// for
// jokhon koybar loop cholbe seta jana thake

// while
// condition based loop
// koybar cholbe age theke jana na thakleo hoy

// do while
// code minimum ekbar execute korte hobe

// for...of
// iterable er value pawar jonno
// Array and String er jonno khub useful

// for...in
// Object er key pawar jonno useful

// break
// loop completely stop kore

// continue
// current iteration skip kore



// ==========================================
// 46. Full practice example
// ==========================================

const studentsData = [
    {
        name: "Rahim",
        marks: 85
    },
    {
        name: "Karim",
        marks: 45
    },
    {
        name: "Jamal",
        marks: 75
    },
    {
        name: "Hasan",
        marks: 30
    }
];

for (const student of studentsData) {

    if (student.marks < 40) {
        console.log(student.name + " failed");
        continue;
    }

    if (student.marks >= 80) {
        console.log(student.name + " got A");
    } else if (student.marks >= 70) {
        console.log(student.name + " got B");
    } else {
        console.log(student.name + " passed");
    }
}



// ==========================================
// 47. Full stack developer hisebe important
// ==========================================

// Real project e loop beshi use hobe

// Array er data display korte
// API response handle korte
// Product list display korte
// User list display korte
// Cart item calculate korte
// Search result check korte
// Data filter korte
// Object er property read korte
// Form data process korte
// Database theke asha data process korte
// Validation korte
// Authentication related data process korte
// Backend response process korte



// ==========================================
// 48. Most important rules
// ==========================================

// Rule 1
// Array er value niye kaj korle
// for...of khub useful

// Rule 2
// Object er key niye kaj korle
// for...in useful

// Rule 3
// Exact koybar loop cholbe janle
// for loop useful

// Rule 4
// Condition true thaka porjonto chalate chaile
// while useful

// Rule 5
// Minimum ekbar code execute korte hole
// do while useful

// Rule 6
// Loop completely stop korte
// break use korte hoy

// Rule 7
// Current iteration skip korte
// continue use korte hoy

// Rule 8
// Loop er moddhe variable update korte bhul kora jabe na
// nahole infinite loop hote pare



// ==========================================
// 49. Quick revision
// ==========================================

// for

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// while

let a = 0;

while (a < 5) {
    console.log(a);
    a++;
}


// do while

let b = 0;

do {
    console.log(b);
    b++;
} while (b < 5);


// for of

const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}


// for in

const obj = {
    name: "Ranbir",
    age: 21
};

for (const key in obj) {
    console.log(key, obj[key]);
}


// break

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


// continue

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}