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

            // Remove the direct call to jumbleText function here
        }
    }, 30); // Adjust time as needed

    // Setup jumble on hover for "INFO" and "CONTACT"
    const infoLink = document.getElementById('infoLink');
    const contactLink = document.getElementById('contactLink');

    setupJumbleOnHover(infoLink, 'INFO');
    setupJumbleOnHover(contactLink, 'CONTACT');
});

function setupJumbleOnHover(element, originalText) {
    let interval;
    element.addEventListener('mouseover', () => {
        interval = setInterval(() => {
            element.innerText = generateJumbledText(originalText.length);
        }, 50); // Adjust the speed of jumbling as needed
    });

    element.addEventListener('mouseout', () => {
        clearInterval(interval);
        element.innerText = originalText; // Reset to the original text immediately
    });
}

function generateJumbledText(length) {
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let jumbledText = '';
    for (let i = 0; i < length; i++) {
        jumbledText += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    return jumbledText;
}
// Add to your existing JavaScript file
document.getElementById('infoLink').addEventListener('click', function() {
    toggleSectionDisplay('infoSection');
});

document.getElementById('contactLink').addEventListener('click', function() {
    toggleSectionDisplay('contactSection');
});

document.getElementById('backFromInfo').addEventListener('click', function() {
    toggleSectionDisplay('infoSection');
});

document.getElementById('backFromContact').addEventListener('click', function() {
    toggleSectionDisplay('contactSection');
});

function toggleSectionDisplay(sectionId) {
    const section = document.getElementById(sectionId);
    const isHidden = section.classList.contains('hidden');
    if (isHidden) {
        section.classList.remove('hidden');
        setTimeout(() => section.style.opacity = 1, 10); // Fade in
    } else {
        section.style.opacity = 0;
        setTimeout(() => section.classList.add('hidden'), 2000); // Fade out, then hide
    }
}
