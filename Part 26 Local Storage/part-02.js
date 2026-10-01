// ============================================================
// PART 02
// sessionStorage + JSON.parse()
// + CRUD + Practical Examples
// ============================================================


// ============================================================
// 1. sessionStorage ki?
// ============================================================

// sessionStorage-o browser-e data store kore.

// Kintu localStorage-er moto permanent na.

// Usually current browser tab/session-er jonno data thake.
// Tab/session close hole data remove hoy.


sessionStorage.setItem("name", "Ranbir");


// ============================================================
// 2. sessionStorage.getItem()
// ============================================================

const name = sessionStorage.getItem("name");

console.log(name);

// Output:
// Ranbir


// ============================================================
// 3. sessionStorage.removeItem()
// ============================================================

sessionStorage.removeItem("name");


// ============================================================
// 4. sessionStorage.clear()
// ============================================================

sessionStorage.clear();


// ============================================================
// 5. sessionStorage e object save
// ============================================================

const currentUser = {
    name: "Ranbir",
    role: "Developer",
    loggedIn: true
};


// Object-ke JSON string korte hobe.

sessionStorage.setItem(
    "currentUser",
    JSON.stringify(currentUser)
);


// ============================================================
// 6. JSON.parse()
// ============================================================

// localStorage/sessionStorage theke data ber korle
// seta string hisebe pawa jay.

// JSON.parse() JSON string-ke abar JavaScript object-e convert kore.


const storedUser = sessionStorage.getItem("currentUser");

const parsedUser = JSON.parse(storedUser);

console.log(parsedUser);

console.log(parsedUser.name);
console.log(parsedUser.role);
console.log(parsedUser.loggedIn);


// ============================================================
// 7. Complete stringify + parse flow
// ============================================================

const userData = {
    name: "Ranbir",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"]
};


// Step 1:
// Object -> JSON String

const jsonData = JSON.stringify(userData);


// Step 2:
// JSON String -> localStorage

localStorage.setItem("userData", jsonData);


// Step 3:
// localStorage theke JSON String ber kora

const savedData = localStorage.getItem("userData");


// Step 4:
// JSON String -> JavaScript Object

const finalData = JSON.parse(savedData);


console.log(finalData);

console.log(finalData.name);
console.log(finalData.age);
console.log(finalData.skills);


// ============================================================
// 8. Shortcut: Save
// ============================================================

const profile = {
    name: "Ranbir",
    profession: "Full Stack Web Developer",
    country: "Bangladesh"
};

localStorage.setItem("profile", JSON.stringify(profile));


// ============================================================
// 9. Shortcut: Get
// ============================================================

const profileData = JSON.parse(
    localStorage.getItem("profile")
);

console.log(profileData);


// ============================================================
// 10. Array read + parse
// ============================================================

const languages = [
    "JavaScript",
    "Python",
    "Java"
];

localStorage.setItem(
    "languages",
    JSON.stringify(languages)
);


const savedLanguages = JSON.parse(
    localStorage.getItem("languages")
);

console.log(savedLanguages);

console.log(savedLanguages[0]);
console.log(savedLanguages[1]);
console.log(savedLanguages[2]);


// ============================================================
// 11. Array update
// ============================================================

// Prothome data save

const skillsData = [
    "HTML",
    "CSS",
    "JavaScript"
];

localStorage.setItem(
    "skills",
    JSON.stringify(skillsData)
);


// localStorage theke data read

const savedSkills = JSON.parse(
    localStorage.getItem("skills")
);


// New skill add

savedSkills.push("React");


// Updated data abar save

localStorage.setItem(
    "skills",
    JSON.stringify(savedSkills)
);


// ============================================================
// 12. Array delete
// ============================================================

const mySkills = JSON.parse(
    localStorage.getItem("skills")
);


// React remove korar example

const index = mySkills.indexOf("React");

if (index !== -1) {
    mySkills.splice(index, 1);
}


// Updated array save

localStorage.setItem(
    "skills",
    JSON.stringify(mySkills)
);


// ============================================================
// 13. Object update
// ============================================================

const account = {
    name: "Ranbir",
    age: 20,
    role: "Student"
};


// Save

localStorage.setItem(
    "account",
    JSON.stringify(account)
);


// Read

const savedAccount = JSON.parse(
    localStorage.getItem("account")
);


// Update

savedAccount.role = "Full Stack Developer";


// Save updated object

localStorage.setItem(
    "account",
    JSON.stringify(savedAccount)
);


// ============================================================
// 14. Data ache kina check
// ============================================================

const user = localStorage.getItem("user");

if (user) {
    console.log("User data found");
} else {
    console.log("User data not found");
}


// ============================================================
// 15. JSON.parse() er sathe null problem
// ============================================================

// Jodi localStorage e data na thake:

const data = localStorage.getItem("unknown");

console.log(data);

// Output:
// null


// Direct JSON.parse(null) niye kaj korar age
// data ache kina check kora better.


if (data) {

    const parsed = JSON.parse(data);

    console.log(parsed);

} else {

    console.log("No data found");

}


// ============================================================
// 16. Default value use kora
// ============================================================

const savedUser =
    JSON.parse(localStorage.getItem("user")) || {};

console.log(savedUser);


// Jodi user na thake,
// tahole empty object {} use hobe.


// ============================================================
// 17. Real-life Shopping Cart
// ============================================================

const cart = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        id: 2,
        name: "Mouse",
        price: 1000,
        quantity: 2
    }
];


// Cart localStorage e save

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);


// Cart read

const savedCart = JSON.parse(
    localStorage.getItem("cart")
);

console.log(savedCart);


// ============================================================
// 18. Cart-e new product add
// ============================================================

const cartData = JSON.parse(
    localStorage.getItem("cart")
) || [];


// New product

const newProduct = {
    id: 3,
    name: "Keyboard",
    price: 2000,
    quantity: 1
};


// Add

cartData.push(newProduct);


// Updated cart save

localStorage.setItem(
    "cart",
    JSON.stringify(cartData)
);


// ============================================================
// 19. Cart theke product remove
// ============================================================

let cartItems = JSON.parse(
    localStorage.getItem("cart")
) || [];


// id = 2 product remove

cartItems = cartItems.filter(
    item => item.id !== 2
);


// Updated cart save

localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
);


// ============================================================
// 20. Login status save
// ============================================================

localStorage.setItem("isLoggedIn", "true");


// Check

const isLoggedIn =
    localStorage.getItem("isLoggedIn");


if (isLoggedIn === "true") {

    console.log("User is logged in");

} else {

    console.log("User is not logged in");

}


// ============================================================
// 21. Boolean save korar better way
// ============================================================

// localStorage sobkichu string hisebe store kore.

// Tai boolean save korleo string hoye jabe.

const loggedIn = true;

localStorage.setItem(
    "loggedIn",
    JSON.stringify(loggedIn)
);


// Read + parse

const loginStatus = JSON.parse(
    localStorage.getItem("loggedIn")
);

console.log(loginStatus);

console.log(typeof loginStatus);

// Output:
// true
// boolean


// ============================================================
// 22. Number save + parse
// ============================================================

const score = 95;

localStorage.setItem(
    "score",
    JSON.stringify(score)
);


const savedScore = JSON.parse(
    localStorage.getItem("score")
);

console.log(savedScore);
console.log(typeof savedScore);

// Output:
// 95
// number


// ============================================================
// 23. Universal helper function
// ============================================================

// Repeatedly JSON.stringify() lekha avoid korte
// reusable function banate pari.

function saveToLocalStorage(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );
}


// Use

saveToLocalStorage("name", "Ranbir");

saveToLocalStorage("age", 20);

saveToLocalStorage("user", {
    name: "Ranbir",
    role: "Developer"
});


// ============================================================
// 24. Universal get function
// ============================================================

function getFromLocalStorage(key) {

    const data = localStorage.getItem(key);

    if (!data) {
        return null;
    }

    return JSON.parse(data);
}


// Use

const userInfo = getFromLocalStorage("user");

console.log(userInfo);


// ============================================================
// 25. Universal remove function
// ============================================================

function removeFromLocalStorage(key) {

    localStorage.removeItem(key);
}


// Use

removeFromLocalStorage("user");


// ============================================================
// 26. sessionStorage helper function
// ============================================================

function saveToSessionStorage(key, value) {

    sessionStorage.setItem(
        key,
        JSON.stringify(value)
    );
}


function getFromSessionStorage(key) {

    const data = sessionStorage.getItem(key);

    if (!data) {
        return null;
    }

    return JSON.parse(data);
}


// Use

saveToSessionStorage("user", {
    name: "Ranbir",
    role: "Developer"
});


const sessionUser =
    getFromSessionStorage("user");

console.log(sessionUser);


// ============================================================
// 27. Error handling with JSON.parse()
// ============================================================

// Jodi invalid JSON thake,
// JSON.parse() error dite pare.

// Tai important application-e try...catch use kora jay.

function getSafeData(key) {

    const data = localStorage.getItem(key);

    if (!data) {
        return null;
    }

    try {

        return JSON.parse(data);

    } catch (error) {

        console.log("Invalid JSON data");

        return null;
    }
}


const safeUser = getSafeData("user");

console.log(safeUser);


// ============================================================
// 28. localStorage vs sessionStorage
// ============================================================

// localStorage:
// Long-term browser storage.

// sessionStorage:
// Current browser tab/session-er temporary storage.


// localStorage example:

localStorage.setItem(
    "theme",
    "dark"
);


// sessionStorage example:

sessionStorage.setItem(
    "checkoutStep",
    "payment"
);


// ============================================================
// 29. Important security concept
// ============================================================

// localStorage/sessionStorage-e sensitive information
// rakha risky hote pare.

// Especially:
// password
// sensitive authentication secrets
// highly sensitive personal data


// XSS attack hole browser storage-er data
// JavaScript diye access kora possible hote pare.

// Tai authentication design-e secure cookie
// often use kora hoy server-side architecture-er sathe.


// ============================================================
// 30. Full Practical Example
// User Preferences
// ============================================================

const preferences = {
    theme: "dark",
    language: "en",
    notifications: true
};


// Save

localStorage.setItem(
    "preferences",
    JSON.stringify(preferences)
);


// Read

const savedPreferences = JSON.parse(
    localStorage.getItem("preferences")
);


// Update

savedPreferences.theme = "light";


// Save updated preferences

localStorage.setItem(
    "preferences",
    JSON.stringify(savedPreferences)
);


// Read again

const finalPreferences = JSON.parse(
    localStorage.getItem("preferences")
);

console.log(finalPreferences);


// ============================================================
// 31. Full CRUD Concept
// ============================================================

// C = Create
// R = Read
// U = Update
// D = Delete


// CREATE

localStorage.setItem(
    "product",
    JSON.stringify({
        id: 1,
        name: "Laptop",
        price: 50000
    })
);


// READ

const product = JSON.parse(
    localStorage.getItem("product")
);

console.log(product);


// UPDATE

product.price = 55000;

localStorage.setItem(
    "product",
    JSON.stringify(product)
);


// DELETE

localStorage.removeItem("product");


// ============================================================
// 32. Most important flow
// ============================================================


// JavaScript Object
//       |
//       | JSON.stringify()
//       v
// JSON String
//       |
//       | localStorage.setItem()
//       v
// localStorage
//       |
//       | localStorage.getItem()
//       v
// JSON String
//       |
//       | JSON.parse()
//       v
// JavaScript Object


// ============================================================
// 33. Full Example — User Profile
// ============================================================

const profileDataa = {
    id: 101,
    name: "Ranbir",
    email: "ranbir@example.com",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ],
    isDeveloper: true
};


// SAVE

localStorage.setItem(
    "profile",
    JSON.stringify(profileData)
);


// READ

const profileFromStorage = JSON.parse(
    localStorage.getItem("profile")
);


console.log(profileFromStorage);


// UPDATE

profileFromStorage.skills.push("Node.js");

profileFromStorage.isDeveloper = true;


localStorage.setItem(
    "profile",
    JSON.stringify(profileFromStorage)
);


// DELETE

// localStorage.removeItem("profile");


// ============================================================
// END
// ============================================================