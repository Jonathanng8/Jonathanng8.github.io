document.addEventListener("DOMContentLoaded", function() {
    let counter = 0;
    const interval = setInterval(function() {
        counter++;
        document.getElementById("counter").innerText = counter;
        if (counter === 100) {
            clearInterval(interval);
            document.getElementById("loadingScreen").style.display = 'none';
            const mainContent = document.getElementById("mainContent");
            mainContent.classList.remove("hidden");
            setTimeout(() => mainContent.style.opacity = 1, 10); // Add a slight delay to ensure the transition plays
        }
    }, 30); // Adjust time as needed

    const infoLink = document.getElementById('infoLink');
    const contactLink = document.getElementById('contactLink');

    infoLink.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToSection('info');
    });

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToSection('contact');
    });

    setupJumbleOnHover(infoLink, 'INFO');
    setupJumbleOnHover(contactLink, 'CONTACT');
});

function navigateToSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
        section.style.opacity = 0;
    });

    // Show the requested section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        setTimeout(() => section.style.opacity = 1, 100); // Smooth transition for visibility
    }
}

function setupJumbleOnHover(element, originalText) {
    // Previously provided jumble effect code
}

// Rest of the previously provided script.js code for jumbling text...
