window.onload = function() {
    let count = 0;
    const loader = document.getElementById('loader');
    const interval = setInterval(function() {
      loader.innerText = count;
      count++;
      if (count > 100) {
        clearInterval(interval);
        document.getElementById('loader-wrapper').style.display = 'none';
        document.getElementById('content').style.display = 'block';
      }
    }, 10); // Adjust the speed as needed
  };
  