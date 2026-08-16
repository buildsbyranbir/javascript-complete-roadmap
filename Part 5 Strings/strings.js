// ======================================================
// PART 5: STRINGS
// Full Stack Web Developer er jonno important topics
// ======================================================


// ======================================================
// 1. STRING CREATE
// ======================================================

// Double quote diye string banano
let str1 = "Hello World";

// Single quote diye string banano
let str2 = 'Hello JavaScript';

// Backtick diye string banano
let str3 = `Hello Developer`;

console.log(str1);
console.log(str2);
console.log(str3);


// ======================================================
// 2. STRING LENGTH
// ======================================================

let text = "JavaScript";

// length diye string e koyta character ache ta jana jay
console.log(text.length);


// ======================================================
// 3. STRING INDEX
// ======================================================

let language = "JavaScript";

// String er index 0 theke start hoy

console.log(language[0]); // J
console.log(language[1]); // a
console.log(language[2]); // v
console.log(language[3]); // a

// Last character ber korar niyom
console.log(language[language.length - 1]);


// ======================================================
// 4. charAt()
// ======================================================

let name = "Ranbir";

// charAt() diye specific position er character ber kora hoy

console.log(name.charAt(0)); // R
console.log(name.charAt(3)); // b


// ======================================================
// 5. charCodeAt()
// ======================================================

let word = "ABC";

// charCodeAt() character er Unicode number dey

console.log(word.charCodeAt(0)); // 65
console.log(word.charCodeAt(1)); // 66
console.log(word.charCodeAt(2)); // 67


// ======================================================
// 6. at()
// ======================================================

let userName = "Developer";

// at() diye specific index er character ber kora jay

console.log(userName.at(0)); // D
console.log(userName.at(3)); // e

// at() negative index support kore

console.log(userName.at(-1)); // r
console.log(userName.at(-2)); // e


// ======================================================
// 7. TEMPLATE LITERALS
// ======================================================

let user = "Ranbir";
let age = 20;

// Template literal er jonno backtick use hoy

console.log(`My name is ${user}`);
console.log(`I am ${age} years old.`);

// ${} er moddhe variable use kora jay

let a = 10;
let b = 20;

console.log(`Total = ${a + b}`);


// Multiple line string banano jay

let message = `
Hello Ranbir,
Welcome to JavaScript.
Keep Learning!
`;

console.log(message);


// ======================================================
// 8. ESCAPE CHARACTERS
// ======================================================

// \" = double quote

console.log("Hello \"JavaScript\"");


// \n = new line

console.log("Hello\nWorld");


// \t = tab space

console.log("Hello\tWorld");


// \\ = backslash

console.log("C:\\Users\\Ranbir");


// Single quote er moddhe double quote use kora jay

console.log('He said "Hello"');


// Double quote er moddhe single quote use kora jay

console.log("It's JavaScript");


// ======================================================
// 9. toUpperCase()
// ======================================================

let country = "bangladesh";

// Small letter ke capital kore

console.log(country.toUpperCase());


// ======================================================
// 10. toLowerCase()
// ======================================================

let countryName = "BANGLADESH";

// Capital letter ke small kore

console.log(countryName.toLowerCase());


// ======================================================
// 11. trim()
// ======================================================

let input = "   Hello World   ";

// Beginning ebong ending er extra space remove kore

console.log(input.trim());


// ======================================================
// 12. trimStart()
// ======================================================

let text2 = "   Hello";

// Shudhu beginning er extra space remove kore

console.log(text2.trimStart());


// ======================================================
// 13. trimEnd()
// ======================================================

let text3 = "Hello   ";

// Shudhu ending er extra space remove kore

console.log(text3.trimEnd());


// ======================================================
// 14. includes()
// ======================================================

let sentence = "I am learning JavaScript";

// String er moddhe kono word ache kina check kore

console.log(sentence.includes("JavaScript"));
// true

console.log(sentence.includes("Python"));
// false


// ======================================================
// 15. startsWith()
// ======================================================

let url = "https://example.com";

// String kon word diye start hoy ta check kore

console.log(url.startsWith("https"));
// true

console.log(url.startsWith("http"));
// true


// ======================================================
// 16. endsWith()
// ======================================================

let file = "profile.jpg";

// String kon word diye sesh hoy ta check kore

console.log(file.endsWith(".jpg"));
// true

console.log(file.endsWith(".png"));
// false


// ======================================================
// 17. indexOf()
// ======================================================

let sentence2 = "I love JavaScript";

// Kono word ba character first kothay ache tar index dey

console.log(sentence2.indexOf("JavaScript"));


// Word na pele -1 return kore

console.log(sentence2.indexOf("Python"));


// ======================================================
// 18. lastIndexOf()
// ======================================================

let fruits = "apple banana apple";

// Same word onekbar thakle
// last occurrence er index dey

console.log(fruits.lastIndexOf("apple"));


// ======================================================
// 19. search()
// ======================================================

let sentence3 = "I am learning JavaScript";

// String er moddhe kono word search kore

console.log(sentence3.search("JavaScript"));


// Word na pele -1 return kore

console.log(sentence3.search("Python"));


// ======================================================
// 20. search() WITH REGEX
// ======================================================

let email = "user@gmail.com";

// Regex use kore @ search kora

console.log(email.search(/@/));


// ======================================================
// 21. replace()
// ======================================================

let sentence4 = "I love JavaScript";

// replace() first matching value replace kore

let result = sentence4.replace("JavaScript", "React");

console.log(result);


// ======================================================
// 22. replaceAll()
// ======================================================

let text4 = "apple apple apple";

// replaceAll() sob matching value replace kore

console.log(text4.replaceAll("apple", "mango"));


// ======================================================
// 23. replace() WITH REGEX
// ======================================================

let text5 = "hello hello hello";

// g = global
// g use korle sob matching word replace hobe

console.log(text5.replace(/hello/g, "hi"));


// ======================================================
// 24. slice()
// ======================================================

let language2 = "JavaScript";

// slice(start, end)
// end index include hoy na

console.log(language2.slice(0, 4));
// Java

console.log(language2.slice(4, 10));
// Script


// Negative index use kora jay

console.log(language2.slice(-6));
// Script

console.log(language2.slice(-6, -3));
// Scr


// ======================================================
// 25. substring()
// ======================================================

let language3 = "JavaScript";

// substring(start, end)

console.log(language3.substring(0, 4));
// Java

console.log(language3.substring(4, 10));
// Script

// substring() negative number ke 0 hisebe ney


// ======================================================
// 26. slice() VS substring()
// ======================================================

let word2 = "JavaScript";

// slice() negative index support kore

console.log(word2.slice(-6));


// substring() negative index support kore na

console.log(word2.substring(-6));


// ======================================================
// 27. split()
// ======================================================

let names = "Rahim,Karim,Salam";

// split() string ke array te convert kore

let nameArray = names.split(",");

console.log(nameArray);


// Space diye split

let sentence5 = "I am a developer";

console.log(sentence5.split(" "));


// Prottek character alada korte

let word3 = "HELLO";

console.log(word3.split(""));


// ======================================================
// 28. split() + join()
// ======================================================

let fullName = "Ranbir Chandra Roy";

// String ke array te convert

let array = fullName.split(" ");

console.log(array);


// Array ke abar string banano

let newName = array.join("-");

console.log(newName);


// ======================================================
// 29. concat()
// ======================================================

let firstName = "Ranbir";
let lastName = "Roy";

// concat() diye string join kora jay

console.log(firstName.concat(" ", lastName));


// ======================================================
// 30. STRING CONCATENATION
// ======================================================

let first = "Hello";
let second = "World";

// + operator diye string join kora

let fullText = first + " " + second;

console.log(fullText);


// ======================================================
// 31. TEMPLATE LITERAL VS CONCATENATION
// ======================================================

let developer = "Ranbir";
let skill = "JavaScript";

// Old way

console.log(
    "My name is " + developer + " and I know " + skill
);


// Modern way

console.log(
    `My name is ${developer} and I know ${skill}`
);


// ======================================================
// 32. padStart()
// ======================================================

let number = "5";

// String er beginning e value add kore

console.log(number.padStart(3, "0"));


// ======================================================
// 33. padEnd()
// ======================================================

let number2 = "5";

// String er ending e value add kore

console.log(number2.padEnd(3, "0"));


// ======================================================
// 34. repeat()
// ======================================================

let star = "*";

// Same string ke multiple times repeat kore

console.log(star.repeat(5));


// ======================================================
// 35. STRING IMMUTABILITY
// ======================================================

let original = "hello";

// Eta original string ke change korbe na

original.toUpperCase();

console.log(original);


// New string return kore

let changed = original.toUpperCase();

console.log(changed);


// ======================================================
// 36. STRING COMPARISON
// ======================================================

let x = "hello";
let y = "hello";

// Duita string same kina check

console.log(x === y);


// Duita string different kina check

console.log(x !== y);


// ======================================================
// 37. STRING TO NUMBER
// ======================================================

let price = "500";

// Number() diye string ke number banano

console.log(Number(price));


// parseInt() diye integer number banano

console.log(parseInt(price));


// parseFloat() diye decimal number banano

console.log(parseFloat("10.50"));


// ======================================================
// 38. NUMBER TO STRING
// ======================================================

let amount = 500;

// String() diye number ke string banano

console.log(String(amount));


// toString() diyeo number ke string banano jay

console.log(amount.toString());


// ======================================================
// 39. PRACTICAL: USER INPUT CLEAN
// ======================================================

let userInput = "   Ranbir   ";

// User input er extra space remove kora

let cleanName = userInput.trim();

console.log(cleanName);


// ======================================================
// 40. PRACTICAL: EMAIL CHECK
// ======================================================

let userEmail = "user@gmail.com";

// Email er moddhe @ ache kina check

if (userEmail.includes("@")) {
    console.log("Valid email format");
} else {
    console.log("Invalid email");
}


// ======================================================
// 41. PRACTICAL: FILE EXTENSION CHECK
// ======================================================

let image = "profile.png";

// File .png ba .jpg kina check

if (
    image.endsWith(".png") ||
    image.endsWith(".jpg")
) {
    console.log("Image file");
}


// ======================================================
// 42. PRACTICAL: URL CHECK
// ======================================================

let website = "https://example.com";

// URL https diye start hoy kina check

if (website.startsWith("https://")) {
    console.log("Secure URL");
}


// ======================================================
// 43. PRACTICAL: SEARCH + REPLACE
// ======================================================

let post = "I am learning JavaScript";

// JavaScript word ache kina check

if (post.includes("JavaScript")) {

    // JavaScript ke React diye replace kora

    post = post.replace("JavaScript", "React");
}

console.log(post);


// ======================================================
// 44. PRACTICAL: WORD COUNT
// ======================================================

let paragraph = "I am learning JavaScript";

// trim() diye extra space remove
// split() diye word gula array te convert

let words = paragraph.trim().split(/\s+/);

console.log(words);

console.log(words.length);


// ======================================================
// 45. PRACTICAL: FIRST NAME + LAST NAME
// ======================================================

let fullName2 = "Ranbir Roy";

// Full name ke space diye vag kora

let parts = fullName2.trim().split(" ");


// First name

let firstName2 = parts[0];


// Last name

let lastName2 = parts[parts.length - 1];

console.log(firstName2);
console.log(lastName2);


// ======================================================
// 46. PRACTICAL: FIRST LETTER CAPITAL
// ======================================================

let nameInput = "ranbir";

// Prothom character capital
// Baki character small

let capitalized =
    nameInput.charAt(0).toUpperCase() +
    nameInput.slice(1).toLowerCase();

console.log(capitalized);


// ======================================================
// 47. PRACTICAL: PASSWORD LENGTH CHECK
// ======================================================

let password = "abc12345";

// Password minimum 8 character kina check

if (password.length >= 8) {
    console.log("Password length is okay");
} else {
    console.log("Password is too short");
}


// ======================================================
// 48. PRACTICAL: CASE-INSENSITIVE SEARCH
// ======================================================

let searchText = "JavaScript is awesome";
let keyword = "javascript";

// Duita kei lowercase kore compare kora
// Tai JavaScript, javascript, JAVASCRIPT
// sob khetre match korbe

if (
    searchText.toLowerCase().includes(
        keyword.toLowerCase()
    )
) {
    console.log("Found");
} else {
    console.log("Not Found");
}


// ======================================================
// 49. PRACTICAL: EXTRA SPACE REMOVE
// ======================================================

let messyText = "   Hello     World   ";

// trim() diye beginning ebong ending er space remove
// replace() diye multiple space ke single space kora

let cleanText =
    messyText.trim().replace(/\s+/g, " ");

console.log(cleanText);


// ======================================================
// 50. IMPORTANT STRING METHODS
// ======================================================

let str = "JavaScript";


// String er length
console.log(str.length);


// Character ber kora
console.log(str.charAt(0));


// Last character ber kora
console.log(str.at(-1));


// Capital letter
console.log(str.toUpperCase());


// Small letter
console.log(str.toLowerCase());


// Word ache kina check
console.log(str.includes("Script"));


// Kon word diye start check
console.log(str.startsWith("Java"));


// Kon word diye end check
console.log(str.endsWith("Script"));


// First position ber kora
console.log(str.indexOf("Script"));


// Last position ber kora
console.log(str.lastIndexOf("a"));


// Search kora
console.log(str.search("Script"));


// String er part ber kora
console.log(str.slice(0, 4));


// String er part ber kora
console.log(str.substring(0, 4));


// String ke array banano
console.log(str.split(""));


// Extra space remove
console.log(str.trim());


// Word replace
console.log(str.replace("Java", "Type"));


// Sob matching value replace
console.log(str.replaceAll("a", "A"));


// String join
console.log(str.concat(" Course"));


// String repeat
console.log(str.repeat(2));


// ======================================================
// FULL STACK WEB DEVELOPMENT E IMPORTANT
// ======================================================

// length
// toUpperCase()
// toLowerCase()
// trim()
// includes()
// startsWith()
// endsWith()
// indexOf()
// lastIndexOf()
// search()
// replace()
// replaceAll()
// slice()
// substring()
// split()
// join()
// charAt()
// at()
// Template Literals
// Escape Characters
// String to Number
// Number to String
// Regular Expression er basic use