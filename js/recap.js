document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("pin").value;

    const convertedPin = parseInt(pin);
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (amount && pin) {
        if (convertedPin===2413) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;


            const container = document.getElementById('transection-container');
            const p =document.createElement('p');
            p.innerText = `
            added ${amount} from ${sum} account. 
            
            `
            container.appendChild(p).style.backgroundColor = 'blue';
            container.appendChild(p).style.padding = '5px';
            container.appendChild(p).style.borderRadius = '10px';
            container.appendChild(p).style.color = 'white';
            container.appendChild(p).style.fontSize= 'bold';
            container.appendChild(p).style.margin = '5px';
        }
        else {
            alert("Enter valid pin")
        }
    }
    else {
        alert("Enter amount")
    }

})