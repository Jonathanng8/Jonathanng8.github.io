// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add fade-in animation to elements with the 'fade-in' class
    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.animation = 'fadeIn ease-in-out 1.5s forwards';
    });

    // Add mouseover effect to navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = '#ff7e5f';
        });

        link.addEventListener('mouseout', function () {
            this.style.color = '#fff';
        });
    });
});

// Function to go back in the history
function goBack() {
    window.history.back();
}
// Add this to your script.js file
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

