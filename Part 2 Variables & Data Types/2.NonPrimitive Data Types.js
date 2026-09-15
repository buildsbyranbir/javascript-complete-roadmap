
/*
  JavaScript Non-Primitive Data Types

  JavaScript e Non-Primitive Data Type mainly 3 ta:
  1. Object
  2. Array
  3. Function

  Egula Reference Type.

  Mane holo, object ba array er copy korar somoy
  tar actual value er bodole memory reference copy hoy.
*/


// ==================================================
// 1. OBJECT
// ==================================================

// Object holo key-value pair er collection.
// Ekta object er moddhe related information rakha hoy.
// Example: user er name, age, country etc.

const user = {
  name: "Ranbir",
  age: 20,
  country: "Bangladesh",
  isStudent: true
};

console.log(user);


// ==================================================
// Object Property Access
// ==================================================

// Dot Notation:
// Object er property access korar jonno use hoy.

console.log(user.name);
console.log(user.age);


// Bracket Notation:
// Property name string hisebe likhte hoy.
// Jokhon property name variable diye access korte hoy,
// tokhon bracket notation useful.

console.log(user["country"]);


// ==================================================
// Object Property Add
// ==================================================

// Existing object er moddhe notun property add kora jay.
// Nicher code e email property add hocche.

user.email = "ranbir@gmail.com";

console.log(user);


// ==================================================
// Object Property Update
// ==================================================

// Existing property er value change kora jay.
// Ekhane age er value 20 theke 21 hocche.

user.age = 21;

console.log(user);


// ==================================================
// Object Property Delete
// ==================================================

// delete operator diye object er property remove kora jay.

delete user.country;

console.log(user);


// ==================================================
// Object Method
// ==================================================

// Object er vitore function thakle take Method bole.
// this keyword current object ke refer kore.
// this.name mane current object er name property.

const person = {
  name: "Ranbir",

  greet() {
    console.log("Hello " + this.name);
  }
};

person.greet();


// ==================================================
// Object.keys()
// ==================================================

// Object.keys() object er sob property name
// ekta array er moddhe return kore.

console.log(Object.keys(user));


// ==================================================
// Object.values()
// ==================================================

// Object.values() object er sob value
// ekta array er moddhe return kore.

console.log(Object.values(user));


// ==================================================
// Object.entries()
// ==================================================

// Object.entries() prottek property ke
// [key, value] array hisebe return kore.

console.log(Object.entries(user));


// ==================================================
// hasOwnProperty()
// ==================================================

// Check kore object er nijer moddhe property ache kina.
// Thakle true, na thakle false return kore.

console.log(user.hasOwnProperty("email"));
console.log(user.hasOwnProperty("phone"));


// ==================================================
// Object Destructuring
// ==================================================

// Destructuring diye object theke property value
// easily alada variable e store kora jay.

const student = {
  fullName: "Rahim",
  department: "Computer",
  semester: 5
};

const { fullName, department } = student;

console.log(fullName);
console.log(department);


// ==================================================
// Object Spread Operator
// ==================================================

// Spread operator (...) diye object er property
// notun object er moddhe copy kora jay.

// Ete original object change hoy na
// jodi notun object e property update kori.

const userInfo = {
  city: "Dhaka"
};

const allInfo = {
  ...student,
  ...userInfo
};

console.log(allInfo);


// ==================================================
// Nested Object
// ==================================================

// Ekta object er vitore arekta object thakle
// take Nested Object bole.

const employee = {
  name: "Karim",

  address: {
    city: "Dinajpur",
    zip: 5200
  }
};

// Nested property access
// employee.address er moddhe city ache.

console.log(employee.address.city);


// ==================================================
// Optional Chaining
// ==================================================

// Optional chaining (?) diye safely property access
// kora jay.

// Jodi kono property na thake,
// tahole error na diye undefined return kore.

console.log(employee.address?.city);
console.log(employee.office?.room);


// ==================================================
// 2. ARRAY
// ==================================================

// Array holo multiple value ekta variable er moddhe
// store korar data structure.

// Array er index 0 theke start hoy.

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);


// ==================================================
// Array Access
// ==================================================

// Index diye array er item access kora hoy.
// First item index 0 te thake.

console.log(fruits[0]);
console.log(fruits[1]);


// ==================================================
// Array Length
// ==================================================

// length diye array te koyta item ache
// seta jana jay.

console.log(fruits.length);


// ==================================================
// Array Add Item
// ==================================================

// push():
// Array er last e notun item add kore.

fruits.push("Orange");


// unshift():
// Array er first e notun item add kore.

fruits.unshift("Lichi");

console.log(fruits);


// ==================================================
// Array Remove Item
// ==================================================

// pop():
// Array er last item remove kore.

fruits.pop();


// shift():
// Array er first item remove kore.

fruits.shift();

console.log(fruits);


// ==================================================
// splice()
// ==================================================

// splice(start, deleteCount)

// start = kon index theke kaj shuru hobe
// deleteCount = koyta item remove hobe

const numbers = [10, 20, 30, 40, 50];

numbers.splice(1, 1);

// Index 1 theke 1 ta item remove hobe.
// 20 remove hobe.

console.log(numbers);


// ==================================================
// slice()
// ==================================================

// slice(start, end)

// Ekta array er specific part copy kore.
// Original array change kore na.

// Index 1 theke index 4 er age porjonto.
// Tai 20, 30, 40 return hobe.

console.log(numbers.slice(1, 4));


// ==================================================
// includes()
// ==================================================

// Check kore array er moddhe kono value ache kina.
// Thakle true, na thakle false.

console.log(numbers.includes(30));


// ==================================================
// indexOf()
// ==================================================

// Kono value er index return kore.
// Value na thakle -1 return kore.

console.log(numbers.indexOf(40));


// ==================================================
// join()
// ==================================================

// Array er sob item ke string e convert kore.
// Separator diye item gula join kore.

console.log(numbers.join("-"));


// ==================================================
// reverse()
// ==================================================

// Array er item er order ulta kore.
// Original array change kore.

numbers.reverse();

console.log(numbers);


// ==================================================
// sort()
// ==================================================

// sort() array er item sort kore.

// Number sort korar somoy compare function use kora
// important. Na hole JavaScript number ke string
// hisebe sort korte pare.

const marks = [70, 20, 100, 50];

marks.sort((a, b) => a - b);

console.log(marks);


// ==================================================
// for...of
// ==================================================

// for...of diye array er prottek value
// ekta ekta kore access kora jay.

for (const item of numbers) {
  console.log(item);
}


// ==================================================
// Array Destructuring
// ==================================================

// Array theke value alada variable e store kora jay.
// Variable gula index onujayi value pabe.

const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);
console.log(second);


// ==================================================
// Array Spread Operator
// ==================================================

// Spread operator diye array er item gula
// notun array er moddhe copy kora jay.

// Duita array combine korar jonno useful.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


// ==================================================
// IMPORTANT ARRAY METHODS
// ==================================================

const nums = [1, 2, 3, 4, 5];


// ==================================================
// map()
// ==================================================

// map() array er prottek item er upor kaj kore
// notun array return kore.

// React e data render korar somoy map()
// onek beshi use hoy.

// Ekhane prottek number double hocche.

const double = nums.map((num) => num * 2);

console.log(double);


// ==================================================
// filter()
// ==================================================

// filter() condition check kore.
// Je item condition true kore,
// sudhu sei item gula niye notun array banay.

// Ekhane sudhu even number gula pabo.

const even = nums.filter((num) => num % 2 === 0);

console.log(even);


// ==================================================
// find()
// ==================================================

// find() condition true kora first item return kore.
// Kono item na pele undefined return kore.

// Ekhane 3 er cheye boro first number pabo.

const findNum = nums.find((num) => num > 3);

console.log(findNum);


// ==================================================
// some()
// ==================================================

// Check kore array er at least ekta item
// condition satisfy kore kina.

// Ekta item true holei true return kore.

console.log(nums.some((num) => num > 4));


// ==================================================
// every()
// ==================================================

// Check kore array er sob item
// condition satisfy kore kina.

// Sob item true hole true return kore.

console.log(nums.every((num) => num > 0));


// ==================================================
// reduce()
// ==================================================

// reduce() diye array er sob value combine kore
// ekta final result banano jay.

// Ekhane sob number jog kore total ber kora hocche.

// sum = previous result
// num = current item
// 0 = initial value

const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total);


// ==================================================
// forEach()
// ==================================================

// forEach() array er prottek item er upor
// ekta function execute kore.

// map() er moto notun array return kore na.
// Sudhu prottek item er upor kaj kore.

nums.forEach((num) => {
  console.log(num);
});


// ==================================================
// 3. FUNCTION
// ==================================================

// Function holo reusable code block.
// Ekbar function likhe multiple times call kora jay.


// ==================================================
// Function Declaration
// ==================================================

// function keyword diye function declare kora hoy.
// Parameter input receive kore.
// return result back kore.

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Ranbir"));


// ==================================================
// Function Expression
// ==================================================

// Function ke ekta variable er moddhe store korle
// take Function Expression bole.

const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));


// ==================================================
// Arrow Function
// ==================================================

// Arrow function holo function lekhar short syntax.
// React e arrow function onek use hoy.

// Ekhane implicit return use kora hoyeche.
// Tai return keyword lekha lageni.

const multiply = (a, b) => a * b;

console.log(multiply(5, 6));


// ==================================================
// Default Parameter
// ==================================================

// Function call korar somoy argument na dile
// default value use hoy.

// Ekhane name na dile Guest show korbe.

const welcome = (name = "Guest") => {
  return `Welcome ${name}`;
};

console.log(welcome());
console.log(welcome("Ranbir"));


// ==================================================
// Rest Parameter
// ==================================================

// Rest parameter (...) multiple argument ke
// ekta array er moddhe collect kore.

// Ekhane joto marks dibo sob marks array te jabe.

function totalMarks(...marks) {
  return marks.reduce((sum, num) => sum + num, 0);
}

console.log(totalMarks(10, 20, 30, 40));


// ==================================================
// Callback Function
// ==================================================

// Je function arekta function er argument hisebe
// pass kora hoy take Callback Function bole.

// Ekhane display function callback hisebe pass hocche.

function display(message) {
  console.log(message);
}

function processUser(callback) {
  callback("Login Success");
}

processUser(display);


// ==================================================
// Higher Order Function
// ==================================================

// Je function arekta function ke argument hisebe
// receive kore ba function return kore,
// take Higher Order Function bole.

// Ekhane calculator operation function receive korche.

function calculator(a, b, operation) {
  return operation(a, b);
}

console.log(calculator(10, 5, (x, y) => x + y));
console.log(calculator(10, 5, (x, y) => x - y));


// ==================================================
// 4. REFERENCE TYPE
// ==================================================

// Object ebong Array reference type.

// Primitive value copy korle alada value copy hoy.
// Kintu object copy korle reference copy hoy.


// ==================================================
// Pass By Reference er Example
// ==================================================

const obj1 = {
  name: "Ranbir"
};

// Ekhane obj2, obj1 er same object reference ke
// point korche.

// Mane obj1 ebong obj2 eki object er sathe connected.

const obj2 = obj1;

obj2.name = "Developer";

// obj2 diye name change korle obj1 eo change hobe.
// Karon duita variable same object refer korche.

console.log(obj1.name);
console.log(obj2.name);


// ==================================================
// Object Copy Using Spread
// ==================================================

// Spread operator diye object er shallow copy
// banano jay.

// Ekhane original object er property gula
// notun object e copy hocche.

const original = {
  name: "Rahim"
};

const copy = {
  ...original
};

// Ekhon copy alada object.
// Tai copy change korle original change hobe na.

copy.name = "Karim";

console.log(original.name);
console.log(copy.name);


// ==================================================
// Array Copy Using Spread
// ==================================================

// Spread operator diye array er shallow copy
// banano jay.

// Ekhane oldArray ebong newArray alada array.

const oldArray = [1, 2, 3];

const newArray = [...oldArray];

newArray.push(4);

console.log(oldArray);
console.log(newArray);


// ==================================================
// typeof
// ==================================================

// typeof diye kono value er type check kora hoy.

// Object er jonno typeof object return kore.
// Array er jonnoo typeof object return kore.
// Function er jonno typeof function return kore.

console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});