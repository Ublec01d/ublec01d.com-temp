// Creating containers and obfuscating as gifs.
document.addEventListener('DOMContentLoaded', function() {
    const gifContainer = document.getElementById('gif-container');
    const hackSys = document.getElementById('hack-system');//remember to obfuscate later
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

    hackSys.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Show the container
        gifContainer.style.display = 'block';

        // Download the file to the host
        firstGif.style.display = 'block';
        secondGif.style.display = 'none';

        // Determine the duration of the download (in milliseconds)
        const firstGifDuration = 6000; // Change this to the duration of your first GIF

        setTimeout(function() {
            // finalize the download and start the attack
            firstGif.style.display = 'none';
            secondGif.style.display = 'block';

            // Optionally, determine the duration of the attack (in milliseconds)
            const secondGifDuration = 18500; // Change this to the duration of your second GIF

            setTimeout(function() {
                // Hide the download container after the attack finishes
                gifContainer.style.display = 'none';
                secondGif.style.display = 'none'; // Ensure the attack is hidden as well
            }, secondGifDuration);
        }, firstGifDuration);
    });
});

function askPassword() {
    var a = 10 + 35 + 38 + 69 + 100; // this could also be found on my website if you tried.. maybe you'll find where it's hidden with this hint.
    var w8w = prompt("Enter the code: XXX ");


    if (w8w === a.toString()) {
        window.location.href = "https://github.com/Ublec01d/website"; // target URL
    } else {
        alert("INCORRECT CODE! Think...");
    }
}
