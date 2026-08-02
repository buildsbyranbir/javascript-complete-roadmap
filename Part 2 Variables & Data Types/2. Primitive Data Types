// ============================================
// JavaScript Non-Primitive Data Types
// Full Stack MERN Web Developer
// ============================================

// JavaScript e Non-Primitive Data Type mainly 3 ta
// 1. Object
// 2. Array
// 3. Function

// Non-Primitive Data Type gula Reference Type
// Mane copy korle same memory reference use kore

// ============================================
// 1. Object
// ============================================

// Object = Key : Value pair

const user = {
  name: "Ranbir",
  age: 20,
  country: "Bangladesh",
  isStudent: true,
};

console.log(user);

// Property Access

console.log(user.name);
console.log(user.age);

// Bracket Notation

console.log(user["country"]);

// ============================================
// Object Property Add
// ============================================

user.email = "ranbir@gmail.com";

console.log(user);

// ============================================
// Object Property Update
// ============================================

user.age = 21;

console.log(user);

// ============================================
// Object Property Delete
// ============================================

delete user.country;

console.log(user);

// ============================================
// Object Methods
// ============================================

const person = {
  name: "Ranbir",

  greet() {
    console.log("Hello " + this.name);
  },
};

person.greet();

// ============================================
// Object.keys()
// ============================================

console.log(Object.keys(user));

// ============================================
// Object.values()
// ============================================

console.log(Object.values(user));

// ============================================
// Object.entries()
// ============================================

console.log(Object.entries(user));

// ============================================
// hasOwnProperty()
// ============================================

console.log(user.hasOwnProperty("email"));
console.log(user.hasOwnProperty("phone"));

// ============================================
// Object Destructuring
// ============================================

const student = {
  fullName: "Rahim",
  department: "Computer",
  semester: 5,
};

const { fullName, department } = student;

console.log(fullName);
console.log(department);

// ============================================
// Object Spread Operator
// ============================================

const userInfo = {
  city: "Dhaka",
};

const allInfo = {
  ...student,
  ...userInfo,
};

console.log(allInfo);

// ============================================
// Nested Object
// ============================================

const employee = {
  name: "Karim",

  address: {
    city: "Dinajpur",
    zip: 5200,
  },
};

console.log(employee.address.city);

// ============================================
// Optional Chaining
// ============================================

console.log(employee.address?.city);
console.log(employee.office?.room);

// ============================================
// ============================================
// 2. Array
// ============================================

// Array = Multiple Value Store kore

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);

// Access Value

console.log(fruits[0]);
console.log(fruits[1]);

// Length

console.log(fruits.length);

// ============================================
// Add Item
// ============================================

// Last e add

fruits.push("Orange");

// First e add

fruits.unshift("Lichi");

console.log(fruits);

// ============================================
// Remove Item
// ============================================

// Last remove

fruits.pop();

// First remove

fruits.shift();

console.log(fruits);

// ============================================
// splice()
// ============================================

// Index 1 theke 1 ta remove

fruits.splice(1, 1);

console.log(fruits);

// ============================================
// slice()
// ============================================

const numbers = [10,20,30,40,50];

console.log(numbers.slice(1,4));

// ============================================
// includes()
// ============================================

console.log(numbers.includes(20));

// ============================================
// indexOf()
// ============================================

console.log(numbers.indexOf(30));

// ============================================
// join()
// ============================================

console.log(numbers.join("-"));

// ============================================
// reverse()
// ============================================

console.log(numbers.reverse());

// ============================================
// sort()
// ============================================

const marks = [70,20,100,50];

marks.sort((a,b)=>a-b);

console.log(marks);

// ============================================
// for...of
// ============================================

for(const item of numbers){
    console.log(item);
}

// ============================================
// Array Destructuring
// ============================================

const colors = ["Red","Green","Blue"];

const [first,second] = colors;

console.log(first);
console.log(second);

// ============================================
// Spread Operator
// ============================================

const arr1 = [1,2,3];

const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];

console.log(arr3);

// ============================================
// ============================================
// Important Array Methods
// ============================================

const nums = [1,2,3,4,5];

// map()

const double = nums.map(num=>num*2);

console.log(double);

// filter()

const even = nums.filter(num=>num%2===0);

console.log(even);

// find()

const findNum = nums.find(num=>num>3);

console.log(findNum);

// some()

console.log(nums.some(num=>num>4));

// every()

console.log(nums.every(num=>num>0));

// reduce()

const total = nums.reduce((sum,num)=>sum+num,0);

console.log(total);

// forEach()

nums.forEach(num=>{
    console.log(num);
});

// ============================================
// 3. Function
// ============================================

// Function Declaration

function greet(name){
    return `Hello ${name}`;
}

console.log(greet("Ranbir"));

// ============================================
// Function Expression
// ============================================

const add = function(a,b){
    return a+b;
}

console.log(add(10,20));

// ============================================
// Arrow Function
// ============================================

const multiply = (a,b)=>a*b;

console.log(multiply(5,6));

// ============================================
// Default Parameter
// ============================================

const welcome = (name="Guest")=>{
    return `Welcome ${name}`;
}

console.log(welcome());
console.log(welcome("Ranbir"));

// ============================================
// Rest Parameter
// ============================================

function totalMarks(...marks){
    return marks.reduce((sum,num)=>sum+num,0);
}

console.log(totalMarks(10,20,30,40));

// ============================================
// Callback Function
// ============================================

function display(message){
    console.log(message);
}

function processUser(callback){
    callback("Login Success");
}

processUser(display);

// ============================================
// Higher Order Function
// ============================================

function calculator(a,b,operation){
    return operation(a,b);
}

console.log(calculator(10,5,(x,y)=>x+y));
console.log(calculator(10,5,(x,y)=>x-y));

// ============================================
// Pass By Reference
// ============================================

const obj1 = {
    name:"Ranbir"
};

const obj2 = obj1;

obj2.name = "Developer";

console.log(obj1.name);
console.log(obj2.name);

// ============================================
// Object Copy
// ============================================

const original = {
    name:"Rahim"
};

const copy = {
    ...original
};

copy.name = "Karim";

console.log(original.name);
console.log(copy.name);

// ============================================
// Array Copy
// ============================================

const oldArray = [1,2,3];

const newArray = [...oldArray];

newArray.push(4);

console.log(oldArray);
console.log(newArray);

// ============================================
// typeof
// ============================================

console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});

// ============================================
// Summary
// ============================================

// Non-Primitive Data Types

// 1. Object
// - Property
// - CRUD
// - Methods
// - Object.keys()
// - Object.values()
// - Object.entries()
// - Destructuring
// - Spread
// - Optional Chaining

// 2. Array
// - push()
// - pop()
// - shift()
// - unshift()
// - splice()
// - slice()
// - includes()
// - indexOf()
// - join()
// - reverse()
// - sort()
// - map()
// - filter()
// - find()
// - some()
// - every()
// - reduce()
// - forEach()
// - Destructuring
// - Spread

// 3. Function
// - Function Declaration
// - Function Expression
// - Arrow Function
// - Default Parameter
// - Rest Parameter
// - Callback
// - Higher Order Function

// Important
// ✔ Reference Type
// ✔ Pass By Reference
// ✔ Spread Copy
// ✔ typeof