const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const addBtn = document.querySelector("#addBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", () => {
    addTask();
});


function addTask() {

    if (taskInput.value === "") {
        return;
    }

    const task = {
        id: Date.now(),
        text: taskInput.value,
        completed: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask(task);

    taskInput.value = "";
}


function renderTask(task) {

    const li = document.createElement("li");
    li.textContent = task.text;


    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", () => {

        task.completed = !task.completed;

        li.classList.toggle("completed");

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    if (task.completed) {
    li.classList.add("completed");
    }

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {

        tasks = tasks.filter((item) => {
            return item.id !== task.id;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove();
    });


    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}


// Page load par saved tasks render
tasks.forEach((task) => {
    renderTask(task);
});