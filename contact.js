//Form require
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    var name = document.getElementById("name").value;

    // Form message
    var message = "Thank you for reaching out, " + name + ". We will contact you shortly.";
    document.getElementById("message").innerText = message;
});