




  const divElement =document.getElementById('mydiv');
  divElement.addEventListener('click',()=>{
    divElement.classList.add('green');
    divElement.textContent='Brush korso🧹';

    divElement.addEventListener('mouseout',()=>{
      divElement.style.backgroundColor="brown";
      divElement.textContent='I AM AYMAN 😊';
    });
  });

  
