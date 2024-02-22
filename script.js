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

const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
document.getElementById('infoLink').addEventListener('click', function() {
    toggleContent('infoContent');
});

document.getElementById('contactLink').addEventListener('click', function() {
    toggleContent('contactContent');
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

function toggleContent(contentId) {
    const infoContent = document.getElementById('infoContent');
    const contactContent = document.getElementById('contactContent');
    const targetContent = document.getElementById(contentId);

    // Hide both sections first
    infoContent.classList.add('hidden');
    contactContent.classList.add('hidden');
    infoContent.style.opacity = 0;
    contactContent.style.opacity = 0;

    // Show the target content
    targetContent.classList.remove('hidden');
    setTimeout(() => targetContent.style.opacity = 1, 10); // Delay for the fade-in effect
}
// Updated JavaScript content with BACK functionality

document.getElementById('infoLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor action
    toggleContent('infoContent', true);
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor action
    toggleContent('contactContent', true);
});

document.getElementById('backLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    toggleContent(null, false); // Hide all info/contact content and show main content
});

function toggleContent(contentId, hideMain) {
    const mainContentItems = document.querySelectorAll('#mainContent > h1, #mainContent > p, #menu');
    const backButton = document.getElementById('backButton');
    const infoContent = document.getElementById('infoContent');
    const contactContent = document.getElementById('contactContent');
    const allContents = [infoContent, contactContent];

    // Toggle main content visibility
    if (hideMain) {
        mainContentItems.forEach(item => item.classList.add('hidden'));
        backButton.classList.remove('hidden');
        allContents.forEach(content => content.classList.add('hidden')); // Ensure all specific contents are hidden before showing the desired one
    } else {
        mainContentItems.forEach(item => item.classList.remove('hidden'));
        backButton.classList.add('hidden');
    }

    // Show the specific content if any
    if (contentId) {
        const targetContent = document.getElementById(contentId);
        targetContent.classList.remove('hidden');
        setTimeout(() => targetContent.style.opacity = 1, 10); // Delay for fade-in effect
    }

    // Reset opacity for a smooth transition back
    allContents.forEach(content => content.style.opacity = 0);
}

// Mouseover and mouseout events for CONTACT content
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
