document.addEventListener('DOMContentLoaded', function() {
    let counter = document.getElementById('counter');
    let values = [0, 10, 30, 70, 100];
    let index = 0;

    function updateCounter() {
        if (index < values.length) {
            counter.textContent = values[index];
            counter.style.opacity = 1;
            let position = index * (100 / (values.length - 1));
            counter.style.left = `calc(${position}% - ${position}px)`;

            setTimeout(() => {
                counter.style.opacity = 0;
                index++;
                setTimeout(updateCounter, 500);
            }, 1000);
        } else {
            document.getElementById('mainContent').classList.remove('hidden');
        }
    }

    updateCounter();

    function jumbleText(elementId) {
        const element = document.getElementById(elementId);
        const originalText = element.textContent;
        element.addEventListener('mouseover', () => {
            element.textContent = originalText.split('').sort(() => 0.5 - Math.random()).join('');
        });
        element.addEventListener('mouseout', () => {
            element.textContent = originalText;
        });
    }

    jumbleText('info');
    jumbleText('contact');
});
