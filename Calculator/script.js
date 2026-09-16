const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const equals = document.querySelector("#equals")

let firstNumber = null;
let selectedOperator = null;

numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        if(display.value === "0"){
            display.value = number.textContent;
        }else{
            display.value = display.value + number.textContent;
        }
    })
})


operators.forEach((operator) => {
    operator.addEventListener("click", () => {

        firstNumber = Number(display.value);
        selectedOperator = operator.textContent;
    });
});


equals.addEventListener("click", () => {

    const secondNumber = Number(display.value);

});