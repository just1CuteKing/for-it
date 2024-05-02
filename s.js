const inputElement = document.querySelector('.input'); // Get the input element by its class name
const startButton = document.querySelector('button'); // Get the "Start" button
const div = document.querySelector('.input-container');
const p = document.querySelector('.p');
const body = document.body;
const music = document.createElement('audio')
const h1 = document.querySelector('.h1');
const skeletonMeme = document.createElement('audio')




music.src = 'f.mp3';
music.style.display = 'none';
music.pause();

skeletonMeme.src = 'Berserk skeleton meme (good quality).mp3';
skeletonMeme.style.display = 'none';
skeletonMeme.pause();



// Event listener for keyup (when a key is released)
inputElement.addEventListener('keyup', event => {
    const inputWord = inputElement.value.toLowerCase(); // Get the lowercase value of the input

    // Check if the input matches "nono"
    if (inputWord === 'gg') {
   
        startButton.addEventListener('click', () => {
            div.classList.add('movedown');
            console.log('u get it');
            p.innerHTML = 'welcome samir, welcome , Welcome, please have a seat.';
            music.play();
            inputElement.placeholder ='good boy';
            inputElement.value = '';
            setTimeout(() => {
                type("Happy ..happy birthday to u")},2000);
                setTimeout(() => {
                         // Change the background color
                            body.style.backgroundImage = "url('e.gif')"; // Replace with your preferred color
                }, 1000)
        
                    setTimeout(() => {    
                        skeletonMeme.play();
                        skeletonMeme.loop=true;
                        body.style.backgroundImage = "url('skeletons-berserk.gif')";
                        music.style.display = 'none';
                        music.pause();
                        type('do u think i will let u enjoy this')
                        h1.style.color = "red";
                        inputElement.style.backgroundImage = "url('skeletons-berserk.gif')";
                    },6000)
                
            
        });
    
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




    

function type(text){
    
    const speach = text;


    let i = 0;
    let firstLetter = ''; // Initialize firstLetter variable
 
        const interval = setInterval(() => {

                h1.innerHTML  =firstLetter

        
            if (speach[i] !== undefined && speach[i] !== '\r') {
                firstLetter = firstLetter + speach[i];
                
                i++;
            } else {
                clearInterval(interval);
            }
        },50)
}