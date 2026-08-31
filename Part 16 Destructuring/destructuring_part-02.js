// ==========================================
// PART 16: DESTRUCTURING
// PART 2: OBJECT DESTRUCTURING
// ==========================================


// 13. Basic Object Destructuring
{
    const user = {
        name: "Ranbir",
        age: 20,
        country: "Bangladesh"
    };

    const {
        name,
        age,
        country
    } = user;

    console.log(name);
    console.log(age);
    console.log(country);
}


// 14. Normal Access vs Destructuring
{
    const person = {
        name: "Rahim",
        age: 21
    };

    // Normal way
    console.log(person.name);
    console.log(person.age);

    // Destructuring way
    const {
        name: personName,
        age: personAge
    } = person;

    console.log(personName);
    console.log(personAge);
}


// 15. Rename Property
{
    const student = {
        name: "Ranbir",
        age: 20
    };

    // name property ke studentName variable e rakha holo
    const {
        name: studentName,
        age: studentAge
    } = student;

    console.log(studentName);
    console.log(studentAge);
}


// 16. Object Default Value
{
    const userInfo = {
        name: "Ranbir"
    };

    // age ebong country object e nei
    // Tai default value use hobe
    const {
        name: userName,
        age = 20,
        country = "Bangladesh"
    } = userInfo;

    console.log(userName);
    console.log(age);
    console.log(country);
}


// 17. Object Rest
{
    const userData = {
        name: "Ranbir",
        age: 20,
        country: "Bangladesh",
        role: "Developer"
    };

    // name alada variable e
    // baki property otherData object e
    const {
        name,
        ...otherData
    } = userData;

    console.log(name);
    console.log(otherData);
}


// 18. Nested Object Destructuring
{
    const user = {
        name: "Ranbir",

        address: {
            city: "Dhaka",
            country: "Bangladesh"
        }
    };

    const {
        address: {
            city,
            country
        }
    } = user;

    console.log(city);
    console.log(country);
}


// 19. Nested Object with Rename
{
    const person = {
        name: "Ranbir",

        address: {
            city: "Dhaka",
            country: "Bangladesh"
        }
    };

    const {
        address: {
            city: userCity,
            country: userCountry
        }
    } = person;

    console.log(userCity);
    console.log(userCountry);
}


// 20. Nested Object with Default Value
{
    const profile = {
        name: "Ranbir",

        address: {
            city: "Dhaka"
        }
    };

    // country na thakay default value use hobe
    const {
        name,
        address: {
            city,
            country = "Bangladesh"
        }
    } = profile;

    console.log(name);
    console.log(city);
    console.log(country);
}


// 21. Function Parameter Destructuring
{
    function showUser({ name, age }) {
        console.log(name);
        console.log(age);
    }

    showUser({
        name: "Ranbir",
        age: 20
    });
}


// 22. Function Parameter Default Value
{
    function userInfo({
        name,
        age = 20,
        country = "Bangladesh"
    }) {
        console.log(name);
        console.log(age);
        console.log(country);
    }

    userInfo({
        name: "Ranbir"
    });
}


// 23. Nested Function Parameter Destructuring
{
    function showAddress({
        name,
        address: {
            city,
            country
        }
    }) {
        console.log(name);
        console.log(city);
        console.log(country);
    }

    showAddress({
        name: "Ranbir",

        address: {
            city: "Dhaka",
            country: "Bangladesh"
        }
    });
}


// 24. Array + Object Destructuring
{
    const users = [
        {
            name: "Ranbir",
            age: 20
        },

        {
            name: "Rahim",
            age: 21
        }
    ];

    const [
        firstUser,
        secondUser
    ] = users;

    console.log(firstUser.name);
    console.log(secondUser.name);
}


// 25. Direct Array + Object Destructuring
{
    const users = [
        {
            name: "Ranbir",
            age: 20
        },

        {
            name: "Rahim",
            age: 21
        }
    ];

    const [
        {
            name: firstName,
            age: firstAge
        },

        {
            name: secondName,
            age: secondAge
        }
    ] = users;

    console.log(firstName);
    console.log(firstAge);
    console.log(secondName);
    console.log(secondAge);
}


// 26. API Response Example
{
    const response = {
        data: {
            user: {
                name: "Ranbir",
                email: "ranbir@example.com"
            }
        }
    };

    // Nested API data direct variable e neya holo
    const {
        data: {
            user: {
                name,
                email
            }
        }
    } = response;

    console.log(name);
    console.log(email);
}


// 27. Object Rest
{
    const product = {
        id: 101,
        name: "Laptop",
        price: 50000,
        stock: 10
    };

    const {
        id,
        ...productInfo
    } = product;

    console.log(id);
    console.log(productInfo);
}


// 28. Array Rest
{
    const technologies = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js"
    ];

    const [
        frontend1,
        frontend2,
        ...remaining
    ] = technologies;

    console.log(frontend1);
    console.log(frontend2);
    console.log(remaining);
}


// 29. Array vs Object Destructuring
{
    // Array position/index follow kore
    const [first, second] = [10, 20];

    console.log(first);
    console.log(second);


    // Object property name follow kore
    const user = {
        name: "Ranbir",
        age: 20
    };

    const {
        name,
        age
    } = user;

    console.log(name);
    console.log(age);
}


// 30. Full Stack Practical Example
{
    const apiData = {
        id: 1,

        name: "Ranbir",

        email: "ranbir@example.com",

        skills: [
            "JavaScript",
            "React",
            "Node.js"
        ],

        address: {
            city: "Dhaka",
            country: "Bangladesh"
        }
    };


    const {
        id,
        name,
        email,

        skills: [
            firstSkill,
            secondSkill,
            thirdSkill
        ],

        address: {
            city,
            country
        }
    } = apiData;


    console.log(id);
    console.log(name);
    console.log(email);

    console.log(firstSkill);
    console.log(secondSkill);
    console.log(thirdSkill);

    console.log(city);
    console.log(country);
}


// 31. Important Rules
{
    // Array destructuring position based

    const [a, b] = [10, 20];


    // Object destructuring property name based

    const user = {
        name: "Ranbir",
        age: 20
    };

    const {
        name,
        age
    } = user;


    // Default value undefined hole use hoy

    const [x = 100] = [];


    // Rest baki value collect kore

    const [first, ...rest] = [1, 2, 3, 4];


    console.log(a);
    console.log(b);

    console.log(name);
    console.log(age);

    console.log(x);
    console.log(rest);
}