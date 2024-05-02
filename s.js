const inputElement = document.querySelector('.input'); // Get the input element by its class name
const startButton = document.querySelector('button'); // Get the "Start" button
const div = document.querySelector('.input-container');
const p = document.querySelector('.p');
const body = document.body;



// Event listener for keyup (when a key is released)
inputElement.addEventListener('keyup', event => {
    const inputWord = inputElement.value.toLowerCase(); // Get the lowercase value of the input

    // Check if the input matches "nono"
    if (inputWord === 'gg') {
   
        startButton.addEventListener('click', () => {
            div.classList.add('movedown');
            console.log('u get it');
            p.innerHTML = 'welcome samir , happy birthday to u';
            inputElement.style.backgroundImage = "url('e.gif')";
        });
        setTimeout(() => {
                 // Change the background color
                    body.style.backgroundImage = "url('e.gif')"; // Replace with your preferred color
        }, 1000)


    }else if (inputWord ==! 'gg'){
        // Event listener for button click
        startButton.addEventListener('click', () => {
            // Change background color
            inputElement.classList.add('gg'); // Add the 'gg' class

            // Update placeholder text
            inputElement.placeholder = "come on don't run from it, TYPE IT 🙂";
            inputElement.value = '';

            // Add some vibes (you can customize this message)
            console.log("You're getting warmer...");

            // Remove the 'gg' class after a delay (adjust the duration as needed)
            setTimeout(() => {
                inputElement.classList.remove('gg');
            }, 1000); // Remove after 1 second (adjust as desired)
        });

    }
});


// Get a reference to the <body> element
