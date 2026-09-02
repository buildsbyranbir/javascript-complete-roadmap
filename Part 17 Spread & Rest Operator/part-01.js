// ==========================================
// PART 17: SPREAD & REST OPERATOR
// PART 1: SPREAD OPERATOR
// ==========================================


// 1. Spread Operator
// Spread operator er symbol holo ...
// Eta array/object er value gulo ke spread kore

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
// Spread diye original array er copy create kora jay

{
    const originalArray = [
        "HTML",
        "CSS",
        "JavaScript"
    ];

    const copiedArray = [...originalArray];

    console.log(originalArray);
    console.log(copiedArray);
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


// 5. Array er Beginning e Value Add

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


// 6. Merge Two Arrays
// Spread diye duita array merge kora jay

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


// 7. Merge Multiple Arrays

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


// 8. Original Array Change na kore Update
// Eta React/modern JS e onek important

{
    const userSkills = [
        "HTML",
        "CSS",
        "JavaScript"
    ];

    const updatedSkills = [
        ...userSkills,
        "React"
    ];

    console.log(userSkills);

    console.log(updatedSkills);
}


// 9. Array er Majhe Value Add

{
    const skills = [
        "HTML",
        "JavaScript"
    ];

    const updatedSkills = [
        skills[0],
        "CSS",
        skills[1]
    ];

    console.log(updatedSkills);
}


// 10. Spread with Function
// Array er value function er argument hisebe pathano jay

{
    function add(a, b, c) {

        return a + b + c;
    }

    const numbers = [
        10,
        20,
        30
    ];

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
// String er character gulo alada array element hoy

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

    const copiedUser = {
        ...user
    };

    console.log(copiedUser);
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