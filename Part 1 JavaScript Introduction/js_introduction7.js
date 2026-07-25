/****************************************************************
                Console
****************************************************************/

/*
Console holo browser er Developer Tools er ekta part.

JavaScript code run korar por output dekhte,
error check korte ebong debugging korte
Console use kora hoy.

Chrome e Console open korte:

Windows/Linux -> F12 ba Ctrl + Shift + I

Mac -> Cmd + Option + I

Tarpor "Console" Tab e click koro.
*/

// ======================================================
// 1. console.log()
// ======================================================

/*
Normal output dekhano hoy.
*/

console.log("Hello JavaScript");

let name = "Ranbir";
console.log(name);

let age = 20;
console.log(age);

// ======================================================
// 2. console.error()
// ======================================================

/*
Error message dekhano hoy.
*/

console.error("Something went wrong!");

// ======================================================
// 3. console.warn()
// ======================================================

/*
Warning message dekhano hoy.
*/

console.warn("Password is too short!");

// ======================================================
// 4. console.info()
// ======================================================

/*
Information message dekhano hoy.
*/

console.info("Welcome to JavaScript");

// ======================================================
// 5. console.table()
// ======================================================

/*
Array ba Object ke Table akare dekhay.
*/

const students = [
  { name: "Ranbir", age: 20 },
  { name: "Rahim", age: 22 },
];

console.table(students);

// ======================================================
// 6. console.clear()
// ======================================================

/*
Console er sob output clear kore.
*/

// console.clear();

// ======================================================
// 7. console.time()
// ======================================================

/*
Code execute hote koto time lage seta dekhar jonno.
*/

console.time("Loop Time");

for (let i = 1; i <= 100000; i++) {}

console.timeEnd("Loop Time");

// ======================================================
// 8. console.group()
// ======================================================

/*
Output ke group kore dekhay.
*/

console.group("User Information");

console.log("Name : Ranbir");
console.log("Age : 20");

console.groupEnd();

// ======================================================
// 9. console.count()
// ======================================================

/*
Koto bar call hocche seta count kore.
*/

console.count("Click");
console.count("Click");
console.count("Click");

// ======================================================
// 10. console.dir()
// ======================================================

/*
Object er property details dekhay.
*/

console.dir(document);

// ======================================================
// Real Example
// ======================================================

let user = {
  name: "Ranbir",
  email: "ranbir@gmail.com",
  isAdmin: false,
};

console.log(user);
console.table(user);

// ======================================================
// Common Mistakes
// ======================================================

/*
 Wrong

Console.log("Hello");

✔ Right

console.log("Hello");
*/

/*
Wrong

console.Log("Hello");

✔ Right

console.log("Hello");
*/

// ======================================================
// Interview Note
// ======================================================

/*
Question:
Console ki?

Answer:
Console holo browser er Developer Tools er ekta
feature, ja JavaScript er output, error ebong
debugging er jonno use hoy.

Question:
console.log() er kaj ki?

Answer:
Console e output dekhano.
*/

// ======================================================
// Summary
// ======================================================

/*
✔ console.log()      -> Normal Output

✔ console.error()    -> Error

✔ console.warn()     -> Warning

✔ console.info()     -> Information

✔ console.table()    -> Table Format

✔ console.time()     -> Time Measure

✔ console.clear()    -> Clear Console

✔ console.group()    -> Group Output

✔ console.count()    -> Count

✔ console.dir()      -> Object Details

👉 Debugging er jonno Console khub important.
*/