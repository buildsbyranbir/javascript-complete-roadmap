
// ======================================================
// PART 21: EVENTS
// CLEAN & COMPLETE JAVASCRIPT
// ======================================================


// ======================================================
// 1. CLICK EVENT
// ======================================================

const clickButton = document.getElementById("clickButton");
const clickText = document.getElementById("clickText");

if (clickButton) {

    clickButton.addEventListener("click", function () {

        console.log("Button clicked");

        if (clickText) {
            clickText.textContent = "Button click hoyeche";
        }

    });

}


// ======================================================
// 2. INPUT EVENT
// ======================================================

const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput");

if (nameInput) {

    nameInput.addEventListener("input", function (event) {

        // User ja type korche seta event.target.value diye pawa jay
        const value = event.target.value;

        console.log(value);

        if (nameOutput) {
            nameOutput.textContent = value;
        }

    });

}


// ======================================================
// 3. CHANGE EVENT
// ======================================================

if (nameInput) {

    nameInput.addEventListener("change", function (event) {

        console.log("Value changed:", event.target.value);

    });

}


// ======================================================
// 4. SUBMIT EVENT
// ======================================================

const myForm = document.getElementById("myForm");

if (myForm) {

    myForm.addEventListener("submit", function (event) {

        // Browser-er default form submit bondho korchi
        event.preventDefault();

        console.log("Form submitted");

    });

}


// ======================================================
// 5. FORM DATA
// ======================================================

const emailInput = document.getElementById("emailInput");

if (myForm && emailInput) {

    myForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = emailInput.value;

        console.log("Email:", email);

    });

}


// ======================================================
// 6. KEYBOARD EVENT
// ======================================================

const keyboardInput =
    document.getElementById("keyboardInput");

if (keyboardInput) {

    // Keyboard-er key press korle
    keyboardInput.addEventListener(
        "keydown",
        function (event) {

            console.log(
                "Key Down:",
                event.key
            );

        }
    );


    // Keyboard-er key chere dile
    keyboardInput.addEventListener(
        "keyup",
        function (event) {

            console.log(
                "Key Up:",
                event.key
            );

        }
    );

}


// ======================================================
// 7. ENTER KEY
// ======================================================

if (keyboardInput) {

    keyboardInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                console.log(
                    "Enter pressed"
                );

            }

        }
    );

}


// ======================================================
// 8. ESCAPE KEY
// ======================================================

if (keyboardInput) {

    keyboardInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                console.log(
                    "Escape pressed"
                );

            }

        }
    );

}


// ======================================================
// 9. KEYBOARD SHORTCUT
// ======================================================

document.addEventListener(
    "keydown",
    function (event) {

        // Ctrl + S
        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "s"
        ) {

            // Browser-er default save dialog bondho
            event.preventDefault();

            console.log(
                "Ctrl + S pressed"
            );

        }

    }
);


// ======================================================
// 10. MOUSE EVENT
// ======================================================

const mouseBox =
    document.getElementById("mouseBox");

if (mouseBox) {


    // Mouse click
    mouseBox.addEventListener(
        "click",
        function () {

            console.log(
                "Mouse clicked"
            );

        }
    );


    // Double click
    mouseBox.addEventListener(
        "dblclick",
        function () {

            console.log(
                "Double clicked"
            );

        }
    );


    // Mouse box-er vitore dhukle
    mouseBox.addEventListener(
        "mouseenter",
        function () {

            console.log(
                "Mouse entered"
            );

        }
    );


    // Mouse box theke ber hole
    mouseBox.addEventListener(
        "mouseleave",
        function () {

            console.log(
                "Mouse left"
            );

        }
    );


    // Mouse move korle
    mouseBox.addEventListener(
        "mousemove",
        function (event) {

            console.log(
                "X:",
                event.clientX
            );

            console.log(
                "Y:",
                event.clientY
            );

        }
    );


    // Mouse button press
    mouseBox.addEventListener(
        "mousedown",
        function () {

            console.log(
                "Mouse down"
            );

        }
    );


    // Mouse button release
    mouseBox.addEventListener(
        "mouseup",
        function () {

            console.log(
                "Mouse up"
            );

        }
    );

}


// ======================================================
// 11. EVENT OBJECT
// ======================================================

const eventButton =
    document.getElementById("eventButton");

if (eventButton) {

    eventButton.addEventListener(
        "click",
        function (event) {

            // Complete event object
            console.log(event);


            // Je element-e event hoyeche
            console.log(
                "Target:",
                event.target
            );


            // Je element-e listener add kora hoyeche
            console.log(
                "Current Target:",
                event.currentTarget
            );


            // Event-er naam
            console.log(
                "Event Type:",
                event.type
            );

        }
    );

}


// ======================================================
// 12. preventDefault()
// ======================================================

const googleLink =
    document.getElementById("googleLink");

if (googleLink) {

    googleLink.addEventListener(
        "click",
        function (event) {

            // Link-er normal navigation bondho
            event.preventDefault();

            console.log(
                "Default link action prevented"
            );

        }
    );

}


// ======================================================
// 13. EVENT BUBBLING
// ======================================================

const parent =
    document.getElementById("parent");

const child =
    document.getElementById("child");


if (parent && child) {

    child.addEventListener(
        "click",
        function () {

            console.log(
                "Child clicked"
            );

        }
    );


    parent.addEventListener(
        "click",
        function () {

            console.log(
                "Parent clicked"
            );

        }
    );

}


// Child click korle normally:
//
// Child
// ↓
// Parent
// ↓
// Body
// ↓
// Document
//
// Etai Event Bubbling.


// ======================================================
// 14. stopPropagation()
// ======================================================

const stopParent =
    document.getElementById("stopParent");

const stopChild =
    document.getElementById("stopChild");


if (stopParent && stopChild) {

    stopParent.addEventListener(
        "click",
        function () {

            console.log(
                "Parent clicked"
            );

        }
    );


    stopChild.addEventListener(
        "click",
        function (event) {

            // Event parent-er dike jete dibe na
            event.stopPropagation();

            console.log(
                "Child clicked only"
            );

        }
    );

}


// ======================================================
// 15. EVENT DELEGATION
// ======================================================

const userList =
    document.getElementById("userList");


if (userList) {

    // Prottek li-te alada event na diye
    // parent ul-e ekta event listener
    userList.addEventListener(
        "click",
        function (event) {

            // Actual clicked element
            const target = event.target;


            // Click kora element LI kina check
            if (
                target.tagName === "LI"
            ) {

                console.log(
                    "Clicked:",
                    target.textContent
                );

            }

        }
    );

}


// ======================================================
// 16. EVENT DELEGATION WITH BUTTON
// ======================================================

const productList =
    document.getElementById("productList");


if (productList) {

    productList.addEventListener(
        "click",
        function (event) {

            // Closest button ber korchi
            const button =
                event.target.closest("button");


            // Button na hole function stop
            if (!button) {
                return;
            }


            // data-id ber korchi
            const productId =
                button.dataset.id;


            console.log(
                "Product ID:",
                productId
            );

        }
    );

}


// ======================================================
// 17. DYNAMIC ELEMENT + EVENT DELEGATION
// ======================================================

const dynamicList =
    document.getElementById("dynamicList");

const addButton =
    document.getElementById("addButton");


if (dynamicList && addButton) {

    addButton.addEventListener(
        "click",
        function () {

            // Notun li create
            const li =
                document.createElement("li");


            li.textContent =
                "New Item";


            // Dynamic item add
            dynamicList.append(li);

        }
    );


    // Parent-er event listener
    // Dynamic item-er upor-o kaj korbe
    dynamicList.addEventListener(
        "click",
        function (event) {

            if (
                event.target.tagName === "LI"
            ) {

                console.log(
                    "Clicked:",
                    event.target.textContent
                );

            }

        }
    );

}


// ======================================================
// 18. INPUT EVENT PRACTICAL
// ======================================================

const searchInput =
    document.getElementById("searchInput");

const searchResult =
    document.getElementById("searchResult");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function (event) {

            const value =
                event.target.value;


            if (searchResult) {

                searchResult.textContent =
                    `You typed: ${value}`;

            }

        }
    );

}


// ======================================================
// 19. REGISTER FORM
// ======================================================

const registerForm =
    document.getElementById("registerForm");

const registerName =
    document.getElementById("registerName");

const registerEmail =
    document.getElementById("registerEmail");


if (
    registerForm &&
    registerName &&
    registerEmail
) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                registerName.value.trim();


            const email =
                registerEmail.value.trim();


            console.log(
                "Name:",
                name
            );


            console.log(
                "Email:",
                email
            );


            // Form-er input clear
            registerForm.reset();

        }
    );

}


// ======================================================
// 20. MOUSE HOVER
// ======================================================

const hoverBox =
    document.getElementById("hoverBox");


if (hoverBox) {

    hoverBox.addEventListener(
        "mouseenter",
        function () {

            hoverBox.textContent =
                "Mouse Entered";

        }
    );


    hoverBox.addEventListener(
        "mouseleave",
        function () {

            hoverBox.textContent =
                "Mouse Left";

        }
    );

}


// ======================================================
// 21. MULTIPLE EVENTS
// ======================================================

const multiButton =
    document.getElementById("multiButton");


if (multiButton) {

    multiButton.addEventListener(
        "click",
        function () {

            console.log(
                "Clicked"
            );

        }
    );


    multiButton.addEventListener(
        "mouseenter",
        function () {

            console.log(
                "Mouse Enter"
            );

        }
    );


    multiButton.addEventListener(
        "mouseleave",
        function () {

            console.log(
                "Mouse Leave"
            );

        }
    );

}


// ======================================================
// 22. removeEventListener()
// ======================================================

function sayHello() {

    console.log(
        "Hello Developer"
    );

}


if (multiButton) {

    // Event add
    multiButton.addEventListener(
        "click",
        sayHello
    );


    // Event remove
    multiButton.removeEventListener(
        "click",
        sayHello
    );

}


// Important:
// removeEventListener kaj korar jonno
// same function reference use korte hoy.


// ======================================================
// 23. ONCE OPTION
// ======================================================

if (multiButton) {

    multiButton.addEventListener(
        "click",
        function () {

            console.log(
                "Ei event shudhu ekbar run korbe"
            );

        },
        {
            once: true
        }
    );

}


// ======================================================
// 24. EVENT BUBBLING PRACTICAL
// ======================================================

const outer =
    document.getElementById("outer");

const middle =
    document.getElementById("middle");

const inner =
    document.getElementById("inner");


if (outer && middle && inner) {

    outer.addEventListener(
        "click",
        function () {

            console.log(
                "Outer"
            );

        }
    );


    middle.addEventListener(
        "click",
        function () {

            console.log(
                "Middle"
            );

        }
    );


    inner.addEventListener(
        "click",
        function () {

            console.log(
                "Inner"
            );

        }
    );

}


// Inner click korle output:
//
// Inner
// Middle
// Outer


// ======================================================
// 25. EVENT DELEGATION + DELETE
// ======================================================

const todoList =
    document.getElementById("todoList");


if (todoList) {

    todoList.addEventListener(
        "click",
        function (event) {

            // Delete button click kina check
            if (
                event.target.classList.contains(
                    "delete"
                )
            ) {

                // Closest todo ber korchi
                const todo =
                    event.target.closest(".todo");


                if (todo) {

                    todo.remove();

                }

            }

        }
    );

}


// ======================================================
// 26. EVENT DELEGATION + TODO COMPLETE
// ======================================================

if (todoList) {

    todoList.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "todo-text"
                )
            ) {

                // Completed class add/remove
                event.target.classList.toggle(
                    "completed"
                );

            }

        }
    );

}


// ======================================================
// 27. FORM VALIDATION
// ======================================================

const form2 =
    document.getElementById("form2");

const formInput =
    document.getElementById("formInput");


if (form2 && formInput) {

    form2.addEventListener(
        "submit",
        function (event) {

            const value =
                formInput.value.trim();


            // Input empty hole submit bondho
            if (value === "") {

                event.preventDefault();

                console.log(
                    "Input is required"
                );

                return;

            }


            console.log(
                "Form submitted successfully"
            );

        }
    );

}


// ======================================================
// 28. EVENT OBJECT IMPORTANT PROPERTIES
// ======================================================

document.addEventListener(
    "click",
    function (event) {

        console.log(
            "Event Type:",
            event.type
        );


        console.log(
            "Target:",
            event.target
        );


        console.log(
            "Current Target:",
            event.currentTarget
        );


        console.log(
            "Mouse X:",
            event.clientX
        );


        console.log(
            "Mouse Y:",
            event.clientY
        );

    }
);


// ======================================================
// 29. COMMON EVENTS
// ======================================================


// Mouse Events
//
// click
// dblclick
// mousedown
// mouseup
// mouseenter
// mouseleave
// mousemove
// mouseover
// mouseout


// Keyboard Events
//
// keydown
// keyup


// Form Events
//
// input
// change
// submit
// focus
// blur


// Browser Events
//
// load
// scroll
// resize


// ======================================================
// 30. EVENT FLOW
// ======================================================


// Event Flow:
//
// Capture Phase
//      ↓
// Target Phase
//      ↓
// Bubbling Phase
//
//
// Example:
//
// Document
//    ↓
// Body
//    ↓
// Parent
//    ↓
// Child
//
//
// Child-e click korle bubbling:
//
// Child
//   ↓
// Parent
//   ↓
// Body
//   ↓
// Document


// ======================================================
// 31. FINAL EVENT DELEGATION EXAMPLE
// ======================================================

const menu =
    document.getElementById("menu");


if (menu) {

    menu.addEventListener(
        "click",
        function (event) {

            // button ba tar vitore click hole
            const button =
                event.target.closest("button");


            if (!button) {
                return;
            }


            console.log(
                "Clicked button:",
                button.textContent
            );

        }
    );

}


// ======================================================
// 32. FINAL EVENT PATTERN
// ======================================================


// Element select
//
// const button =
//     document.getElementById("button");


// Event listener
//
// button.addEventListener(
//     "click",
//     function (event) {
//
//         // Code
//
//     }
// );


// Input
//
// input.addEventListener(
//     "input",
//     function (event) {
//
//         console.log(
//             event.target.value
//         );
//
//     }
// );


// Submit
//
// form.addEventListener(
//     "submit",
//     function (event) {
//
//         event.preventDefault();
//
//     }
// );


// Keyboard
//
// input.addEventListener(
//     "keydown",
//     function (event) {
//
//         console.log(
//             event.key
//         );
//
//     }
// );


// Event Delegation
//
// parent.addEventListener(
//     "click",
//     function (event) {
//
//         if (
//             event.target.matches(".button")
//         ) {
//
//             // Code
//
//         }
//
//     }
// );


// ======================================================
// END OF PART 21
// ======================================================