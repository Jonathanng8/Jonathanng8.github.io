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

function toggleContent(contentId, hideMain) {
    const mainContentItems = document.querySelectorAll('#mainContent > h1, #mainContent > p, #menu');
    const backButton = document.getElementById('backButton');
    const allContents = document.querySelectorAll('.info-contact-content'); 

    if (hideMain) {
        mainContentItems.forEach(item => item.style.display = 'none');
        backButton.style.display = 'block';
        allContents.forEach(content => {
            if (content.id === contentId) {
                content.classList.remove('hidden');
                setTimeout(() => content.style.opacity = 1, 10); // Make visible with opacity
            } else {
                content.style.opacity = 0; // Immediately start hiding others
                setTimeout(() => content.classList.add('hidden'), 200); // Then hide after opacity transition
            }
        });
    } else {
        mainContentItems.forEach(item => item.style.display = ''); // Show main content
        backButton.style.display = 'none'; // Hide back button
        allContents.forEach(content => {
            content.classList.add('hidden'); // Immediately hide content
            content.style.opacity = 0; // Ensure it's not visible
        });
    }
}

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
    toggleContent('', false); // Hide specific content and show main content
});

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
// Original JavaScript code remains the same...

// Add hover effects for "INFO" and "CONTACT"
document.getElementById('infoLink').addEventListener('mouseenter', function() {
    jumbleTextHover('infoLink', 'INFO');
});

document.getElementById('infoLink').addEventListener('mouseleave', function() {
    this.innerText = 'INFO'; // Reset text to original on mouse leave
});

document.getElementById('contactLink').addEventListener('mouseenter', function() {
    jumbleTextHover('contactLink', 'CONTACT');
});

document.getElementById('contactLink').addEventListener('mouseleave', function() {
    this.innerText = 'CONTACT'; // Reset text to original on mouse leave
});

// Adjusted jumbleText function for hover effect
function jumbleTextHover(elementId, originalText) {
    const element = document.getElementById(elementId);
    let jumbledText = '';
    for (let i = 0; i < originalText.length; i++) {
        jumbledText += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    element.innerText = jumbledText;
}
