// ==========================================
// PART 14: OBJECTS
// PART 1: CREATE, ACCESS, UPDATE, DELETE
// ==========================================


// 1. Create Object
// Object er moddhe key-value pair e data rakha hoy

const user = {
    name: "Ranbir",
    age: 20,
    country: "Bangladesh"
};

console.log(user);


// 2. Access Property
// Dot notation diye property access kora jay

console.log(user.name);

console.log(user.age);

console.log(user.country);


// 3. Access Property using Bracket Notation
// Bracket notation er moddhe property name string hisebe dite hoy

console.log(user["name"]);

console.log(user["age"]);


// 4. Dot Notation vs Bracket Notation

console.log(user.name);

console.log(user["name"]);


// 5. Variable diye Property Access
// Dynamic property access er jonno bracket notation use hoy

const property = "name";

console.log(user[property]);


// 6. Update Property
// Existing property er value change kora jay

user.name = "Hasan";

console.log(user);


// 7. Multiple Property Update

user.age = 21;

user.country = "Bangladesh";

console.log(user);


// 8. New Property Add
// Object e notun property add kora jay

user.email = "ranbir@example.com";

console.log(user);


// 9. Bracket Notation diye New Property Add

user["phone"] = "01700000000";

console.log(user);


// 10. Delete Property
// delete keyword diye property remove kora jay

delete user.phone;

console.log(user);


// 11. Another Delete Example

delete user.email;

console.log(user);


// 12. Property Exists kina Check
// in operator diye check kora jay

console.log("name" in user);

console.log("email" in user);


// 13. hasOwnProperty
// Object er nijer property ache kina check kore

console.log(user.hasOwnProperty("name"));

console.log(user.hasOwnProperty("email"));


// 14. Object with Different Data Types

const student = {
    name: "Ranbir",
    age: 20,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: null
};

console.log(student);


// 15. Array inside Object

console.log(student.skills);

console.log(student.skills[0]);

console.log(student.skills[2]);


// 16. Object Property as Array

student.skills.push("React");

console.log(student.skills);


// 17. Object with Boolean Property

const account = {
    username: "ranbir",
    isActive: true,
    isAdmin: false
};

console.log(account.isActive);

console.log(account.isAdmin);


// 18. Object Destructuring
// Object theke property alada variable e neya jay

const person = {
    name: "Ranbir",
    age: 20
};

const { name, age } = person;

console.log(name);

console.log(age);


// 19. Destructuring with Different Variable Name

const userInfo = {
    name: "Rahim",
    age: 22
};

const {
    name: userName,
    age: userAge
} = userInfo;

console.log(userName);

console.log(userAge);


// 20. Object Copy using Spread

const originalUser = {
    name: "Ranbir",
    age: 20
};

const copiedUser = {
    ...originalUser
};

console.log(copiedUser);


// 21. Add Property while Copying

const newUser = {
    ...originalUser,
    country: "Bangladesh"
};

console.log(newUser);