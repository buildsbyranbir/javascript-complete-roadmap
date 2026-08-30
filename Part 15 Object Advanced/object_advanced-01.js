// ==========================================
// PART 15: OBJECT ADVANCED
// PART 1: KEYS, VALUES, ENTRIES, ASSIGN
// ==========================================


// 1. Object.keys()
// Object er sob property/key ke array hisebe return kore

const userr = {
    name: "Ranbir",
    age: 20,
    country: "Bangladesh"
};

console.log(Object.keys(user));


// Output:
// ["name", "age", "country"]


// 2. Object.keys() with Loop
// Object er prottekta key access korte pari

const person = {
    name: "Rahim",
    age: 21,
    city: "Dhaka"
};

const keys = Object.keys(person);

for (let key of keys) {

    console.log(key);
}


// 3. Object.keys() diye Property Count

const student = {
    name: "Ranbir",
    age: 20,
    department: "Computer",
    semester: 6
};

console.log(Object.keys(student).length);


// Object e koyta property ache
// seta ber korar ekta common way


// 4. Object.values()
// Object er sob value ke array hisebe return kore

const userInfo = {
    name: "Ranbir",
    age: 20,
    country: "Bangladesh"
};

console.log(Object.values(userInfo));


// Output:
// ["Ranbir", 20, "Bangladesh"]


// 5. Object.values() with Loop

const marks = {
    bangla: 80,
    english: 75,
    math: 90
};

for (let mark of Object.values(marks)) {

    console.log(mark);
}


// 6. Object.values() diye Total Calculate

const prices = {
    laptop: 50000,
    mouse: 1000,
    keyboard: 1500
};

let total = 0;

for (let price of Object.values(prices)) {

    total += price;
}

console.log(total);


// 7. Object.entries()
// Key ebong value duita eksathe array hisebe return kore

const product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

console.log(Object.entries(product));


// Output er structure erokom:
// [
//     ["name", "Laptop"],
//     ["price", 50000],
//     ["stock", 10]
// ]


// 8. Object.entries() with Loop

for (let [key, value] of Object.entries(product)) {

    console.log(key, value);
}


// 9. Object.entries() diye Dynamic Data

const userData = {
    name: "Ranbir",
    age: 20,
    role: "Developer"
};

for (let [key, value] of Object.entries(userData)) {

    console.log(key + ":", value);
}


// 10. Object.keys(), values(), entries() Difference

const data = {
    name: "Ranbir",
    age: 20
};

console.log(Object.keys(data));

// Sudhu key


console.log(Object.values(data));

// Sudhu value


console.log(Object.entries(data));

// Key ebong value duita


// 11. Object.assign()
// Ekta object er property arekta object e copy kore

const user1 = {
    name: "Ranbir",
    age: 20
};

const user2 = {};

Object.assign(user2, user1);

console.log(user2);


// 12. Object.assign() with Multiple Objects

const basicInfo = {
    name: "Ranbir"
};

const extraInfo = {
    age: 20,
    country: "Bangladesh"
};

const fullInfo = {};

Object.assign(
    fullInfo,
    basicInfo,
    extraInfo
);

console.log(fullInfo);


// 13. Object.assign() diye Existing Property Update

const user = {
    name: "Ranbir",
    age: 20
};

Object.assign(user, {
    age: 21
});

console.log(user);


// 14. Object.assign() diye New Property Add

const profile = {
    name: "Ranbir"
};

Object.assign(profile, {
    age: 20,
    role: "Developer"
});

console.log(profile);


// 15. Object.assign() diye Object Copy

const original = {
    name: "Ranbir",
    age: 20
};

const copy = Object.assign({}, original);

console.log(copy);


// 16. Object.assign() vs Spread

const first = {
    name: "Ranbir"
};

const second = {
    age: 20
};


// Object.assign()
const result1 = Object.assign(
    {},
    first,
    second
);


// Spread
const result2 = {
    ...first,
    ...second
};

console.log(result1);

console.log(result2);