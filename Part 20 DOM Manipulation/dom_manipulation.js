// ======================================================
// PART 20: DOM MANIPULATION
// FULL JAVASCRIPT CODE
// ======================================================


// ======================================================
// 1. ELEMENT SELECT KORA
// ======================================================

// ID diye element select
const container = document.getElementById("container");


// CSS selector diye element select
const title = document.querySelector("#title");


// Class diye first element select
const box = document.querySelector(".box");


// Multiple elements select
const items = document.querySelectorAll(".item");


// ======================================================
// 2. innerHTML
// ======================================================

// Element-er vitore HTML read kora
console.log(container.innerHTML);


// Element-er vitore HTML change kora
container.innerHTML = `
    <h1>JavaScript DOM</h1>
    <p>This is a new paragraph</p>
`;


// HTML-er moddhe dynamic value use kora
const userName = "Rahim";

container.innerHTML = `
    <h2>Hello ${userName}</h2>
    <p>Welcome to my website</p>
`;


// Multiple HTML element add kora
container.innerHTML = `
    <div class="card">
        <h2>Rahim</h2>
        <p>Web Developer</p>
    </div>

    <div class="card">
        <h2>Karim</h2>
        <p>Frontend Developer</p>
    </div>
`;


// ======================================================
// 3. innerText
// ======================================================

// Visible text read kora
console.log(title.innerText);


// Element-er visible text change kora
title.innerText = "Hello JavaScript";


// HTML dile eta HTML element create korbe na
title.innerText = "<b>Hello</b>";


// ======================================================
// 4. textContent
// ======================================================

// Element-er complete text read kora
console.log(container.textContent);


// Element-er text change kora
container.textContent = "Hello Developer";


// HTML dile HTML render korbe na
container.textContent = "<h1>Hello</h1>";


// innerText vs textContent
console.log(container.innerText);
console.log(container.textContent);


// ======================================================
// 5. CREATE ELEMENT
// ======================================================

// Notun div create
const newDiv = document.createElement("div");


// Div-er text set
newDiv.textContent = "This is a new div";


// Body-te add
document.body.append(newDiv);


// Notun heading create
const newHeading = document.createElement("h1");

newHeading.textContent = "Full Stack Developer";

document.body.append(newHeading);


// Notun paragraph create
const newParagraph = document.createElement("p");

newParagraph.textContent = "Learning JavaScript DOM";

document.body.append(newParagraph);


// ======================================================
// 6. APPEND
// ======================================================

// Container-er last-e text add
container.append("New Text");


// Container-er last-e element add
container.append(newParagraph);


// Multiple item ek sathe add
const heading = document.createElement("h2");

heading.textContent = "JavaScript";

const paragraph = document.createElement("p");

paragraph.textContent = "DOM Manipulation";

container.append(
    heading,
    paragraph
);


// ======================================================
// 7. PREPEND
// ======================================================

// Container-er shurute text add
container.prepend("Start Text");


// Container-er shurute element add
const firstHeading = document.createElement("h2");

firstHeading.textContent = "First Heading";

container.prepend(firstHeading);


// Multiple item first-e add
const firstParagraph = document.createElement("p");

firstParagraph.textContent = "First Paragraph";

container.prepend(
    firstHeading,
    firstParagraph
);


// ======================================================
// 8. APPENDCHILD
// ======================================================

// Notun element create
const child = document.createElement("p");

child.textContent = "I am a child element";


// Parent-er last child hisebe add
container.appendChild(child);


// ======================================================
// 9. REMOVE
// ======================================================

// Element remove
const removeElement = document.querySelector(".remove-item");


// Jodi element exist kore tahole remove
if (removeElement) {
    removeElement.remove();
}


// ======================================================
// 10. REPLACECHILD
// ======================================================

// Old element select
const oldElement = document.querySelector("#old");


if (oldElement) {

    // Notun element create
    const newElement = document.createElement("h2");

    newElement.textContent = "New Element";


    // Old element-er jaygay new element
    container.replaceChild(
        newElement,
        oldElement
    );
}


// ======================================================
// 11. setAttribute()
// ======================================================

// Notun link create
const link = document.createElement("a");


// href attribute set
link.setAttribute(
    "href",
    "https://example.com"
);


// target attribute set
link.setAttribute(
    "target",
    "_blank"
);


// Link-er text
link.textContent = "Visit Website";


// Link add
document.body.append(link);


// ID attribute set
link.setAttribute(
    "id",
    "website-link"
);


// Class attribute set
link.setAttribute(
    "class",
    "link"
);


// ======================================================
// 12. getAttribute()
// ======================================================

// href-er value read
console.log(
    link.getAttribute("href")
);


// target-er value read
console.log(
    link.getAttribute("target")
);


// class-er value read
console.log(
    link.getAttribute("class")
);


// ======================================================
// 13. removeAttribute()
// ======================================================

// target attribute remove
link.removeAttribute("target");


// class attribute remove
link.removeAttribute("class");


// ======================================================
// 14. hasAttribute()
// ======================================================

// Attribute ache kina check
if (link.hasAttribute("href")) {

    console.log("Href attribute ache");

} else {

    console.log("Href attribute nei");

}


// ======================================================
// 15. classList
// ======================================================

const card = document.createElement("div");

card.textContent = "My Card";


// Card class add
card.classList.add("card");


// Multiple class add
card.classList.add(
    "active",
    "border",
    "large"
);


// Body-te card add
document.body.append(card);


// ======================================================
// 16. classList.remove()
// ======================================================

// active class remove
card.classList.remove("active");


// Multiple class remove
card.classList.remove(
    "border",
    "large"
);


// ======================================================
// 17. classList.contains()
// ======================================================

// Kono class ache kina check
if (card.classList.contains("card")) {

    console.log("Card class ache");

} else {

    console.log("Card class nei");

}


// ======================================================
// 18. classList.toggle()
// ======================================================

// Class na thakle add korbe
// Class thakle remove korbe
card.classList.toggle("active");


// Abar toggle korle active remove hobe
card.classList.toggle("active");


// ======================================================
// 19. className
// ======================================================

// Complete class name set
card.className = "card active large";


// Existing class overwrite hoye jabe
card.className = "new-card";


// Tai specific class-er jonno classList use kora better
card.classList.add("active");


// ======================================================
// 20. STYLE
// ======================================================

// Background color
card.style.backgroundColor = "black";


// Text color
card.style.color = "white";


// Width
card.style.width = "300px";


// Height
card.style.height = "150px";


// Padding
card.style.padding = "20px";


// Margin
card.style.margin = "20px";


// Border
card.style.border = "2px solid black";


// Font size
card.style.fontSize = "20px";


// ======================================================
// 21. DYNAMIC CARD CREATE
// ======================================================

// User data
const users = [
    {
        name: "Rahim",
        age: 20,
        profession: "Frontend Developer"
    },

    {
        name: "Karim",
        age: 22,
        profession: "Backend Developer"
    },

    {
        name: "Hasan",
        age: 21,
        profession: "Full Stack Developer"
    }
];


// Card container
const userContainer =
    document.getElementById("userContainer");


// Prottek user-er jonno card create
users.forEach(function (user) {


    // Main card create
    const userCard =
        document.createElement("div");


    // Card class add
    userCard.classList.add("user-card");


    // Name create
    const userNameElement =
        document.createElement("h2");


    // Name set
    userNameElement.textContent =
        user.name;


    // Age create
    const userAge =
        document.createElement("p");


    // Age set
    userAge.textContent =
        `Age: ${user.age}`;


    // Profession create
    const userProfession =
        document.createElement("p");


    // Profession set
    userProfession.textContent =
        `Profession: ${user.profession}`;


    // Card-er moddhe sob element add
    userCard.append(
        userNameElement,
        userAge,
        userProfession
    );


    // Main container-e card add
    userContainer.append(userCard);

});


// ======================================================
// 22. DYNAMIC LIST CREATE
// ======================================================

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
];


const skillList =
    document.getElementById("skillList");


skills.forEach(function (skill) {


    // li create
    const li =
        document.createElement("li");


    // Skill name set
    li.textContent = skill;


    // li-te class add
    li.classList.add("skill-item");


    // List-e add
    skillList.append(li);

});


// ======================================================
// 23. TODO APP STYLE DOM MANIPULATION
// ======================================================

const todoInput =
    document.getElementById("todoInput");


const addTodoButton =
    document.getElementById("addTodo");


const todoContainer =
    document.getElementById("todoContainer");


// Button click
addTodoButton.addEventListener(
    "click",
    function () {


        // Input value nicchi
        const todoText =
            todoInput.value;


        // Empty input check
        if (todoText.trim() === "") {

            return;

        }


        // Todo div create
        const todo =
            document.createElement("div");


        // Todo class
        todo.classList.add("todo");


        // Todo text
        todo.textContent =
            todoText;


        // Todo click korle completed class toggle
        todo.addEventListener(
            "click",
            function () {

                todo.classList.toggle(
                    "completed"
                );

            }
        );


        // Delete button create
        const deleteButton =
            document.createElement("button");


        // Button text
        deleteButton.textContent =
            "Delete";


        // Delete button-e class
        deleteButton.classList.add(
            "delete-button"
        );


        // Delete button click
        deleteButton.addEventListener(
            "click",
            function (event) {


                // Parent todo-te click event
                // jeno na jay
                event.stopPropagation();


                // Todo remove
                todo.remove();

            }
        );


        // Todo-r moddhe delete button
        todo.append(deleteButton);


        // Container-e todo add
        todoContainer.append(todo);


        // Input empty
        todoInput.value = "";

    }
);


// ======================================================
// 24. INPUT THEKE DATA NIYE DOM UPDATE
// ======================================================

const nameInput =
    document.getElementById("nameInput");


const showNameButton =
    document.getElementById("showName");


const result =
    document.getElementById("result");


showNameButton.addEventListener(
    "click",
    function () {


        // Input value
        const name =
            nameInput.value;


        // textContent diye safely text show
        result.textContent =
            `Hello ${name}`;

    }
);


// ======================================================
// 25. CLASS TOGGLE PRACTICAL EXAMPLE
// ======================================================

const menuButton =
    document.getElementById("menuButton");


const menu =
    document.getElementById("menu");


menuButton.addEventListener(
    "click",
    function () {


        // Menu open/close
        menu.classList.toggle("active");

    }
);


// ======================================================
// 26. ATTRIBUTE MANIPULATION PRACTICAL
// ======================================================

const image =
    document.createElement("img");


// src set
image.setAttribute(
    "src",
    "profile.jpg"
);


// alt set
image.setAttribute(
    "alt",
    "Profile Image"
);


// width set
image.setAttribute(
    "width",
    "200"
);


// Image add
document.body.append(image);


// src read
console.log(
    image.getAttribute("src")
);


// alt check
console.log(
    image.hasAttribute("alt")
);


// alt remove
image.removeAttribute("alt");


// ======================================================
// 27. INNERHTML VS TEXTCONTENT
// ======================================================

const demo =
    document.createElement("div");


// innerHTML HTML render korbe
demo.innerHTML =
    "<strong>Hello Developer</strong>";

document.body.append(demo);


// textContent HTML render korbe na
demo.textContent =
    "<strong>Hello Developer</strong>";


// ======================================================
// 28. DOM ELEMENT CREATE + CLASS + ATTRIBUTE
// ======================================================

const product =
    document.createElement("div");


product.classList.add(
    "product",
    "card"
);


product.setAttribute(
    "data-id",
    "101"
);


const productTitle =
    document.createElement("h2");


productTitle.textContent =
    "JavaScript Course";


const productPrice =
    document.createElement("p");


productPrice.textContent =
    "Price: 5000";


product.append(
    productTitle,
    productPrice
);


document.body.append(product);


// ======================================================
// 29. DATA ATTRIBUTE
// ======================================================

console.log(
    product.getAttribute("data-id")
);


product.setAttribute(
    "data-category",
    "programming"
);


console.log(
    product.getAttribute("data-category")
);


// ======================================================
// 30. FINAL PRACTICAL FLOW
// ======================================================

// 1. Element create
const finalCard =
    document.createElement("div");


// 2. Class add
finalCard.classList.add("card");


// 3. Attribute add
finalCard.setAttribute(
    "data-type",
    "developer"
);


// 4. Heading create
const finalTitle =
    document.createElement("h2");


// 5. Text set
finalTitle.textContent =
    "Full Stack Web Developer";


// 6. Paragraph create
const finalText =
    document.createElement("p");


// 7. Paragraph text
finalText.textContent =
    "HTML CSS JavaScript React Node.js MongoDB";


// 8. Elements card-er moddhe add
finalCard.append(
    finalTitle,
    finalText
);


// 9. Card body-te add
document.body.append(finalCard);


// 10. Class check
if (
    finalCard.classList.contains("card")
) {

    console.log(
        "This is a card"
    );

}


// 11. Class toggle
finalCard.classList.toggle(
    "active"
);


// 12. Attribute check
if (
    finalCard.hasAttribute("data-type")
) {

    console.log(
        finalCard.getAttribute("data-type")
    );

}


// ======================================================
// DOM MANIPULATION MAIN FORMULA
// ======================================================


// SELECT
// document.querySelector()
// document.getElementById()


// READ / CHANGE
// innerHTML
// innerText
// textContent


// CREATE
// document.createElement()


// ADD
// append()
// prepend()
// appendChild()


// DELETE
// remove()


// REPLACE
// replaceChild()


// ATTRIBUTE
// setAttribute()
// getAttribute()
// removeAttribute()
// hasAttribute()


// CLASS
// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()


// CSS
// element.style.property


// ======================================================
// END
// ======================================================