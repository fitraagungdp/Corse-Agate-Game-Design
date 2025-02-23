document.addEventListener("DOMContentLoaded", function () {
    console.log("Game Design Page Loaded");

    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Accordion Functionality
    document.querySelectorAll(".accordion").forEach(button => {
        button.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("active");
        });
    });
});
