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
});
