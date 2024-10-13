// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload on form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(`Thank you, ${name}! We'll contact you at ${email}.`);
    });
});
