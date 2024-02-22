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
            setTimeout(() => mainContent.style.opacity = 1, 10); // Fade in main content
        }
    }, 30);

    // Setup jumble on hover for "INFO" and "CONTACT"
    const infoLink = document.getElementById('infoLink');
    const contactLink = document.getElementById('contactLink');

    setupJumbleOnHover(infoLink, 'INFO');
    setupJumbleOnHover(contactLink, 'CONTACT');

    // Event listeners for showing sections
    infoLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleSection('infoSection');
    });

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleSection('contactSection');
    });

    document.getElementById('backFromInfo').addEventListener('click', function() {
        toggleSection('infoSection');
    });

    document.getElementById('backFromContact').addEventListener('click', function() {
        toggleSection('contactSection');
    });
});

function setupJumbleOnHover(element, originalText) {
    let interval;
    element.addEventListener('mouseover', () => {
        interval = setInterval(() => {
            element.innerText = generateJumbledText(originalText.length);
        }, 50);
    });

    element.addEventListener('mouseout', () => {
        clearInterval(interval);
        element.innerText = originalText;
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

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        setTimeout(() => section.style.opacity = 1, 10); // Fade in
    } else {
        section.style.opacity = 0;
        setTimeout(() => section.classList.add('hidden'), 2000); // Fade out
    }
}
