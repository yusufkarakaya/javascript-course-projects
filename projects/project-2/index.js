"use strict";
const tryAgain = document.getElementById("try-again");
const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let running = true;
let guess;
let attemtps = 0;
tryAgain.style.display = "none";
while (running) {
    guess = window.prompt(`Guess a number between ${minNumber} and ${maxNumber}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if (guess < minNumber || guess > maxNumber) {
        alert(`Please enter a number between ${minNumber} and ${maxNumber}`);
    }
    else {
        attemtps++;
        if (guess < answer) {
            window.alert("Too low, try again");
        }
        else if (guess > answer) {
            window.alert("too high, try again");
        }
        else {
            window.alert(`Correct! You took ${attemtps} attempts`);
            running = false;
            tryAgain.style.display = "block";
        }
    }
}
tryAgain.addEventListener("click", () => {
    running = true;
    window.location.reload();
});
