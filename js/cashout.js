document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("chashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("cashout-amount").value;
    convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 2413) {
      const sum = convertedMainBalance - convertedAmount;
      document.getElementById("main-balance").innerText = sum;


      const container = document.getElementById('transection-container');
      const p =document.createElement('p');
      p.innerText = `
      cashout ${amount} from this ${sum} account ;
      `
      container.appendChild(p).style.backgroundColor = 'blue';
      container.appendChild(p).style.padding = '5px';
            container.appendChild(p).style.borderRadius = '10px';
            container.appendChild(p).style.color = 'white';
            container.appendChild(p).style.fontSize= 'bold';
            container.appendChild(p).style.margin = '5px';
    } else {
      alert("enter valid pin");
    }
  });