document.addEventListener('DOMContentLoaded', function() {
    const gifContainer = document.getElementById('gif-container');
    const showGifLink = document.getElementById('show-gif');
    const firstGif = document.getElementById('first-gif');
    const secondGif = document.getElementById('second-gif');
    const changeTextLink = document.getElementById('change-text-link');

    // Toggle the text of the link when clicked
    changeTextLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Toggle the text between 'links' and 'rechts'
        if (this.textContent === 'links') {
            this.textContent = 'rechts';
        } else {
            this.textContent = 'links';
        }
    });

    showGifLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Show the GIF container
        gifContainer.style.display = 'block';

        // Play the first GIF
        firstGif.style.display = 'block';
        secondGif.style.display = 'none';

        // Determine the duration of the first GIF (in milliseconds)
        const firstGifDuration = 6000; // Change this to the duration of your first GIF

        setTimeout(function() {
            // Hide the first GIF and show the second GIF
            firstGif.style.display = 'none';
            secondGif.style.display = 'block';

            // Optionally, determine the duration of the second GIF (in milliseconds)
            const secondGifDuration = 18500; // Change this to the duration of your second GIF

            setTimeout(function() {
                // Hide the GIF container after the second GIF finishes
                gifContainer.style.display = 'none';
                secondGif.style.display = 'none'; // Ensure the second GIF is hidden as well
            }, secondGifDuration);
        }, firstGifDuration);
    });
});

function askPassword() {
    var a = 10 + 35 + 38 + 69 + 100; // this could also be found on my website if you tried.. maybe you'll find where it's hidden with this hint.
    var w8w = prompt("Enter the password:");


    if (w8w === a.toString()) {
        window.location.href = "https://github.com/Ublec01d"; // target URL
    } else {
        alert("Incorrect password. Try harder.");
    }
}