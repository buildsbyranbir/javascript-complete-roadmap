// ==========================================
// PART 17: SPREAD AND REST OPERATOR
// PART 2: REST OPERATOR AND MERGE
// ==========================================


// 17. Rest Operator
// Rest er kaj holo multiple value ke ekta array te collect kora
// Rest operator er symbol o ...

{
    function showNumbers(...numbers) {

        console.log(numbers);
    }

    showNumbers(10, 20, 30, 40);
}


// 18. Rest Parameter

{
    function addAll(...numbers) {

        let total = 0;

        for (let number of numbers) {

            total += number;
        }

        return total;
    }

    console.log(addAll(10, 20, 30));

    console.log(addAll(5, 10, 15, 20));
}


// 19. Normal Parameter + Rest Parameter
// Rest parameter sobsomoy last e thakbe

{
    function userInfo(name, ...skills) {

        console.log(name);

        console.log(skills);
    }

    userInfo(
        "Ranbir",
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    );
}


// 20. Rest with First Parameter

{
    function calculate(first, ...numbers) {

        console.log(first);

        console.log(numbers);
    }

    calculate(
        10,
        20,
        30,
        40
    );
}


// 21. Rest Parameter with Arrow Function

{
    const add = (...numbers) => {

        let total = 0;

        for (let number of numbers) {

            total += number;
        }

        return total;
    };

    console.log(add(10, 20, 30, 40));
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
        ...rest
    ] = numbers;

    console.log(first);

    console.log(second);

    console.log(rest);
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


// 24. Merge Arrays

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


// 25. Merge Objects

{
    const userInfo = {

        name: "Ranbir",

        age: 20
    };

    const addressInfo = {

        city: "Dhaka",

        country: "Bangladesh"
    };

    const user = {

        ...userInfo,

        ...addressInfo
    };

    console.log(user);
}


// 26. Merge Objects with Same Property
// Same property thakle last object er value win korbe

{
    const first = {

        name: "Ranbir",

        age: 20
    };

    const second = {

        age: 21,

        country: "Bangladesh"
    };

    const result = {

        ...first,

        ...second
    };

    console.log(result);
}


// 27. Spread and Rest Difference

{
    // Spread
    // Value ke spread kore

    const numbers = [10, 20, 30];

    console.log(...numbers);


    // Rest
    // Value ke collect kore

    function show(...values) {

        console.log(values);
    }

    show(10, 20, 30);
}


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

    // Existing cart copy kore new product add
    const newCart = [
        ...cart,

        {
            name: "Keyboard",
            price: 1500
        }
    ];

    console.log(newCart);
}


// 29. Practical User Update

{
    const user = {

        name: "Ranbir",

        age: 20,

        role: "Developer"
    };

    // Existing user copy kore age update
    const updatedUser = {

        ...user,

        age: 21
    };

    console.log(updatedUser);
}


// 30. Practical API Data Merge

{
    const userData = {

        id: 1,

        name: "Ranbir"
    };

    const profileData = {

        email: "ranbir@example.com",

        role: "Developer"
    };

    const completeUser = {

        ...userData,

        ...profileData
    };

    console.log(completeUser);
}


// 31. Function e Array Pass

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

    console.log(
        calculateTotal(...cartPrices)
    );
}


// 32. Important Rules

{
    // Spread
    // Array/Object er value spread kore

    const arr = [1, 2, 3];

    const newArr = [...arr];


    // Rest
    // Multiple value collect kore

    function test(...values) {

        console.log(values);
    }


    // Spread use hoy
    // Copy
    // Merge
    // Function e array pass
    // Object update


    // Rest use hoy
    // Function e unlimited argument
    // Array destructuring
    // Object destructuring


    console.log(newArr);
}


// 33. Full Stack Practical Example

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


    // User copy
    // Skills copy
    // New skill add

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