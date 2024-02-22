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

            // Start jumbling effect
            jumbleText('infoLink', 'INFO');
            jumbleText('contactLink', 'CONTACT');
        }
    }, 30); // Adjust time as needed
});

const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function jumbleText(elementId, originalText) {
    const element = document.getElementById(elementId);
    let counter = 0;
    const maxIterations = 20; // Run the jumble effect for a set number of iterations
    const interval = setInterval(() => {
        // Generate jumbled text
        let jumbledText = '';
        for (let i = 0; i < originalText.length; i++) {
            jumbledText += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }
        element.innerText = jumbledText;

        counter++;
        if (counter >= maxIterations) {
            clearInterval(interval);
            element.innerText = originalText; // Reset to original text
        }
    }, 50); // Speed of jumbling
}

// Updated toggleContent function with improved BACK button handling
function toggleContent(contentId, hideMain) {
    const mainContentItems = document.querySelectorAll('#mainContent > h1, #mainContent > p, #menu');
    const backButton = document.getElementById('backButton');
    const allContents = document.querySelectorAll('.info-contact-content'); // Assuming you have this class for infoContent and contactContent

    // Toggle main content visibility and manage specific content
    if (hideMain) {
        // Hide main content
        mainContentItems.forEach(item => {
            item.style.display = 'none';
        });
        backButton.style.display = 'block'; // Show back button
    } else {
        // Show main content
        mainContentItems.forEach(item => {
            item.style.display = ''; // Revert display to default
        });
        backButton.style.display = 'none'; // Hide back button
    }

    // Handle specific content display
    allContents.forEach(content => {
        if (content.id === contentId) {
            content.classList.remove('hidden');
            setTimeout(() => content.style.opacity = 1, 10); // Apply opacity transition
        } else {
            content.style.opacity = 0; // Hide other contents
            setTimeout(() => content.classList.add('hidden'), 200); // Wait for opacity transition, then hide
        }
    });
}

// Event listeners for INFO and CONTACT links, and BACK button
document.getElementById('infoLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleContent('infoContent', true);
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleContent('contactContent', true);
});

document.getElementById('backLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleContent(null, false); // No specific content to show, just show main content
});

// Mouseover and mouseout event listeners remain unchanged
document.getElementById('phone').addEventListener('mouseover', function() {
    this.innerText = '(813)598-2735';
});

document.getElementById('phone').addEventListener('mouseout', function() {
    this.innerText = 'PHONE';
});

document.getElementById('email').addEventListener('mouseover', function() {
    this.innerText = 'JONATHANGON331@GMAIL.COM';
});

document.getElementById('email').addEventListener('mouseout', function() {
    this.innerText = 'EMAIL';
});
