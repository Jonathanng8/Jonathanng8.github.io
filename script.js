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

function jumbleText(elementId, originalText) {
    const element = document.getElementById(elementId);
    let counter = 0;
    const maxIterations = 20;
    const interval = setInterval(() => {
        let jumbledText = '';
        for (let i = 0; i < originalText.length; i++) {
            jumbledText += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }
        element.innerText = jumbledText;

        counter++;
        if (counter >= maxIterations) {
            clearInterval(interval);
            element.innerText = originalText;
        }
    }, 50);
}

const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function toggleContent(contentId, hideMain) {
    const mainContent = document.getElementById('mainContent');
    const infoContent = document.getElementById('infoContent');
    const contactContent = document.getElementById('contactContent');
    const backButton = document.getElementById('backButton');

    if (hideMain) {
        // Hiding main content and showing specific content
        mainContent.style.display = 'none';
        backButton.style.display = 'block';
        infoContent.style.display = 'none';
        contactContent.style.display = 'none';
        if (contentId) {
            document.getElementById(contentId).style.display = 'block';
            setTimeout(() => document.getElementById(contentId).style.opacity = 1, 10);
        }
    } else {
        // Showing main content and hiding back button
        mainContent.style.display = 'block';
        setTimeout(() => mainContent.style.opacity = 1, 10);
        backButton.style.display = 'none';
        infoContent.style.display = 'none';
        contactContent.style.display = 'none';
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

document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault();
    toggleContent(null, false); // This will show the main content without re-triggering the animation
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
