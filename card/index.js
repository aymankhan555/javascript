const subscribeBtn = document.getElementById('mycheckbox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('MasterCardBtn');
const payPalBtn = document.getElementById('PayPalBtn');

const submitBtn = document.getElementById('submitBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submitBtn.addEventListener('click', () => {

    if (subscribeBtn.checked) {
        subResult.textContent = 'Your Are Subscribed';
        if (visaBtn.checked) {
            paymentResult.textContent = 'You are using Visa';
        }
        else if(masterCardBtn.checked) {
            paymentResult.textContent = 'You are using MaterCard';
        }
        else if(payPalBtn.checked) {
            paymentResult.textContent = 'You are using payPal';
        }
        else
        {
            paymentResult.textContent = 'Choose a card';
        }
        
    }
    else {
        subResult.textContent = 'Your Are Not Subscribed';
    }
});