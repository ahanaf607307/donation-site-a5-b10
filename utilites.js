function getDonateBtnById(id){
    const donateBtn = document.getElementById(id)
    return donateBtn
}

function getInputFeildById(id){
    const inputFeild = document.getElementById(id)
    const inputFeildValue = inputFeild.value;
    const inputFeildNumber = parseFloat(inputFeildValue)
    return inputFeildNumber
}

function getBalanceById(id){
    const mainBalance = document.getElementById(id)
    const mainBalanceValue = mainBalance.innerText;
    const mainBalanceValueNumber = parseFloat(mainBalanceValue)
    return mainBalanceValueNumber;
}

function getMainBalanceById(id){
    const mainBalanceTotal = document.getElementById(id)
    const mainBalanceTotalValue = mainBalanceTotal.innerText;
    const mainBalanceValueNumber = parseFloat(mainBalanceTotalValue)
    return mainBalanceValueNumber
}


function getInputTextById(id){
    const clearInputText = document.getElementById(id)

    return clearInputText;
}