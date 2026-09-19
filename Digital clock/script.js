const clock = document.querySelector("#clock")

function currentHour() {
    const now = new Date()

    const hour = String(now.getHours()).padStart(2, "0")
    const minute = String(now.getMinutes()).padStart(2, "0")
    const second = String(now.getSeconds()).padStart(2, "0")

    clock.textContent = `${hour}:${minute}:${second}`
}

currentHour();

setInterval(() => {
    currentHour();
}, 1000)