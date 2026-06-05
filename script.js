let words = ["CAR", "PROGRAM", "PHONE", "AIRPLANE"];
let chWord = words[Math.floor(Math.random() * words.length)];
let lives = 7;
let guessLetter = [];

function displayWord() {
  let display = "";
  let win = true;
  for (let i = 0; i < chWord.length; ++i) {
    if (guessLetter.includes(chWord[i])) {
      display += chWord[i];
    } else {
      display += "_";
      win = false;
    }
  }
  document.getElementById("word").innerText = display;
  if (win) {
    document.getElementById("message").innerText =
      "You won! Remaining lives: " + lives;
  }
}

function guess() {
  if (lives === 0 || !document.getElementById("word").innerText.includes("_")) {
    return;
  }
  let input = document.getElementById("letter");
  let letter = input.value.toUpperCase();
  input.value = "";
  input.focus();
  if (letter >= "A" && letter <= "Z" && !guessLetter.includes(letter)) {
    guessLetter.push(letter);
    if (!chWord.includes(letter)) {
      --lives;
      document.getElementById("lives").innerText = lives;
    }
    displayWord();
    if (lives === 0) {
      document.getElementById("message").innerText =
        "You lost! The word was: " + chWord;
    }
  }
}

displayWord();
