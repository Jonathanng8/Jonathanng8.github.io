document.addEventListener('DOMContentLoaded', function () {
    // Existing fade-in animation code
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.animation = 'fadeIn ease-in-out 1.5s forwards';
    });

    // Enhanced mouseover effect for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = '#ff7e5f'; // Or any hover color
            this.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
            this.style.transition = 'transform 0.3s ease, color 0.3s ease'; // Smooth transition for color and scaling
        });

        link.addEventListener('mouseout', function () {
            this.style.color = '#fff'; // Back to original color
            this.style.transform = 'scale(1)'; // Return to original scale
        });
    });

    // Smooth scrolling for anchor links (already included)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of adding interactive animation/effects
    window.addEventListener('scroll', () => {
        // Code to trigger animations on scroll could go here
        // For more advanced effects, consider using a library or observing elements' positions
    });

    // Your goBack function remains unchanged
});

function goBack() {
    window.history.back();
}
