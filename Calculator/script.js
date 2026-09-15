const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const equals = document.querySelector("#equals")


numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        if(display.value === "0"){
            display.value = number.textContent;
        }else{
            display.value = display.value + number.textContent;
        }
    })
})