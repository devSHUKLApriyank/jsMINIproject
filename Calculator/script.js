const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const equals = document.querySelector("#equals")

let firstNumber = null;
let selectedOperator = null;
let secondNumber = null;
let justCalculated = false;

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {

        if (justCalculated) {
            display.value = number.textContent;
            justCalculated = false;
        }
        else if (display.value === "0") {
            display.value = number.textContent;
        }
        else {
            display.value = display.value + number.textContent;
        }
    })
})


operators.forEach((operator) => {
    operator.addEventListener("click", () => {

        firstNumber = Number(display.value);
        selectedOperator = operator.textContent;

        display.value = "0";
        justCalculated = false;
    });
});


equals.addEventListener("click", () => {

    if(justCalculated){
        return;
    }

    secondNumber = Number(display.value);

    if (selectedOperator === "+") {
        display.value = firstNumber + secondNumber;
    }

    else if (selectedOperator === "-") {
        display.value = firstNumber - secondNumber;
    }

    else if (selectedOperator === "*") {
        display.value = firstNumber * secondNumber;
    }

    else if (selectedOperator === "/") {

        if (secondNumber === 0) {
            display.value = "Error"
        } else {
            display.value = firstNumber / secondNumber;
        }
    }
    justCalculated = true;
});



clear.addEventListener("click", () => {
    display.value = "0";
    firstNumber = null;
    selectedOperator = null;
    secondNumber = null;
});