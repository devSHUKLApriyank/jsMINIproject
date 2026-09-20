const clock = document.querySelector("#clock")
const date = document.querySelector("#date")
const timer = document.querySelector("#timer")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset")

function currentHour() {
    const now = new Date()

    let hour = now.getHours();

    let period;

    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    if (hour === 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    hour = String(hour).padStart(2, "0");

    const minute = String(now.getMinutes()).padStart(2, "0")
    const second = String(now.getSeconds()).padStart(2, "0")



    clock.textContent = `${hour}:${minute}:${second} ${period}`

}

currentHour();

setInterval(() => {
    currentHour();
}, 1000)


function currentDate() {
    const now = new Date()

    const day = String(now.getDate()).padStart(2, "0")
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const year = String(now.getFullYear())

    date.textContent = `${day}/${month}/${year}`
}

currentDate()

let seconds = 0;
let intervalId;

start.addEventListener("click",()=>{
    intervalId = setInterval(()=>{
        seconds++
        timer.textContent = seconds;
    },1000)

})



pause.addEventListener("click", () => {
    clearInterval(intervalId);
});



reset.addEventListener("click", () => {
    clearInterval(intervalId);
    seconds = 0;
    timer.textContent = seconds;
});




