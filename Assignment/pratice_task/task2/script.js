// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add Task
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task.");

    tasks.push(taskText);
    saveTasks();
    renderTasks();

    taskInput.value = ""; // clear input
});

// Render tasks to the DOM
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Edit task
function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        saveTasks();
        renderTasks();
    }
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
