document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const acountNumber = document.getElementById('Acount-number').value;
    const pinNumber = document.getElementById('pin').value;
    const convertedPin = parseInt(pinNumber);
     if(acountNumber.length===11){
       if(convertedPin===2413){
        window.location.href ="./main.html";
       }else{
        alert('Pin Invalid ');
       }
     }else{
        alert('need valid acount number');
     }
})