// Creating containers and obfuscating as gifs.
document.addEventListener('DOMContentLoaded', function() {
    const gifContainer = document.getElementById('gif-container');
    const hackSys = document.getElementById('hack-system');//remember to obfuscate later
    const firstGif = document.getElementById('first-gif');
    const secondGif = document.getElementById('second-gif');

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
