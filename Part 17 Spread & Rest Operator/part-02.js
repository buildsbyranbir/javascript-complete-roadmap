// ==========================================
// PART 17: SPREAD & REST OPERATOR
// PART 2: REST, OBJECT COPY & MERGE
// ==========================================


// 17. Rest Operator
// Rest operator multiple value collect kore
// Rest er symbol o ...
// Function er khetre rest parameter use hoy

{
    function showNumbers(...numbers) {

        console.log(numbers);
    }

    showNumbers(
        10,
        20,
        30,
        40
    );
}


// 18. Rest Parameter diye Total

{
    function addAll(...numbers) {

        let total = 0;

        for (let number of numbers) {

            total += number;
        }

        return total;
    }

    console.log(addAll(10, 20, 30));

    console.log(addAll(10, 20, 30, 40, 50));
}


// 19. Normal Parameter + Rest Parameter

{
    function userInfo(name, ...skills) {

        console.log("Name:", name);

        console.log("Skills:", skills);
    }

    userInfo(
        "Ranbir",
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    );
}


// 20. Rest Parameter Always Last
// Rest parameter er por kono parameter rakha jay na

{
    function test(first, second, ...others) {

        console.log(first);

        console.log(second);

        console.log(others);
    }

    test(
        10,
        20,
        30,
        40,
        50
    );
}


// 21. Rest with Arrow Function

{
    const add = (...numbers) => {

        let total = 0;

        for (let number of numbers) {

            total += number;
        }

        return total;
    };

    console.log(
        add(10, 20, 30, 40)
    );
}


// 22. Rest with Array Destructuring

{
    const numbers = [
        10,
        20,
        30,
        40,
        50
    ];

    const [
        first,
        second,
        ...restNumbers
    ] = numbers;

    console.log(first);

    console.log(second);

    console.log(restNumbers);
}


// 23. Rest with Object Destructuring

{
    const user = {

        name: "Ranbir",

        age: 20,

        country: "Bangladesh",

        role: "Developer"
    };

    const {
        name,
        ...otherInfo
    } = user;

    console.log(name);

    console.log(otherInfo);
}


// 24. Merge Objects

{
    const personalInfo = {

        name: "Ranbir",

        age: 20
    };

    const professionalInfo = {

        role: "Developer",

        skill: "JavaScript"
    };

    const user = {

        ...personalInfo,

        ...professionalInfo
    };

    console.log(user);
}


// 25. Merge Objects with Same Property
// Same key thakle last value use hobe

{
    const firstObject = {

        name: "Ranbir",

        age: 20
    };

    const secondObject = {

        age: 21,

        country: "Bangladesh"
    };

    const result = {

        ...firstObject,

        ...secondObject
    };

    console.log(result);
}


// age er value 21 hobe
// Karon secondObject pore spread kora hoyeche


// 26. Object Copy and Update

{
    const user = {

        name: "Ranbir",

        age: 20,

        role: "Student"
    };

    const updatedUser = {

        ...user,

        role: "Developer"
    };

    console.log(user);

    console.log(updatedUser);
}


// 27. Object Copy and Delete Property
// Spread diye directly delete kora jay na
// Destructuring + rest use kora jay

{
    const user = {

        name: "Ranbir",

        age: 20,

        password: "12345"
    };

    const {
        password,
        ...safeUser
    } = user;

    console.log(safeUser);
}


// password bad diye baki property pawa gelo


// 28. Practical Cart Example

{
    const cart = [

        {
            name: "Laptop",
            price: 50000
        },

        {
            name: "Mouse",
            price: 1000
        }
    ];


    const newCart = [

        ...cart,

        {
            name: "Keyboard",
            price: 1500
        }
    ];


    console.log(cart);

    console.log(newCart);
}


// 29. Practical User Update

{
    const user = {

        id: 1,

        name: "Ranbir",

        age: 20
    };


    const updatedUser = {

        ...user,

        age: 21
    };


    console.log(updatedUser);
}


// 30. Practical API Data Merge

{
    const basicData = {

        id: 1,

        name: "Ranbir"
    };


    const extraData = {

        email: "ranbir@example.com",

        role: "Developer"
    };


    const completeData = {

        ...basicData,

        ...extraData
    };


    console.log(completeData);
}


// 31. Function + Spread + Rest

{
    function calculateTotal(...prices) {

        let total = 0;

        for (let price of prices) {

            total += price;
        }

        return total;
    }


    const cartPrices = [
        500,
        1000,
        1500
    ];


    // Spread array ke alada argument e convert korbe
    console.log(
        calculateTotal(...cartPrices)
    );
}


// 32. Spread vs Rest

{
    // Spread
    // Value ke spread kore

    const numbers = [
        10,
        20,
        30
    ];

    console.log(...numbers);


    // Rest
    // Multiple value ke collect kore

    function show(...values) {

        console.log(values);
    }

    show(
        10,
        20,
        30
    );
}


// 33. Nested Array Copy
// Spread shallow copy kore

{
    const original = [
        [1, 2],
        [3, 4]
    ];

    const copy = [
        ...original
    ];

    console.log(copy);
}


// Important:
// Spread diye normal array/object copy korle
// nested object/array completely independent hoy na


// 34. Nested Object Copy

{
    const user = {

        name: "Ranbir",

        address: {
            city: "Dhaka"
        }
    };


    const copy = {

        ...user
    };


    console.log(copy);
}


// 35. Full Stack Practical Example

{
    const oldUser = {

        name: "Ranbir",

        age: 20,

        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    };


    // User object copy
    // Skills array o copy
    // Notun skill add

    const updatedUser = {

        ...oldUser,

        skills: [
            ...oldUser.skills,
            "React"
        ]
    };


    console.log(oldUser);

    console.log(updatedUser);
}


// 36. Important Rules

{
    // Spread
    // Array/Object copy korte use hoy
    // Array/Object merge korte use hoy
    // Function e array er value pathate use hoy


    // Rest
    // Function e unlimited argument receive korte use hoy
    // Array destructuring e baki value collect kore
    // Object destructuring e baki property collect kore


    // Spread
    const copyArray = [...[1, 2, 3]];


    // Rest
    function test(...values) {

        console.log(values);
    }


    console.log(copyArray);
}