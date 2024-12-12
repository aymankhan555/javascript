
const myBox = document.getElementById('myBox');
const myBtn = document.getElementById('myBtn');

// myBox.addEventListener('click',(event)=>{
//     event.target.style.backgroundColor='tomato';
//     event.target.textContent=' Ouch! 🤕';
// });
// myBox.addEventListener('mouseover',event=>{
//     event.target.style.backgroundColor='yellow';
//     event.target.textContent = 'Dont do it! 😨'
// });
// myBox.addEventListener('mouseout',event=>{
//     event.target.style.backgroundColor='lightGreen';
//     event.target.textContent = 'Click me! 😎'
// });


myBtn.addEventListener('click',(event)=>{
    myBox.style.backgroundColor='tomato';
    myBox.textContent=' Ouch! 🤕';
    myBtn.style.backgroundColor='tomato';
    
});
myBtn.addEventListener('mouseover',event=>{
    myBox.style.backgroundColor='yellow';
    myBox.textContent = 'Dont do it! 😨';
    myBtn.style.backgroundColor='yellow';
});
myBtn.addEventListener('mouseout',event=>{
    myBox.style.backgroundColor='lightGreen';
    myBox.textContent = 'Click me! 😎';
    myBtn.style.backgroundColor='lightGreen';

});