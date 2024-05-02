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
    inputElement.style.backgroundImage ="url('skeletons-berserk.gif')";
    type("Do you really think I care about your sad damn day?");
    inputElement.placeholder = "wow man ,wow";
    startButton.innerHTML = 'u even click me';
    startButton.style.backgroundColor = "rgba(175, 44, 44, 0.262)";
    inputElement.value = "";
    p.innerHTML = "we been togther for years..am dissponting "

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
    setTimeout(() =>{
      disableInput();
    },1000);
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
      p.innerHTML = "ooo how kawayyy 😖";
      p.style.color = "white";
      h1.style.color = "red";
      inputElement.style.backgroundImage = "url('skeletons-berserk.gif')";
    }, 6000);

    setTimeout(() => {
      skeletonMeme.pause();
      skeletonMeme.loop = false;
      body.style.backgroundImage = "url('sss.gif')";
      music.play();
      type("Just kidding! How was your day?");
      p.innerHTML = "come on write am no joking becase i do care about your day i do";
      p.style.color = "black";
      inputElement.placeholder = "Write about your day here";
      h1.style.color = "rgb(156,49,89)";
      inputElement.style.backgroundImage = "url('sss.gif')";
    }, 13000);
 // Disable the input when the startButton is clicked
  // Set a timeout to re-enable the input after 10 seconds
};}
setTimeout(() =>{enableInput();},13000);
startButton.addEventListener('click', handleButtonClick);
inputElement.addEventListener('keyup', handleKeyUp);

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



function disableInput() {
    inputElement.disabled = true; // Disable typing
}
function enableInput() {
  inputElement.disabled = false; // Disable typing
}


