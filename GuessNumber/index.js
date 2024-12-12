const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let guess;
let attempt = 0;
let condition = true;
while (condition) {
    guess = window.prompt(`Enter a Number Between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Insert a valid number!");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Insert a valid number!");
    }
    else {
        attempt++;
        if (guess < answer) {
            window.alert("Guess is too low");
        }
        else if (guess > answer) {
            window.alert("Guess is too high");
        }
        else {
            window.alert(`Congratulation!! You guess the correct number ${guess} at ${attempt} attempts!`);
            condition = false;
        }
    }
}