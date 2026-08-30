// ==========================================
// PART 15: OBJECT ADVANCED
// PART 2: FREEZE, SEAL, THIS KEYWORD
// ==========================================


// 17. Object.freeze()
// Object freeze korle
// property add, update ebong delete kora jay na

const user = {

    name: "Ranbir",

    age: 20
};

Object.freeze(user);


// Update korar chesta
user.age = 25;


// New property add korar chesta
user.country = "Bangladesh";


// Property delete korar chesta
delete user.name;


console.log(user);


// Freeze korar por object change hobe na


// 18. Object.isFrozen()
// Object freeze kora hoyeche kina check kore

const product = {

    name: "Laptop",

    price: 50000
};

Object.freeze(product);

console.log(Object.isFrozen(product));


// true mane object frozen


// 19. Freeze Example

const settings = {

    theme: "dark",

    language: "Bangla"
};

Object.freeze(settings);

console.log(settings);


// settings.theme = "light";
// Eta kaj korbe na


// 20. Object.seal()
// Seal korle new property add ebong property delete kora jay na
// Kintu existing property update kora jay

const userInfo = {

    name: "Ranbir",

    age: 20
};

Object.seal(userInfo);


// Existing property update kora jabe

userInfo.age = 21;

console.log(userInfo);


// New property add kora jabe na

userInfo.country = "Bangladesh";

console.log(userInfo);


// Existing property delete kora jabe na

delete userInfo.name;

console.log(userInfo);


// 21. Object.isSealed()
// Object seal kora hoyeche kina check kore

const data = {

    name: "Ranbir",

    age: 20
};

Object.seal(data);

console.log(Object.isSealed(data));


// 22. Freeze vs Seal

const obj1 = {
    name: "Ranbir",
    age: 20
};

Object.freeze(obj1);


// Freeze:
// Update no
// Add no
// Delete no


const obj2 = {
    name: "Ranbir",
    age: 20
};

Object.seal(obj2);


// Seal:
// Update yes
// Add no
// Delete no


// 23. this Keyword
// this current object ke refer kore

const user = {

    name: "Ranbir",

    age: 20,

    showInfo: function () {

        console.log(this.name);

        console.log(this.age);
    }
};

user.showInfo();


// 24. this diye Property Access

const person = {

    firstName: "Ranbir",

    lastName: "Roy",

    getFullName: function () {

        return this.firstName + " " + this.lastName;
    }
};

console.log(person.getFullName());


// 25. this diye Property Update

const account = {

    balance: 1000,

    deposit: function (amount) {

        this.balance += amount;
    }
};

account.deposit(500);

console.log(account.balance);


// 26. this diye Multiple Method

const calculator = {

    num1: 10,

    num2: 20,

    add: function () {

        return this.num1 + this.num2;
    },

    multiply: function () {

        return this.num1 * this.num2;
    }
};

console.log(calculator.add());

console.log(calculator.multiply());


// 27. this with Method Syntax
// Modern JavaScript e method short way te lekha jay

const userProfile = {

    name: "Ranbir",

    greet() {

        console.log("Hello " + this.name);
    }
};

userProfile.greet();


// 28. Important
// Arrow function er nijer this thake na
// Tai object method er jonno normal function/method syntax
// beshi suitable

const userData = {

    name: "Ranbir",

    greet: () => {

        console.log(this.name);
    }
};

userData.greet();


// Ekhane this current object ke refer korbe na
// Tai object method e arrow function use korar somoy careful hote hoy


// 29. Practical Example
// E-commerce product

const productInfo = {

    name: "Laptop",

    price: 50000,

    quantity: 2,

    getTotal() {

        return this.price * this.quantity;
    }
};

console.log(productInfo.getTotal());


// 30. Practical Example
// Bank account

const bankAccount = {

    owner: "Ranbir",

    balance: 5000,

    deposit(amount) {

        this.balance += amount;
    },

    withdraw(amount) {

        if (amount <= this.balance) {

            this.balance -= amount;
        }
    },

    showBalance() {

        console.log(this.balance);
    }
};

bankAccount.deposit(2000);

bankAccount.withdraw(1000);

bankAccount.showBalance();


// 31. Object.keys() + Object.values() + Object.entries()
// Real project e ekshathe use kora

const user = {

    name: "Ranbir",

    age: 20,

    role: "Full Stack Developer"
};

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));


// 32. Full Stack Practical Example
// API response er moto object

const apiResponse = {

    id: 101,

    name: "Laptop",

    price: 50000,

    category: "Electronics",

    stock: 10
};


// Sob key
console.log(Object.keys(apiResponse));


// Sob value
console.log(Object.values(apiResponse));


// Key and value
for (let [key, value] of Object.entries(apiResponse)) {

    console.log(key, value);
}


// 33. Object Freeze Practical Use
// Constant configuration er moto data protect korte use kora jay

const config = {

    apiUrl: "https://example.com",

    version: "1.0"
};

Object.freeze(config);

console.log(config);


// 34. Object Seal Practical Use
// Existing data update korte parbo
// Kintu structure change korte parbo na

const userSettings = {

    theme: "dark",

    language: "Bangla"
};

Object.seal(userSettings);

userSettings.theme = "light";

console.log(userSettings);


// 35. Important Summary

// Object.keys()
// Key er array return kore


// Object.values()
// Value er array return kore


// Object.entries()
// Key ebong value er array return kore


// Object.assign()
// Object copy/merge/update korte use hoy


// Object.freeze()
// Add, update, delete konotai kora jay na


// Object.seal()
// Add/delete kora jay na
// Existing property update kora jay


// this
// Current object ke refer kore


// Modern JavaScript e
// const, object destructuring, spread,
// Object.keys(), Object.values(), Object.entries()
// ebong this khub important