const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const reset = document.querySelector("#reset")
const count = document.querySelector("#count")
const statusText = document.querySelector("#status");

let value = 0;

plus.addEventListener("click", () => {
    value = value + 1
    updateCount()
})

minus.addEventListener("click", () => {
    if (value > 0) {
        value = value - 1
        updateCount()
    }
})

reset.addEventListener("click", () => {
    value = 0
    updateCount()
})

function updateCount() {
    count.textContent = value;

    if (value > 0) {
        statusText.textContent = "Positive";
    } else {
        statusText.textContent = "Zero";
    }
}

