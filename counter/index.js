let inc = document.querySelector('.js-inc-button');
let dec = document.querySelector('.js-dec-button');
let res = document.querySelector('.js-res-button');
let label = document.querySelector('.counter');
let count = 0;
inc.addEventListener('click', () => {
    count++;
    label.innerHTML = count;

});
dec.addEventListener('click', () => {
    count--;
    label.innerHTML = count;

});
res.addEventListener('click', () => {
    count=0;
    label.innerHTML = count;

});