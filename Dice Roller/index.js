
function rollDice() {
    const input = document.getElementById('input').value;
    const diceResults = document.getElementById('diceResults');
    const diceImages = document.getElementById('diceImages');


    const diceNums = [];
    const diceImgs = [];
    
    for (let i = 0; i < input; i++) {
        const value = Math.floor(Math.random() * 6)+1;

        diceNums.push(value);
        diceImgs.push(`<img src="dice/${value}.png">`);

    }
    diceResults.textContent=`Dice: ${diceNums.join(' , ')}`;
    diceImages.innerHTML=diceImgs.join('');
}