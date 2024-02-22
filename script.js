window.onload = function() {
    let count = 0;
    const loader = document.getElementById('loader');
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    const interval = setInterval(function() {
      loader.innerText = count;
      // Calculate the position for the loader
      const xPosition = (maxWidth / 100) * (count / 1.2);
      const yPosition = (maxHeight / 100) * (count / 1.2);
      loader.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
  
      count++;
      if (count > 100) {
        clearInterval(interval);
        document.getElementById('loader-wrapper').style.display = 'none';
        document.getElementById('content').style.display = 'flex'; // Changed to flex to center the content
      }
    }, 20); // Slower speed
  };
  