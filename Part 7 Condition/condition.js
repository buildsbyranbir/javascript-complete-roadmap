// =====================================================
// PART 7: CONDITION IN JAVASCRIPT
// =====================================================


// =====================================================
// 1. if
// =====================================================

// if condition true hole code run korbe

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}


// Example

let money = 500;

if (money >= 300) {
    console.log("You can buy the product");
}


// =====================================================
// 2. if with comparison operators
// =====================================================

// Comparison operators
// >   greater than
// <   less than
// >=  greater than or equal
// <=  less than or equal
// ==  equal value
// === equal value and equal type
// !=  not equal value
// !== not equal value or type

let number = 10;

if (number > 5) {
    console.log("Number is greater than 5");
}

if (number < 20) {
    console.log("Number is less than 20");
}

if (number >= 10) {
    console.log("Number is greater than or equal to 10");
}

if (number <= 10) {
    console.log("Number is less than or equal to 10");
}


// =====================================================
// 3. == vs ===
// =====================================================

// == sudhu value check kore

console.log(10 == "10");
// true

// === value and data type duita check kore

console.log(10 === "10");
// false

// Full stack development e generally === use kora better


let userAge = "20";

if (userAge === 20) {
    console.log("Age is 20");
} else {
    console.log("Age is not number 20");
}


// =====================================================
// 4. else
// =====================================================

// if false hole else run korbe

let userAge2 = 16;

if (userAge2 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// Another example

let password = "123456";

if (password.length >= 8) {
    console.log("Strong enough password");
} else {
    console.log("Password is too short");
}


// =====================================================
// 5. else if
// =====================================================

// Multiple condition check korar jonno else if use kori

let marks = 75;

if (marks >= 80) {
    console.log("Grade A+");
} else if (marks >= 70) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade A-");
} else if (marks >= 50) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Important
// Condition upor theke niche check hoy
// Je condition first true hobe shekhanei stop kore dibe


// =====================================================
// 6. Multiple conditions using &&
// =====================================================

// && mane AND
// Duita condition-i true hote hobe

let age3 = 25;
let hasNID = true;

if (age3 >= 18 && hasNID === true) {
    console.log("You can create an account");
}


// Example

let username = "ranbir";
let password2 = "12345678";

if (username === "ranbir" && password2 === "12345678") {
    console.log("Login successful");
}


// =====================================================
// 7. Multiple conditions using ||
// =====================================================

// || mane OR
// Jekono ekta condition true holei true

let role = "admin";

if (role === "admin" || role === "moderator") {
    console.log("You can access dashboard");
}


// Example

let paymentMethod = "card";

if (paymentMethod === "card" || paymentMethod === "bkash") {
    console.log("Payment method accepted");
}


// =====================================================
// 8. ! NOT operator
// =====================================================

// ! true ke false kore
// ! false ke true kore

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login first");
}


// Example

let isBlocked = false;

if (!isBlocked) {
    console.log("User can access the website");
}


// =====================================================
// 9. Combining && || !
// =====================================================

let userRole = "admin";
let loggedIn = true;

if (loggedIn && (userRole === "admin" || userRole === "moderator")) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}


// =====================================================
// 10. Nested if
// =====================================================

// Ekta if er vitore arekta if ke nested if bole

let userAge4 = 25;
let userHasNID = true;

if (userAge4 >= 18) {

    console.log("You are adult");

    if (userHasNID) {
        console.log("You can create account");
    } else {
        console.log("NID required");
    }

} else {

    console.log("You are under age");

}


// Real world example

let isLoggedIn2 = true;
let accountVerified = true;

if (isLoggedIn2) {

    console.log("User is logged in");

    if (accountVerified) {
        console.log("You can use all features");
    } else {
        console.log("Please verify your account");
    }

} else {

    console.log("Please login");

}


// =====================================================
// 11. Truthy
// =====================================================

// JavaScript e kichu value automatically true hisebe behave kore
// Egulo ke truthy value bole

// Truthy examples

if ("hello") {
    console.log("String is truthy");
}

if (100) {
    console.log("Number is truthy");
}

if (-10) {
    console.log("Negative number is also truthy");
}

if ([]) {
    console.log("Empty array is truthy");
}

if ({}) {
    console.log("Empty object is truthy");
}


// Important
// Empty array [] truthy
// Empty object {} truthy


// =====================================================
// 12. Falsy
// =====================================================

// JavaScript e mainly ei value gula falsy

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

if (false) {
    console.log("This will not run");
}

if (0) {
    console.log("This will not run");
}

if ("") {
    console.log("This will not run");
}

if (null) {
    console.log("This will not run");
}

if (undefined) {
    console.log("This will not run");
}

if (NaN) {
    console.log("This will not run");
}


// =====================================================
// 13. Truthy and falsy in real project
// =====================================================

// Dhoro user er name ache kina check korte chacchi

let userName = "Ranbir";

if (userName) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}


// userName empty korle

userName = "";

if (userName) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}


// =====================================================
// 14. Check input value
// =====================================================

// Web development e form validation e eta khub common

let email = "";

if (!email) {
    console.log("Email is required");
} else {
    console.log("Email is provided");
}


// =====================================================
// 15. null and undefined check
// =====================================================

let userData = null;

if (!userData) {
    console.log("User data not found");
} else {
    console.log("User data found");
}


// Example

let currentUser;

if (currentUser === undefined) {
    console.log("User is undefined");
}


// =====================================================
// 16. Ternary operator
// =====================================================

// Condition er short version

let age5 = 20;

let result = age5 >= 18 ? "Adult" : "Minor";

console.log(result);


// Normal if else

let age6 = 20;

if (age6 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Same thing ternary diye

let result2 = age6 >= 18 ? "Adult" : "Minor";

console.log(result2);


// =====================================================
// 17. Ternary with login
// =====================================================

let loggedIn2 = true;

let message = loggedIn2 ? "Welcome back" : "Please login";

console.log(message);


// =====================================================
// 18. switch
// =====================================================

// Jokhon ekta value er multiple fixed option thake
// tokhon switch useful

let day = "Sunday";

switch (day) {

    case "Saturday":
        console.log("Weekend");
        break;

    case "Sunday":
        console.log("Weekend");
        break;

    case "Monday":
        console.log("Working day");
        break;

    default:
        console.log("Unknown day");
}


// =====================================================
// 19. switch with number
// =====================================================

let option = 2;

switch (option) {

    case 1:
        console.log("Add product");
        break;

    case 2:
        console.log("View product");
        break;

    case 3:
        console.log("Delete product");
        break;

    default:
        console.log("Invalid option");
}


// =====================================================
// 20. Why break is important
// =====================================================

// break na dile next case gulao execute korte pare

let number2 = 1;

switch (number2) {

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

}


// break use korle

let number3 = 1;

switch (number3) {

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

}


// =====================================================
// 21. default in switch
// =====================================================

// Kono case match na korle default run korbe

let userChoice = "apple";

switch (userChoice) {

    case "banana":
        console.log("Banana selected");
        break;

    case "mango":
        console.log("Mango selected");
        break;

    default:
        console.log("Fruit not found");

}


// =====================================================
// 22. if else vs switch
// =====================================================

// if else

let role2 = "admin";

if (role2 === "admin") {
    console.log("Admin dashboard");
} else if (role2 === "user") {
    console.log("User dashboard");
} else if (role2 === "moderator") {
    console.log("Moderator dashboard");
} else {
    console.log("Unknown role");
}


// switch

let role3 = "admin";

switch (role3) {

    case "admin":
        console.log("Admin dashboard");
        break;

    case "user":
        console.log("User dashboard");
        break;

    case "moderator":
        console.log("Moderator dashboard");
        break;

    default:
        console.log("Unknown role");
}


// =====================================================
// 23. Comparison with null
// =====================================================

let data = null;

if (data === null) {
    console.log("Data is null");
}


// =====================================================
// 24. undefined check
// =====================================================

let product;

if (product === undefined) {
    console.log("Product is not available");
}


// Better way

if (typeof product === "undefined") {
    console.log("Product is undefined");
}


// =====================================================
// 25. NaN check
// =====================================================

// NaN mane Not a Number

let value = Number("hello");

console.log(value);
// NaN

if (Number.isNaN(value)) {
    console.log("Value is not a valid number");
}


// =====================================================
// 26. Empty array check
// =====================================================

// Important
// [] truthy
// Tai sudhu if(array) diye empty array check kora jabe na

let products = [];

if (products) {
    console.log("Products exist");
}


// Eta wrong logic
// Karon empty array-o truthy


// Correct way

if (products.length > 0) {
    console.log("Products available");
} else {
    console.log("No products found");
}


// =====================================================
// 27. Empty object check
// =====================================================

// {} truthy

let user = {};

if (user) {
    console.log("User object exists");
}


// Object empty kina check korte

if (Object.keys(user).length > 0) {
    console.log("User data exists");
} else {
    console.log("User object is empty");
}


// =====================================================
// 28. Nullish coalescing operator
// =====================================================

// ?? sudhu null ebong undefined hole fallback value dey

let userName2 = null;

let finalName = userName2 ?? "Guest";

console.log(finalName);


// Example

let userName3 = "";

let finalName2 = userName3 ?? "Guest";

console.log(finalName2);

// Output empty string hobe
// Karon empty string null ba undefined na


// =====================================================
// 29. OR operator diye default value
// =====================================================

let name = "";

let finalName3 = name || "Guest";

console.log(finalName3);

// Output Guest
// Karon empty string falsy


// Difference

let name2 = "";

console.log(name2 || "Guest");
// Guest

console.log(name2 ?? "Guest");
// Empty string


// =====================================================
// 30. Real world login condition
// =====================================================

let email2 = "ranbir@gmail.com";
let password3 = "12345678";

if (!email2) {

    console.log("Email is required");

} else if (!password3) {

    console.log("Password is required");

} else {

    console.log("Login form is ready");

}


// =====================================================
// 31. Real world password validation
// =====================================================

let password4 = "123";

if (!password4) {

    console.log("Password is required");

} else if (password4.length < 6) {

    console.log("Password must be at least 6 characters");

} else {

    console.log("Password is valid");

}


// =====================================================
// 32. Real world age validation
// =====================================================

let age7 = 21;

if (age7 < 0) {

    console.log("Invalid age");

} else if (age7 < 18) {

    console.log("You are a minor");

} else if (age7 < 60) {

    console.log("You are an adult");

} else {

    console.log("You are a senior citizen");

}


// =====================================================
// 33. Real world e-commerce condition
// =====================================================

let productPrice = 1000;
let userBalance = 1500;
let isLoggedIn3 = true;

if (!isLoggedIn3) {

    console.log("Please login");

} else if (userBalance < productPrice) {

    console.log("Insufficient balance");

} else {

    console.log("Purchase successful");

}


// =====================================================
// 34. Admin authorization
// =====================================================

let loggedUser = {
    name: "Ranbir",
    role: "admin"
};

if (!loggedUser) {

    console.log("Please login");

} else if (loggedUser.role === "admin") {

    console.log("Welcome Admin");

} else {

    console.log("Access denied");

}


// =====================================================
// 35. Multiple role authorization
// =====================================================

let loggedUser2 = {
    name: "Ranbir",
    role: "moderator"
};

if (!loggedUser2) {

    console.log("Please login");

} else if (loggedUser2.role === "admin") {

    console.log("Full access");

} else if (loggedUser2.role === "moderator") {

    console.log("Limited admin access");

} else {

    console.log("Normal user access");

}


// =====================================================
// 36. Short circuit condition
// =====================================================

// && first falsy value pele pore ar check kore na

let user2 = null;

if (user2 && user2.name) {
    console.log(user2.name);
}


// Ekhane user2 null
// Tai user2.name check korar proyojon hoy nai
// Eta JavaScript e khub important


// =====================================================
// 37. Optional chaining
// =====================================================

// Nested object thakle safe vabe property access kora jay

let user3 = null;

console.log(user3?.name);


// Error dibe na
// Result hobe undefined


// Example

let user4 = {
    profile: {
        name: "Ranbir"
    }
};

console.log(user4?.profile?.name);


// =====================================================
// 38. Optional chaining with condition
// =====================================================

let user5 = null;

if (user5?.profile?.name) {
    console.log(user5.profile.name);
} else {
    console.log("Name not found");
}


// =====================================================
// 39. Logical assignment
// =====================================================

// ||=

let username4 = "";

username4 ||= "Guest";

console.log(username4);


// &&=

let isActive = true;

isActive &&= false;

console.log(isActive);


// ??=

let userName5 = null;

userName5 ??= "Guest";

console.log(userName5);


// =====================================================
// 40. Complex real-world condition
// =====================================================

let userAge8 = 25;
let isLoggedIn4 = true;
let userRole4 = "admin";
let accountVerified2 = true;

if (!isLoggedIn4) {

    console.log("Please login");

} else if (!accountVerified2) {

    console.log("Please verify your account");

} else if (userAge8 < 18) {

    console.log("You are not eligible");

} else if (userRole4 === "admin") {

    console.log("Welcome to Admin Dashboard");

} else {

    console.log("Welcome to User Dashboard");

}


// =====================================================
// 41. Important condition concepts
// =====================================================

// Condition true hole code execute kore

if (true) {
    console.log("Runs");
}


// Condition false hole execute kore na

if (false) {
    console.log("Does not run");
}


// =====================================================
// 42. Boolean conversion
// =====================================================

// Boolean() diye kono value truthy/falsy kina check kora jay

console.log(Boolean("hello"));
// true

console.log(Boolean(""));
// false

console.log(Boolean(100));
// true

console.log(Boolean(0));
// false

console.log(Boolean(null));
// false

console.log(Boolean(undefined));
// false

console.log(Boolean([]));
// true

console.log(Boolean({}));
// true


// =====================================================
// 43. Important interview example
// =====================================================

console.log(Boolean("false"));
// true

// Karon "false" ekta non-empty string


console.log(Boolean("0"));
// true

// Karon "0" ekta non-empty string


console.log(Boolean([]));
// true


console.log(Boolean({}));
// true


// =====================================================
// 44. Double NOT operator
// =====================================================

// !! diye kono value ke boolean e convert kora jay

console.log(!!"hello");
// true

console.log(!!"");
// false

console.log(!!100);
// true

console.log(!!0);
// false

console.log(!!null);
// false


// =====================================================
// 45. Real world form validation
// =====================================================

let name3 = "Ranbir";
let email3 = "ranbir@gmail.com";
let password5 = "12345678";

if (!name3) {

    console.log("Name is required");

} else if (!email3) {

    console.log("Email is required");

} else if (!password5) {

    console.log("Password is required");

} else if (password5.length < 8) {

    console.log("Password must contain at least 8 characters");

} else {

    console.log("Registration successful");

}


// =====================================================
// 46. Real world API response condition
// =====================================================

let response = {
    success: true,
    data: {
        name: "Ranbir"
    }
};

if (response.success) {

    console.log("Data loaded successfully");

    if (response.data) {
        console.log(response.data.name);
    }

} else {

    console.log("Something went wrong");

}


// =====================================================
// 47. HTTP status based condition
// =====================================================

let statusCode = 200;

if (statusCode === 200) {

    console.log("Request successful");

} else if (statusCode === 201) {

    console.log("Created successfully");

} else if (statusCode === 400) {

    console.log("Bad request");

} else if (statusCode === 401) {

    console.log("Unauthorized");

} else if (statusCode === 404) {

    console.log("Not found");

} else if (statusCode >= 500) {

    console.log("Server error");

} else {

    console.log("Unknown status");

}


// =====================================================
// 48. Same status condition using switch
// =====================================================

let status = 404;

switch (status) {

    case 200:
        console.log("Request successful");
        break;

    case 201:
        console.log("Created successfully");
        break;

    case 400:
        console.log("Bad request");
        break;

    case 401:
        console.log("Unauthorized");
        break;

    case 404:
        console.log("Not found");
        break;

    default:
        console.log("Unknown status");

}


// =====================================================
// 49. Nested condition with e-commerce
// =====================================================

let loggedIn5 = true;
let productStock = 10;
let balance = 2000;
let price = 1500;

if (loggedIn5) {

    console.log("User logged in");

    if (productStock > 0) {

        console.log("Product available");

        if (balance >= price) {

            console.log("Purchase successful");

        } else {

            console.log("Not enough balance");

        }

    } else {

        console.log("Product out of stock");

    }

} else {

    console.log("Please login first");

}


// =====================================================
// 50. Final practical example
// =====================================================

// Erokom condition Full Stack project e frequently use hobe

let currentUser = {
    name: "Ranbir",
    role: "admin",
    isVerified: true,
    balance: 5000
};

let productPrice2 = 3000;

if (!currentUser) {

    console.log("Please login");

} else if (!currentUser.isVerified) {

    console.log("Please verify your account");

} else if (currentUser.role !== "admin") {

    console.log("You do not have admin permission");

} else if (currentUser.balance < productPrice2) {

    console.log("Insufficient balance");

} else {

    console.log("All conditions passed");

}