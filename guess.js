const guess = document.getElementById("guess");
const alertMessage = document.getElementById("alertMessage");
const submit1 = document.getElementById("submit1");

let attempt = 0;
let running = true;
const min = 1;
const max = 100;

let answer = Math.floor(Math.random() * (max - min + 1)) + min;

submit1.onclick = function() {
    if (!running) return;

    let userGuess = Number(guess.value);
    attempt++;

    if (isNaN(userGuess)) {
        alertMessage.textContent = `${guess.value} is not a number`;
    } else if (userGuess < min || userGuess > max) {
        alertMessage.textContent = `Please select a number between ${min}-${max}`;
    } else if (userGuess < answer) {
        alertMessage.textContent = `Hint: Guess higher number`;
    } else if (userGuess > answer) {
        alertMessage.textContent = `Hint: Guess lower number`;
    } else {
        alertMessage.textContent = `You guessed it right! It took you ${attempt} attempts`;
        running = false;
    }

    guess.value = ""; // clears input for next guess
};
