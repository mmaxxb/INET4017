let count = 0;

document.getElementById("title").textContent = "JavaScript Counter";

function changeText() {
    count = count + 1;
    document.getElementById("message").textContent =
    "Button clicked " + count + " times";
}

function resetCounter() {
    count = 0;
    document.getElementById("message").textContent =
    "Button clicked " + count + " times";
}
