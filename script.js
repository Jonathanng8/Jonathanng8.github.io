document.addEventListener('DOMContentLoaded', function() {
    let counter = document.getElementById('counter');
    let mainContent = document.getElementById('mainContent');
    let count = 0;
    let interval = setInterval(function() {
        counter.innerText = count;
        count += count < 10 ? 10 : count < 30 ? 20 : count < 70 ? 40 : count < 100 ? 30 : 0;
        if (count > 100) {
            clearInterval(interval);
            counter.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }
    }, 200); // Adjust time as needed for a smoother or quicker transition
});
