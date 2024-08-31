// Select the contact form and input elements
const contactForm = document.getElementById("contactForm");

// Handle form submission
contactForm.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation
    if (name && email && message) {
        // For demonstration purposes, we'll just log the data
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

        // Display a thank you message
        alert("Thank you for contacting us! We will get back to you soon.");
        
        // Clear the form fields
        contactForm.reset();
    } else {
        alert("Please fill out all fields.");
    }
});
