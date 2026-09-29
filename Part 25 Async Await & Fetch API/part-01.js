// ============================================================
// JAVASCRIPT ASYNCHRONOUS JAVASCRIPT + FETCH API
// PART 1
// ============================================================


// ============================================================
// 01. SYNCHRONOUS JAVASCRIPT
// ============================================================

// Synchronous code normally ekta ekta kore execute hoy.
// Mane prothom line sesh hole tarpor second line cholbe.

console.log("First");

console.log("Second");

console.log("Third");

// Output:
// First
// Second
// Third



// ============================================================
// 02. ASYNCHRONOUS JAVASCRIPT
// ============================================================

// Asynchronous code e kono kaj complete hote time lagleo
// JavaScript onno kaj continue korte pare.

console.log("Start");

setTimeout(() => {

    console.log("Async code");

}, 2000);

// setTimeout 2 second pore callback function execute korbe.
// Ei somoy JavaScript onno code execute korte parbe.

console.log("End");

// Output:
// Start
// End
// Async code



// ============================================================
// 03. PROMISE
// ============================================================

// Promise holo future e kono operation er result pawar system.
// API request, database operation etc. e Promise use hoy.

const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {

        // Kaj successful hole resolve() call hobe.
        resolve("Data successfully received");

    } else {

        // Kaj fail hole reject() call hobe.
        reject("Something went wrong");

    }

});


// .then() successful result handle kore.
myPromise.then((data) => {

    console.log(data);

});


// .catch() error handle kore.
myPromise.catch((error) => {

    console.log(error);

});



// ============================================================
// 04. ASYNC FUNCTION
// ============================================================

// async keyword use korle function automatically Promise return kore.
// Tai async function er result Promise hisebe paoa jay.

async function hello() {

    return "Hello Full Stack Developer";

}

hello().then((data) => {

    console.log(data);

});



// ============================================================
// 05. AWAIT
// ============================================================

// await mane holo:
// "Ei Promise er result na paoa porjonto ei async function-er
// porer line-e jaoar age wait koro."

function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("User data received");

        }, 2000);

    });

}


async function showUser() {

    console.log("Loading...");

    // await use korar karon:
    // getUser() Promise return korche.
    // Tai result pawar jonno await use korchi.

    const user = await getUser();

    console.log(user);

}

showUser();



// ============================================================
// 06. ASYNC + AWAIT + TRY/CATCH
// ============================================================

// API request fail korte pare.
// Tai error handle korar jonno try/catch use kori.

async function getData() {

    try {

        // try block er vitore risky asynchronous code rakhi.

        const result = await Promise.resolve("Data received");

        console.log(result);

    } catch (error) {

        // Kono error hole catch block execute hobe.

        console.log("Error:", error);

    }

}

getData();



// ============================================================
// 07. FETCH API
// ============================================================

// fetch() browser er built-in API.
// Eta diye server/API te HTTP request pathano jay.

fetch("https://jsonplaceholder.typicode.com/users")

    // fetch() immediately actual data dey na.
    // Eta ekta Promise return kore.

    .then((response) => {

        // response holo server theke asa response.

        return response.json();

        // Server JSON data pathale
        // response.json() seta JavaScript data te convert kore.

    })

    .then((data) => {

        // JSON convert howar por actual data ekhane pabo.

        console.log(data);

    })

    .catch((error) => {

        // Network error hole ekhane asbe.

        console.log("Error:", error);

    });



// ============================================================
// 08. FETCH API + ASYNC/AWAIT
// ============================================================

// Real project e async/await pattern khub common.
// Karon code beshi readable hoy.

async function fetchUsers() {

    try {

        // Server e GET request jacche.
        // fetch() default vabe GET request kore.

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Server response ke JSON theke
        // JavaScript object/array te convert korchi.

        const users = await response.json();


        // Ekhon users er moddhe actual data ache.

        console.log(users);

    } catch (error) {

        // Request fail hole error handle korbo.

        console.log("Error:", error);

    }

}

fetchUsers();



// ============================================================
// 09. GET REQUEST
// ============================================================

// GET er kaj holo server theke existing data ana.
// Example:
// User list
// Product list
// Blog list

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log("Users:", users);

    } catch (error) {

        console.log("Error:", error);

    }

}

getUsers();



// ============================================================
// 10. SINGLE USER GET
// ============================================================

// Shob user na niye specific user ante pari.
// URL er /1 mane user ID 1.

async function getSingleUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const user = await response.json();

        console.log("Single User:", user);

    } catch (error) {

        console.log("Error:", error);

    }

}

getSingleUser();



// ============================================================
// 11. DYNAMIC GET REQUEST
// ============================================================

// User ID fixed na rekhe function parameter diye pathano jay.

async function getUser(userId) {

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        const user = await response.json();

        console.log(user);

    } catch (error) {

        console.log("Error:", error);

    }

}


// Ekhane userId = 5
getUser(5);


// Ekhane userId = 8
getUser(8);



// ============================================================
// 12. RESPONSE.OK
// ============================================================

// fetch() HTTP 404/500 peleo automatically catch e jay na.
// Tai response.ok check kora important.

async function getUsersWithCheck() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // response.ok true hole normally
        // HTTP status successful range e ache.

        if (!response.ok) {

            // Successful na hole nijer error throw korchi.

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getUsersWithCheck();



// ============================================================
// 13. HTTP STATUS CODE
// ============================================================

// Server response er status bujhar jonno status code use hoy.

// 200 → Request successful
// 201 → New resource successfully created
// 204 → Successful but response body nai

// 400 → Bad Request
// 401 → Authentication required / unauthorized
// 403 → Permission nai
// 404 → Resource paoa jay nai
// 500 → Server side error



// ============================================================
// 14. JSON
// ============================================================

// JSON = JavaScript Object Notation
// Frontend ebong backend er moddhe data exchange e
// JSON khub commonly use hoy.

const user = {

    name: "Ranbir",
    age: 20,
    skill: "MERN Stack"

};

console.log(user);



// ============================================================
// 15. JSON.stringify()
// ============================================================

// JavaScript Object ke JSON string e convert kore.
// POST/PUT/PATCH request er body te JSON pathanor somoy
// eta khub important.

const userData = {

    name: "Ranbir",
    skill: "Full Stack Web Developer"

};


const jsonData = JSON.stringify(userData);

console.log(jsonData);

console.log(typeof jsonData);

// Ekhane output hobe:
// string



// ============================================================
// 16. JSON.parse()
// ============================================================

// JSON string ke abar JavaScript object e convert kore.

const jsonString = `
{
    "name": "Ranbir",
    "skill": "MERN Stack"
}
`;

const normalObject = JSON.parse(jsonString);

console.log(normalObject);

console.log(normalObject.name);

console.log(normalObject.skill);



// ============================================================
// 17. FINALLY
// ============================================================

// finally successful hok ba error hok,
// normally execute hobe.

async function fetchData() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Request failed");

        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        // Loading spinner off kora,
// request complete message dewa etc. e finally useful.

        console.log("Request finished");

    }

}

fetchData();
