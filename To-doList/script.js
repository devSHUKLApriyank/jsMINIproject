const taskInput = document.querySelector("#taskInput")
const taskList = document.querySelector("#taskList")
const addBtn = document.querySelector("#addBtn")

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];


addBtn.addEventListener("click", () => {
    addTask()
})


function addTask() {
    if (taskInput.value === "") {
        return;
    }

     tasks.push(taskInput.value);

     localStorage.setItem("tasks", JSON.stringify(tasks));   
     
     renderTask(taskInput.value);

    taskInput.value = ""; 

}

  function renderTask(task){
    
    const li = document.createElement("li")
    li.textContent = task;
     const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove()
    })

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    })

    li.appendChild(completeBtn)
    li.appendChild(deleteBtn)
    taskList.appendChild(li)   

  }

  tasks.forEach((task) => {
    renderTask(task);
});

