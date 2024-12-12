const myButton = document.getElementById("myButton");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");

myButton.onclick=function(){

    let random1 = Math.floor(Math.random() * 6) +1; 
    let random2 = Math.floor(Math.random() * 6) +1; 
    let random3 = Math.floor(Math.random() * 6) +1; 

    l1.textContent= random1;
    l2.textContent= random2;
    l3.textContent= random3;
}