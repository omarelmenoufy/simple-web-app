// Select the form, input, and output elements
const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const output = document.getElementById("output");

// Add an event listener to the form to handle submission
form.addEventListener("submit", function(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get the value of the input field
    const username = usernameInput.value;

    // Display a personalized greeting
    output.innerHTML = "Hello, " + username + "!";

    // Clear the input field
    usernameInput.value = "";
});
