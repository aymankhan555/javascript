const myBox = document.getElementById('myBox');

document.addEventListener('keydown', event => {
    myBox.style.backgroundColor = 'tomato';
    myBox.innerHTML = '😨';
});
document.addEventListener('keyup', event => {
    myBox.style.backgroundColor = 'lightblue';
    myBox.innerHTML = '😄';
});

const movment = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
    event.preventDefault();
    if (event.key === 'ArrowUp') {
        y -= movment;
    }
    else if (event.key === 'ArrowDown') {
        y += movment;
    }
    else if (event.key === 'ArrowLeft') {
        x -= movment;
    }
    else if (event.key === 'ArrowRight') {
        x += movment;
    }
    myBox.style.top=`${y}px`;
    myBox.style.left=`${x}px`;
});