// ==========================================
// PART 16: DESTRUCTURING
// PART 1: ARRAY DESTRUCTURING
// ==========================================


// 1. Basic Array Destructuring
{
    const fruits = ["Apple", "Banana", "Mango"];

    const [first, second, third] = fruits;

    console.log(first);
    console.log(second);
    console.log(third);
}


// 2. Normal Access vs Destructuring
{
    const names = ["Rahim", "Karim", "Ranbir"];

    // Normal way
    console.log(names[0]);
    console.log(names[1]);

    // Destructuring way
    const [name1, name2, name3] = names;

    console.log(name1);
    console.log(name2);
    console.log(name3);
}


// 3. Skip Array Elements
{
    const numbers = [10, 20, 30, 40];

    // Prothom ebong tritiyo value skip kora holo
    const [, secondNumber, , fourthNumber] = numbers;

    console.log(secondNumber);
    console.log(fourthNumber);
}


// 4. Default Value
{
    const users = ["Ranbir"];

    // Second value na thakay default value 20 hobe
    const [userName, userAge = 20] = users;

    console.log(userName);
    console.log(userAge);
}


// 5. Multiple Default Values
{
    const data = ["Ranbir", 20];

    const [
        name,
        age,
        country = "Bangladesh"
    ] = data;

    console.log(name);
    console.log(age);
    console.log(country);
}


// 6. Rest with Array Destructuring
{
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js"
    ];

    // Prothom duita alada variable
    // Baki sob value otherSkills array te jabe
    const [
        html,
        css,
        ...otherSkills
    ] = skills;

    console.log(html);
    console.log(css);
    console.log(otherSkills);
}


// 7. Swap Variables
{
    let a = 10;
    let b = 20;

    // Destructuring use kore value swap
    [a, b] = [b, a];

    console.log(a);
    console.log(b);
}


// 8. Function theke Array Return
{
    function getUser() {
        return ["Ranbir", 20];
    }

    const [name, age] = getUser();

    console.log(name);
    console.log(age);
}


// 9. Function theke Multiple Values
{
    function getNumbers() {
        return [10, 20, 30];
    }

    const [
        firstNumber,
        secondNumber,
        thirdNumber
    ] = getNumbers();

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdNumber);
}


// 10. Nested Array Destructuring
{
    const numbers = [
        [1, 2],
        [3, 4]
    ];

    const [
        [a, b],
        [c, d]
    ] = numbers;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}


// 11. Nested Array with Default Value
{
    const data = [
        [10, 20]
    ];

    const [
        [
            first,
            second,
            third = 30
        ]
    ] = data;

    console.log(first);
    console.log(second);
    console.log(third);
}


// 12. Practical Example
{
    const user = [
        "Ranbir",
        20,
        "Full Stack Developer"
    ];

    const [
        userName,
        userAge,
        profession
    ] = user;

    console.log(userName);
    console.log(userAge);
    console.log(profession);
}