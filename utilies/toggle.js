document.getElementById("cashout").style.display = "none";
document.getElementById('addmoney').style.display = 'none'


document.getElementById("add-money-box").addEventListener("click", function () {
    
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById('transection').style.display = 'none';
    document.getElementById('title').style.display = 'none'
    
})

document.getElementById("cashout-box").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById('transection').style.display = 'none';
    document.getElementById('title').style.display = 'none'
}) 

document.getElementById('transection-box').addEventListener('click',function(){
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById('transection').style.display = 'block';
    document.getElementById('title').style.display = 'block'
    document.getElementById('box-model').style.backgroundColor = 'blue';
})