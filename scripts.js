const userInput=document.getElementById("user-input")
const resultEl=document.getElementById("results-div")
const clearBtn=document.getElementById("clear-btn")
const checkBtn=document.getElementById("check-btn")
let result=document.getElementsByTagName("p")
clearBtn.addEventListener("click",function(){
  resultEl.textContent=""

})
function validNumber(phoneNumber){
  const regex=/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  return regex.test(phoneNumber)
}

checkBtn.addEventListener("click",function(){
  if(userInput.value==""){
    alert("Please provide a phone number")
    return
  }
  if(validNumber(userInput.value)){
          resultEl.innerHTML+=`<p style="color:rgb(0, 71, 27)">Valid US number: ${userInput.value}</p> `
          
  }else{
    resultEl.innerHTML+=`<p style"color:rgb(77, 56, 0)">Invalid US number: ${userInput.value}</p> `
    

  }
  userInput.value=""

})
