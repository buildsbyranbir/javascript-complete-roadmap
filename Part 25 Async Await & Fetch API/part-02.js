// ============================================================
// FETCH API + HTTP METHODS
// PART 2
// ============================================================


// ============================================================
// 01. POST REQUEST
// ============================================================

// POST er kaj holo server e NEW DATA CREATE kora.
// Example:
// New user
// New product
// New order
// New post

async function createUser() {

    try {

        // Je data server e create korte chai
        // seta JavaScript object hisebe banacchi.

        const user = {

            name: "Ranbir",
            email: "ranbir@example.com",
            skill: "MERN Stack"

        };


        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {

                // POST use korchi karon
                // amra new data create korte chai.

                method: "POST",


                // Server ke bolchi:
                // "Ami JSON format e data pathacchi."

                headers: {

                    "Content-Type": "application/json"

                },


                // JavaScript object ke JSON string e convert kore
                // request body te pathacchi.

                body: JSON.stringify(user)

            }
        );


        // HTTP request successful kina check.

        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        // Server er response JSON e convert.

        const data = await response.json();


        console.log("Created User:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

createUser();



// ============================================================
// 02. POST + PRODUCT EXAMPLE
// ============================================================

// POST sudhu user er jonno na.
// Product, order, booking etc. sob create korte use kora jay.

async function createProduct() {

    const product = {

        title: "Laptop",
        price: 50000,
        category: "Computer"

    };


    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(product)

            }
        );


        const data = await response.json();

        console.log("Created Product:", data);

    } catch (error) {

        console.log("Error:", error);

    }

}

createProduct();



// ============================================================
// 03. PUT REQUEST
// ============================================================

// PUT er kaj holo existing resource ke
// complete vabe update/replace kora.

// Example:
// User er name, email, skill sob update korte chai.

async function updateUser() {

    try {

        const updatedUser = {

            name: "Ranbir Roy",
            email: "ranbirroy@example.com",
            skill: "Full Stack Web Developer"

        };


        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {

                // PUT use korchi karon
                // existing user er complete information update korchi.

                method: "PUT",


                headers: {

                    "Content-Type": "application/json"

                },


                body: JSON.stringify(updatedUser)

            }
        );


        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        const data = await response.json();

        console.log("Updated User:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

updateUser();



// ============================================================
// 04. PATCH REQUEST
// ============================================================

// PATCH use hoy resource er
// specific part update korar jonno.

// Dhoro user er shudhu name change korte chai.
// Tokhon puro user data pathanor dorkar nai.

async function updateUserName() {

    try {

        const updateData = {

            name: "Ranbir Chandra Roy"

        };


        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {

                method: "PATCH",

                headers: {

                    "Content-Type": "application/json"

                },

                // Shudhu name pathacchi.
                // Karon shudhu name update korte chai.

                body: JSON.stringify(updateData)

            }
        );


        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        const data = await response.json();

        console.log("Updated:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

updateUserName();



// ============================================================
// 05. PUT vs PATCH
// ============================================================

// PUT:
// Complete resource update/replace korar jonno.

// Example:

const fullUser = {

    name: "Ranbir",
    email: "ranbir@gmail.com",
    skill: "MERN"

};


// PATCH:
// Specific field update korar jonno.

// Example:

const onlyName = {

    name: "New Ranbir"

};


// Easy vabe mone rakho:
//
// PUT   → Full Update
// PATCH → Partial Update



// ============================================================
// 06. DELETE REQUEST
// ============================================================

// DELETE er kaj holo existing data delete kora.

async function deleteUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {

                // DELETE use korchi karon
                // user delete korte chai.

                method: "DELETE"

            }
        );


        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        console.log("User deleted successfully");

    } catch (error) {

        console.log("Error:", error.message);

    }

}

deleteUser();



// ============================================================
// 07. QUERY PARAMETER
// ============================================================

// Query parameter use hoy
// search, filter, sort etc. er jonno.

// Example:
// ?name=Leanne

async function searchUsers() {

    const search = "Leanne";


    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?name=${search}`
    );


    const data = await response.json();


    console.log(data);

}

searchUsers();



// ============================================================
// 08. URLSearchParams
// ============================================================

// Multiple query parameter thakle
// URLSearchParams use kora convenient.

const params = new URLSearchParams({

    name: "Leanne",
    username: "Bret"

});


const url =
    `https://jsonplaceholder.typicode.com/users?${params}`;


console.log(url);



// ============================================================
// 09. RESPONSE STATUS + HEADERS
// ============================================================

// Response object er moddhe
// status, headers, ok etc. information thake.

async function checkResponse() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        console.log("Status:", response.status);


        console.log("Success:", response.ok);


        console.log("Headers:", response.headers);


        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

checkResponse();



// ============================================================
// 10. COMPLETE CRUD
// ============================================================

// CRUD holo:
//
// C = Create
// R = Read
// U = Update
// D = Delete


// ------------------------------------------------------------
// CREATE
// POST
// ------------------------------------------------------------

async function create() {

    const user = {

        name: "Ranbir",
        email: "ranbir@example.com"

    };


    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(user)

        }
    );


    const data = await response.json();

    console.log("CREATE:", data);

}



// ------------------------------------------------------------
// READ
// GET
// ------------------------------------------------------------

// Existing data server theke niye asha.

async function read() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );


    const data = await response.json();


    console.log("READ:", data);

}



// ------------------------------------------------------------
// UPDATE
// PUT
// ------------------------------------------------------------

// Existing resource complete update.

async function update() {

    const user = {

        name: "Updated Ranbir",
        email: "updated@example.com"

    };


    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(user)

        }
    );


    const data = await response.json();


    console.log("UPDATE:", data);

}



// ------------------------------------------------------------
// PARTIAL UPDATE
// PATCH
// ------------------------------------------------------------

// Specific field update.

async function partialUpdate() {

    const dataToUpdate = {

        name: "New Ranbir"

    };


    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {

            method: "PATCH",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dataToUpdate)

        }
    );


    const data = await response.json();


    console.log("PATCH:", data);

}



// ------------------------------------------------------------
// DELETE
// ------------------------------------------------------------

async function remove() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {

            method: "DELETE"

        }
    );


    console.log("DELETE:", response.status);

}



// ============================================================
// 11. CRUD একসাথে
// ============================================================

// Ei function diye CRUD operation gula
// serially execute korte pari.

async function runCRUD() {

    try {

        // Prothome new data create.

        await create();


        // Tarpor existing data read.

        await read();


        // Tarpor data update.

        await update();


        // Tarpor specific field update.

        await partialUpdate();


        // Sheshe delete.

        await remove();


        console.log("CRUD operation completed");

    } catch (error) {

        console.log("CRUD Error:", error);

    }

}


// Function call korte chaile uncomment koro.

// runCRUD();



// ============================================================
// 12. REAL FULL STACK FLOW
// ============================================================

// Frontend theke:
//
// fetch()
//      ↓
// HTTP Request
//      ↓
// Node.js + Express Backend
//      ↓
// MongoDB
//      ↓
// Database
//      ↓
// Express Response
//      ↓
// JSON
//      ↓
// React Frontend
//      ↓
// UI



// ============================================================
// 13. FINAL HTTP METHOD CHEAT SHEET
// ============================================================

// GET
// → Data pawar jonno

// POST
// → New data create korar jonno

// PUT
// → Complete data update/replace korar jonno

// PATCH
// → Specific data update korar jonno

// DELETE
// → Data delete korar jonno



// ============================================================
// 14. FINAL JSON FLOW
// ============================================================

// JavaScript Object
//
//       ↓
//
// JSON.stringify()
//
//       ↓
//
// JSON String
//
//       ↓
//
// HTTP Request
//
//       ↓
//
// Backend
//
//       ↓
//
// HTTP Response
//
//       ↓
//
// response.json()
//
//       ↓
//
// JavaScript Object