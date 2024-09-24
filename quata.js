getDonateBtnById("quata-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const inputFeildNumber = getInputFeildById("quata-input");
  const mainBalance = getBalanceById("quata-total");
  const totalBalanceMain = getMainBalanceById("mainBalanceTotal");
  if (isNaN(inputFeildNumber)) {
    return alert("please input amount");
  } else if (inputFeildNumber > totalBalanceMain || 0 > inputFeildNumber) {
    return alert("you have not enough money in your balance");
  } else {
    const modalId = document.getElementById("my_modal_5");
    modalId.showModal();
  }

  const totalMoney = mainBalance + inputFeildNumber;
  getInputTextById("quata-total").innerText = totalMoney;

  const remainingBalanceTotal = totalBalanceMain - inputFeildNumber;
  getInputTextById("mainBalanceTotal").innerText = remainingBalanceTotal;

  getInputTextById("quata-input").value = "";

  // history section start

  const historyDate = new Date();
  var newDiv = document.createElement("div");
  var newH1 = document.createElement("h1");
  newH1.textContent = ` ${inputFeildNumber} Taka is Donated for Aid Injured in the Quota Movement in Bangladesh`;
  var newP = document.createElement("p");
  newP.textContent = `${historyDate}`;
  newDiv.appendChild(newH1);
  newDiv.appendChild(newP);
  newDiv.style.border = "1px solid gray";
  newDiv.style.borderRadius = "10px";
  newDiv.style.padding = "20px";
  newDiv.style.marginTop = "10px";
  newH1.style.fontSize = "22px";
  newH1.style.fontWeight = "bolder";
  document.getElementById("history").appendChild(newDiv);
});
