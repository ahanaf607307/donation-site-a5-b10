
const donationBtn = document.getElementById("donation-btn")

const historyBtn = document.getElementById("history-btn")


historyBtn.addEventListener('click' , function(){
  document.getElementById("donation").classList.add("hidden")
   document.getElementById("history").classList.remove("hidden")
   
    historyBtn.classList.add('btn-color')
    donationBtn.classList.remove('btn-color')

})
donationBtn.addEventListener('click' , function(){
 document.getElementById("donation").classList.remove("hidden")
   document.getElementById("history").classList.add("hidden")

    historyBtn.classList.remove('btn-color')
    donationBtn.classList.add('btn-color')
})

