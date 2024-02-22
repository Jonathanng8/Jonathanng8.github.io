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
