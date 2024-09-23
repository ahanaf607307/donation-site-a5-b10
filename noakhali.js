getDonateBtnById("noakhali-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const inputFeildNumber = getInputFeildById("noakhali-input");
  const mainBalance = getBalanceById("noakhali-money");
  const totalBalanceMain = getMainBalanceById("mainBalanceTotal");
  if (isNaN(inputFeildNumber)) {
    return alert("please input amount");
  }
 
if(inputFeildNumber > totalBalanceMain || 0 >inputFeildNumber){
   return alert("you have not enough money in your balance")
 }
  const totalMoney = mainBalance + inputFeildNumber;
  getInputTextById("noakhali-money").innerText = totalMoney;

  const remainingBalanceTotal = totalBalanceMain - inputFeildNumber;
  getInputTextById("mainBalanceTotal").innerText = remainingBalanceTotal;

  getInputTextById("noakhali-input").value = '';

const historyDate = new Date();
var newDiv = document.createElement('div');
var newH1 = document.createElement('h1');
newH1.textContent = ` ${inputFeildNumber} Taka is Donated for Flood at Noakhali, Bangladesh`;
var newP = document.createElement('p');
newP.textContent = `${historyDate}`;
newDiv.appendChild(newH1);
newDiv.appendChild(newP);
newDiv.style.border = '1px solid gray';
newDiv.style.borderRadius = '10px';
newDiv.style.padding = '20px';
newDiv.style.marginTop = '10px';
newH1.style.fontSize = '22px';
newH1.style.fontWeight = 'bolder';
document.getElementById('history').appendChild(newDiv);

});
