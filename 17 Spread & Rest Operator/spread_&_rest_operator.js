// ==========================================
// PART 17: SPREAD AND REST OPERATOR
// PART 1: SPREAD OPERATOR
// ==========================================


// 1. Spread Operator
// Spread er kaj holo ekta array ba object er
// value gulo ke alada kore ber kore deya
// Spread operator er symbol holo ...

{
    const numbers = [10, 20, 30];

    console.log(...numbers);
}


// 2. Spread with Array

{
    const fruits = ["Apple", "Banana", "Mango"];

    const newFruits = [...fruits];

    console.log(newFruits);
}


// 3. Copy Array
// Spread diye array er copy create kora jay

{
    const original = [
        "HTML",
        "CSS",
        "JavaScript"
    ];

    const copy = [...original];

    console.log(original);
    console.log(copy);
}


// 4. Copy Array and Add New Value

{
    const skills = [
        "HTML",
        "CSS"
    ];

    const newSkills = [
        ...skills,
        "JavaScript"
    ];

    console.log(newSkills);
}


// 5. Add Value at Beginning

{
    const skills = [
        "CSS",
        "JavaScript"
    ];

    const newSkills = [
        "HTML",
        ...skills
    ];

    console.log(newSkills);
}


// 6. Add Value in the Middle

{
    const skills = [
        "HTML",
        "JavaScript"
    ];

    const newSkills = [
        "HTML",
        "CSS",
        "JavaScript"
    ];

    console.log(newSkills);
}


// 7. Copy Array and Modify
// Original array change hobe na

{
    const original = [
        "Apple",
        "Banana",
        "Mango"
    ];

    const copy = [...original];

    copy[0] = "Orange";

    console.log(original);
    console.log(copy);
}


// 8. Spread Two Arrays

{
    const frontend = [
        "HTML",
        "CSS",
        "JavaScript"
    ];

    const backend = [
        "Node.js",
        "Express.js"
    ];

    const fullStack = [
        ...frontend,
        ...backend
    ];

    console.log(fullStack);
}


// 9. Merge Multiple Arrays

{
    const array1 = [1, 2, 3];

    const array2 = [4, 5, 6];

    const array3 = [7, 8, 9];

    const result = [
        ...array1,
        ...array2,
        ...array3
    ];

    console.log(result);
}


// 10. Spread with Function
// Array er value gulo function er argument hisebe pathano jay

{
    function add(a, b, c) {
        return a + b + c;
    }

    const numbers = [10, 20, 30];

    console.log(add(...numbers));
}


// 11. Math.max() with Spread

{
    const numbers = [
        10,
        50,
        30,
        90,
        20
    ];

    console.log(Math.max(...numbers));
}


// 12. Math.min() with Spread

{
    const numbers = [
        10,
        50,
        30,
        90,
        20
    ];

    console.log(Math.min(...numbers));
}


// 13. Spread with String
// String er character gulo alada value hoye jay

{
    const name = "Ranbir";

    const letters = [...name];

    console.log(letters);
}


// 14. Copy Object
// Spread diye object er copy create kora jay

{
    const user = {
        name: "Ranbir",
        age: 20
    };

    const copy = {
        ...user
    };

    console.log(copy);
}


// 15. Copy Object and Add Property

{
    const user = {
        name: "Ranbir",
        age: 20
    };

    const newUser = {
        ...user,
        country: "Bangladesh"
    };

    console.log(newUser);
}


// 16. Copy Object and Update Property

{
    const user = {
        name: "Ranbir",
        age: 20
    };

    const updatedUser = {
        ...user,
        age: 21
    };

    console.log(user);
    console.log(updatedUser);
}