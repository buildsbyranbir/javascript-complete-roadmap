// ==========================================
// PART 14: OBJECTS
// PART 2: NESTED OBJECT AND OBJECT METHODS
// ==========================================


// 22. Nested Object
// Object er vitore arekta object thakle
// Take nested object bole

const user = {
    name: "Ranbir",
    age: 20,

    address: {
        city: "Thakurgaon",
        country: "Bangladesh"
    }
};

console.log(user);


// 23. Nested Object Access

console.log(user.address);

console.log(user.address.city);

console.log(user.address.country);


// 24. Nested Object Update

user.address.city = "Dhaka";

console.log(user.address);


// 25. Nested Object Add Property

user.address.postCode = 5100;

console.log(user.address);


// 26. Nested Object Delete Property

delete user.address.postCode;

console.log(user.address);


// 27. Multiple Nested Objects

const student = {

    name: "Ranbir",

    education: {

        department: "Computer",

        result: {

            cgpa: 3.80,

            semester: 6
        }
    }
};

console.log(student.education.department);

console.log(student.education.result.cgpa);

console.log(student.education.result.semester);


// 28. Object Method
// Object er vitore function thakle
// Take object method bole

const person = {

    name: "Ranbir",

    greet: function () {
        console.log("Hello");
    }
};

person.greet();


// 29. Method with this
// this current object ke refer kore

const userInfo = {

    name: "Ranbir",

    age: 20,

    introduce: function () {

        console.log("My name is " + this.name);

        console.log("My age is " + this.age);
    }
};

userInfo.introduce();


// 30. Object Method with Parameter

const Calculator = {

    add: function (a, b) {

        return a + b;
    },

    subtract: function (a, b) {

        return a - b;
    }
};

console.log(calculator.add(10, 20));

console.log(calculator.subtract(20, 10));


// 31. Short Method Syntax
// Modern JavaScript e function keyword chara method lekha jay

const user = {

    name: "Ranbir",

    greet() {

        console.log("Hello " + this.name);
    }
};

user.greet();


// 32. Multiple Object Methods

const calculator = {

    add(a, b) {

        return a + b;
    },

    subtract(a, b) {

        return a - b;
    },

    multiply(a, b) {

        return a * b;
    },

    divide(a, b) {

        return a / b;
    }
};

console.log(calculator.add(10, 5));

console.log(calculator.subtract(10, 5));

console.log(calculator.multiply(10, 5));

console.log(calculator.divide(10, 5));


// 33. this Keyword
// this current object er property access korte use hoy

const profile = {

    firstName: "Ranbir",

    lastName: "Roy",

    fullName() {

        return this.firstName + " " + this.lastName;
    }
};

console.log(profile.fullName());


// 34. Object Method Update Property

const account = {

    balance: 1000,

    deposit(amount) {

        this.balance += amount;

        return this.balance;
    }
};

console.log(account.deposit(500));


// 35. Object Method Delete Property

const product = {

    name: "Laptop",

    price: 50000,

    removePrice() {

        delete this.price;
    }
};

product.removePrice();

console.log(product);


// 36. Object.keys()
// Object er sob property name array hisebe dey

const userData = {

    name: "Ranbir",

    age: 20,

    country: "Bangladesh"
};

console.log(Object.keys(userData));


// 37. Object.values()
// Object er sob value array hisebe dey

console.log(Object.values(userData));


// 38. Object.entries()
// Key ebong value duita eksathe array hisebe dey

console.log(Object.entries(userData));


// 39. Object.keys() with Loop

for (let key of Object.keys(userData)) {

    console.log(key);
}


// 40. Object.entries() with Loop

for (let [key, value] of Object.entries(userData)) {

    console.log(key, value);
}


// 41. Practical Example
// E-commerce product object

const productInfo = {

    id: 101,

    name: "Laptop",

    price: 50000,

    stock: 10,

    showProduct() {

        console.log("Product:", this.name);

        console.log("Price:", this.price);

        console.log("Stock:", this.stock);
    }
};

productInfo.showProduct();


// 42. Practical User Object

const userProfile = {

    id: 1,

    name: "Ranbir",

    email: "ranbir@example.com",

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ],

    address: {
        city: "Dhaka",
        country: "Bangladesh"
    },

    showProfile() {

        console.log(this.name);

        console.log(this.email);

        console.log(this.skills);

        console.log(this.address.city);
    }
};

userProfile.showProfile();


// 43. Important Object Rules

// Object create
const obj = {
    name: "Ranbir",
    age: 20
};


// Property access
console.log(obj.name);

console.log(obj["name"]);


// Property update
obj.age = 21;


// New property add
obj.email = "test@example.com";


// Property delete
delete obj.email;


// Method
obj.greet = function () {

    console.log("Hello");
};

obj.greet();


// Nested object
obj.address = {

    city: "Dhaka"
};

console.log(obj.address.city);


// 44. Full Stack Development e Object er Use
// API response, database data, user information,
// product information etc. e object khub beshi use hoy

const apiUser = {

    id: 1,

    name: "Ranbir",

    email: "ranbir@example.com",

    role: "developer",

    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ],

    address: {

        city: "Dhaka",

        country: "Bangladesh"
    }
};

console.log(apiUser.name);

console.log(apiUser.skills[0]);

console.log(apiUser.address.city);