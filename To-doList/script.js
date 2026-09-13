const taskInput = document.querySelector("#taskInput")
const taskList = document.querySelector("#taskList")
const addBtn = document.querySelector("#addBtn")


addBtn.addEventListener("click", () => {
    addTask()
})




function addTask() {
    if (taskInput.value === "") {
        return;
    }
    const li = document.createElement("li")
    li.textContent = taskInput.value

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";

    completeBtn.addEventListener("click", () => {
        completeBtn.parentElement.classList.add("completed")
    })

    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove()
    })

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    })

    li.appendChild(completeBtn)
    li.appendChild(deleteBtn)
    taskList.appendChild(li)

    taskInput.value = "";

}


