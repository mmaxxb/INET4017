
const greetingButton = document.getElementById("greeting-button");

if (greetingButton) {
    greetingButton.addEventListener("click", function () {
        const visitorName = document.getElementById("visitor-name").value.trim();
        const greetingMessage = document.getElementById("greeting-message");

        if (visitorName === "") {
            greetingMessage.textContent = "Please enter your name.";
        } else {
            greetingMessage.textContent = "Hello, " + visitorName + "!";
        }
    });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
        } else if (!email.includes("@")) {
            formMessage.textContent = "Please enter a valid email address.";
        } else {
            formMessage.textContent = "Thank you, " + name + "! Your message was received.";
            contactForm.reset();
        }
    });
}
