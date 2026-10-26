const button = document.getElementById("btn");
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const formFeedback = document.getElementById("formFeedback");

button.addEventListener("click", function () {
    output.textContent = "Button was clicked!";
});

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() === "") {
        greeting.textContent = "";
    } else {
        greeting.textContent = "Hello, " + nameInput.value;
    }
});

button.addEventListener("click", function () {
    output.textContent = "Button was clicked!";
    button.textContent = "Clicked!";
});

submitBtn.addEventListener("click", function () {
    if (email.value.trim() === "" || message.value.trim() === "") {
        formFeedback.textContent = "Please fill in both fields.";
    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
    ) {
        formFeedback.textContent = "Please enter a valid email address.";
    } else {
        formFeedback.textContent =
            "Thank you! Your message has been sent.";
    }
});