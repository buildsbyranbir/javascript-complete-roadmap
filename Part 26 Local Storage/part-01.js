// ============================================================
// PART 01
// localStorage + JSON.stringify()
// ============================================================


// ============================================================
// 1. localStorage ki?
// ============================================================

// localStorage browser-er moddhe data save kore rakhe.
// Browser close korleo data normally delete hoy na.

// Data key-value pair akare store hoy.

// Syntax:
// localStorage.setItem("key", "value");


// ============================================================
// 2. localStorage.setItem()
// ============================================================

// Data save korar jonno setItem() use kori.

localStorage.setItem("name", "Ranbir");


// Ekhane:
// "name" = key
// "Ranbir" = value


// ============================================================
// 3. localStorage.getItem()
// ============================================================

// Save kora data ber korar jonno getItem() use kori.

const userName = localStorage.getItem("name");

console.log(userName);

// Output:
// Ranbir


// ============================================================
// 4. localStorage e multiple data save
// ============================================================

localStorage.setItem("name", "Ranbir");
localStorage.setItem("country", "Bangladesh");
localStorage.setItem("profession", "Web Developer");


// Data read

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("country"));
console.log(localStorage.getItem("profession"));


// ============================================================
// 5. localStorage e number save korle ki hoy?
// ============================================================

localStorage.setItem("age", 20);


// localStorage sob value-ke string hisebe store kore.

const age = localStorage.getItem("age");

console.log(age);
console.log(typeof age);

// Output:
// 20
// string


// Tai number hisebe use korte hole conversion korte pari.

const userAge = Number(localStorage.getItem("age"));

console.log(userAge);
console.log(typeof userAge);

// Output:
// 20
// number


// ============================================================
// 6. localStorage.removeItem()
// ============================================================

// Specific ekta data delete korar jonno removeItem() use kori.

localStorage.setItem("name", "Ranbir");

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));

// Output:
// null


// ============================================================
// 7. localStorage.clear()
// ============================================================

// localStorage-er sob data delete kore.

localStorage.clear();


// IMPORTANT:
// clear() use korle oi website-er localStorage-er
// sob stored data remove hoye jabe.


// ============================================================
// 8. localStorage.length
// ============================================================

// Koto gula key store ache seta check korte pari.

localStorage.setItem("name", "Ranbir");
localStorage.setItem("age", "20");
localStorage.setItem("country", "Bangladesh");

console.log(localStorage.length);

// Output:
// 3


// ============================================================
// 9. localStorage.key()
// ============================================================

// Index diye key ber korte pari.

console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));


// ============================================================
// 10. localStorage-er sob data loop kore dekha
// ============================================================

for (let i = 0; i < localStorage.length; i++) {

    const key = localStorage.key(i);

    const value = localStorage.getItem(key);

    console.log(key, value);
}


// ============================================================
// 11. Object localStorage e direct save kora jay na
// ============================================================

const user = {
    name: "Ranbir",
    age: 20,
    country: "Bangladesh"
};


// Eita korle expected object store hobe na:

localStorage.setItem("user", user);


// localStorage string store kore.
// Tai object automatically string-e convert hoye jete pare:
//
// [object Object]


// ============================================================
// 12. JSON.stringify()
// ============================================================

// Object/Array-ke JSON string-e convert kore.

// Object
const student = {
    name: "Ranbir",
    age: 20,
    department: "Computer"
};

const studentJSON = JSON.stringify(student);

console.log(studentJSON);


// Output er moto:
// {"name":"Ranbir","age":20,"department":"Computer"}


// Ekhon ei JSON string localStorage e save korte pari.

localStorage.setItem("student", studentJSON);


// ============================================================
// 13. Shortcut method
// ============================================================

// Alada variable na baniye direct stringify korte pari.

const userInfo = {
    name: "Ranbir",
    email: "ranbir@example.com",
    role: "Developer"
};

localStorage.setItem("userInfo", JSON.stringify(userInfo));


// ============================================================
// 14. Array localStorage e save
// ============================================================

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];

localStorage.setItem("skills", JSON.stringify(skills));


// ============================================================
// 15. Object-er array localStorage e save
// ============================================================

const users = [
    {
        id: 1,
        name: "Ranbir",
        role: "Developer"
    },
    {
        id: 2,
        name: "Rahim",
        role: "Designer"
    },
    {
        id: 3,
        name: "Karim",
        role: "Developer"
    }
];

localStorage.setItem("users", JSON.stringify(users));


// ============================================================
// 16. Real-life example: Theme save
// ============================================================

const theme = "dark";

localStorage.setItem("theme", theme);


// Page reload korleo theme data thakbe.

const savedTheme = localStorage.getItem("theme");

console.log(savedTheme);


// ============================================================
// 17. Real-life example: Login user information
// ============================================================

const loggedInUser = {
    id: 101,
    name: "Ranbir",
    role: "user"
};

localStorage.setItem(
    "loggedInUser",
    JSON.stringify(loggedInUser)
);


// ============================================================
// 18. Important difference
// ============================================================

// localStorage:
// Browser close korleo data normally thake.

// sessionStorage:
// Browser tab/session sesh hole data normally remove hoy.

// JSON.stringify():
// JavaScript Object/Array -> JSON String

// JSON.parse():
// JSON String -> JavaScript Object/Array