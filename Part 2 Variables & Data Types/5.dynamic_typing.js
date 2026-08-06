// ============================================
// JavaScript Dynamic Typing - Full Guide
// Banglish Comment Soho
// Full Stack Web Developer er jonno
// ============================================


// =====================================================
// 1. Dynamic Typing
// =====================================================

// JavaScript dynamically typed language.
// Variable declare korar somoy type likhte hoy na.

let data = "Ranbir";

console.log(data);
console.log(typeof data);


// =====================================================
// 2. Variable Type Change
// =====================================================

// Ekoi variable er type change kora jay.

let value = "100";

console.log(value);
console.log(typeof value);

value = 100;

console.log(value);
console.log(typeof value);

value = true;

console.log(value);
console.log(typeof value);


// =====================================================
// 3. typeof Operator
// =====================================================

// typeof diye variable er data type check kora hoy.

console.log(typeof "Hello");
console.log(typeof 200);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);      // object (JavaScript er purono bug)
console.log(typeof []);
console.log(typeof {});


// =====================================================
// 4. String → Number
// =====================================================

// String ke Number e convert kora.

let price = "500";

console.log(Number(price));
console.log(parseInt(price));
console.log(parseFloat(price));


// =====================================================
// 5. Number → String
// =====================================================

// Number ke String e convert kora.

let number = 100;

console.log(String(number));
console.log(number.toString());


// =====================================================
// 6. Boolean Conversion
// =====================================================

// Value ke Boolean e convert.

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));


// =====================================================
// 7. Truthy Values
// =====================================================

// Egulo sob Truthy.

console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("JavaScript"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));


// =====================================================
// 8. Falsy Values
// =====================================================

// Egulo sob Falsy.

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(NaN));


// =====================================================
// 9. Implicit Type Conversion (Type Coercion)
// =====================================================

// JavaScript nije theke type convert kore.

console.log("5" + 5);     // "55"
console.log("10" - 2);    // 8
console.log("10" * 2);    // 20
console.log("20" / 4);    // 5


// =====================================================
// 10. Explicit Type Conversion
// =====================================================

// Nijer hate type convert.

let age = "25";

age = Number(age);

console.log(age);
console.log(typeof age);


// =====================================================
// 11. == vs ===
// =====================================================

// == sudhu value compare kore.

console.log(5 == "5");     // true

// === value + type compare kore.

console.log(5 === "5");    // false


// =====================================================
// 12. Arithmetic Type Conversion
// =====================================================

console.log("10" * 2);
console.log("20" / 2);
console.log("10" - 3);
console.log("10" + 3);


// =====================================================
// 13. Dynamic Object
// =====================================================

// Runtime e object e property add kora jay.

let user = {
    name: "Ranbir"
};

user.age = 21;
user.city = "Dinajpur";

console.log(user);


// =====================================================
// 14. Dynamic Array
// =====================================================

// Ekoi array te different type er value rakha jay.

let arr = [];

arr.push(10);
arr.push("Hello");
arr.push(true);
arr.push({
    name: "Ranbir"
});

console.log(arr);


// =====================================================
// 15. Function Parameter Dynamic
// =====================================================

// Function jekono type er value receive korte pare.

function printData(data){

    console.log(data);
    console.log(typeof data);

}

printData("Hello");
printData(500);
printData(true);


// =====================================================
// 16. Dynamic Return Type
// =====================================================

// Function different type return korte pare.

function getData(type){

    if(type === "name"){
        return "Ranbir";
    }

    return 21;

}

console.log(getData("name"));
console.log(getData("age"));


// =====================================================
// 17. Best Practice
// =====================================================

// Sob somoy === use koro.

console.log(5 === "5");

// Type check kore kaj koro.

let input = "100";

if(typeof input === "string"){

    console.log("Eta String");

}

// Explicit conversion use koro.

let result = Number(input);

console.log(result);


// =====================================================
// 18. Real Life Example
// =====================================================

// API theke data ashle sobsomoy type check kora valo.

let apiAge = "30";

if(typeof apiAge === "string"){

    apiAge = Number(apiAge);

}

console.log(apiAge);
console.log(typeof apiAge);


// =====================================================
// 19. Summary
// =====================================================

// ✔ JavaScript dynamically typed language.
// ✔ Same variable e multiple type assign kora jay.
// ✔ typeof diye type check kora hoy.
// ✔ Number(), String(), Boolean() diye explicit conversion.
// ✔ parseInt() & parseFloat() number convert kore.
// ✔ == type convert kore compare kore.
// ✔ === value + type duita compare kore.
// ✔ Truthy/Falsy concept jana dorkar.
// ✔ Type Coercion bujhte hobe.
// ✔ Object, Array, Function sob dynamic.
// ✔ Professional code e === use kora best.
// ✔ Explicit conversion use korle bug kom hoy.