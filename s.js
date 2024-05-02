const inputElement = document.querySelector('.input'); // Get the input element by its class name
const startButton = document.querySelector('button'); // Get the "Start" button
const div = document.querySelector('.input-container');
const p = document.querySelector('.p');
const body = document.body;
const music = document.createElement('audio');
const h1 = document.querySelector('.h1');
const skeletonMeme = document.createElement('audio');

music.src = 'f.mp3';
skeletonMeme.src = 'Berserk skeleton meme (good quality).mp3';

let ggTyped = false; // This flag determines if 'gg' has been typed

// This function handles button clicks based on the state of `ggTyped`
function handleButtonClick() {
  if (ggTyped) {
    // If 'gg' was already typed, execute this block
    skeletonMeme.play();
    skeletonMeme.loop = true;
    body.style.backgroundImage = "url('skeletons-berserk.gif')";
    music.pause();
    h1.style.color = "red";
    inputElement.style.backgroundImage = "url('skeletons-berserk.gif')";
    type("Do you really think I care about your sad day?");
    inputElement.placeholder = "wow man ,wow";
  } else {
    inputElement.classList.add('gg');
    inputElement.placeholder = "Come on, don't run from it, TYPE IT 🙂";
    console.log("You're getting warmer...");
    inputElement.value = "";
    // Remove the 'gg' class after a delay
    setTimeout(() => {
      inputElement.classList.remove('gg');
    }, 1000);
  }
}

// This function handles keyup events to check for "gg"
function handleKeyUp() {
  const inputWord = inputElement.value.toLowerCase(); // Get the lowercase value of the input

  if (!ggTyped && inputWord === 'gg') {
    ggTyped = true; // Set the flag to true
    div.classList.add('movedown');
    console.log("You got it");
    p.innerHTML = "Welcome, Samir, welcome, welcome! Please have a seat.";
    music.play();
    inputElement.placeholder = "Good boy!";
    inputElement.value = ''; // Clear the input field

    // Further actions for the first time "gg" is typed and button is clicked
    setTimeout(() => {
      type("Happy... happy birthday to you!");
    }, 2000);

    setTimeout(() => {
      body.style.backgroundImage = "url('e.gif')"; 
    }, 1000);

    setTimeout(() => {    
      skeletonMeme.play();
      skeletonMeme.loop = true;
      body.style.backgroundImage = "url('skeletons-berserk.gif')";
      music.pause();
      type("Do you think I will let you enjoy this?");
      h1.style.color = "red";
      inputElement.style.backgroundImage = "url('skeletons-berserk.gif')";
    }, 6000);

    setTimeout(() => {
      skeletonMeme.pause();
      skeletonMeme.loop = false;
      body.style.backgroundImage = "url('sss.gif')";
      music.play();
      type("Just kidding! How was your day?");
      inputElement.placeholder = "Write about your day here";
      h1.style.color = "rgb(156,49,89)";
      inputElement.style.backgroundImage = "url('sss.gif')";
    }, 13000);
  }
}

// Set up event listeners only once
startButton.addEventListener('click', handleButtonClick);
inputElement.addEventListener('click', handleKeyUp);

// This function types out text with an interval delay for animation
function type(text) {
  let i = 0;
  let typedText = ''; 

  const interval = setInterval(() => {
    if (i < text.length) {
      typedText += text[i];
      h1.innerText = typedText;
      i++;
    } else {
      clearInterval(interval); // Clear the interval when done
    }
  }, 50); // Adjust typing speed as needed
}
