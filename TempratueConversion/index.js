const textBox = document.querySelector('#textBox');
const toCelcius = document.querySelector('#toCelcius');
const toFarenheit = document.querySelector('#toFarenheit');
const result = document.querySelector('#result');
let temp;

function convert() {
    if (toFarenheit.checked) {
        temp = textBox.value;
        temp = Number(temp);
        temp = (temp * 9 / 5) + 32;
        result.innerText = temp.toFixed(1)+"°F";
    }
    else if (toCelcius.checked) {
        temp = textBox.value;
        temp = Number(temp);
        temp = (temp - 32) * (5 / 9);
        result.innerText = temp.toFixed(1)+"°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}