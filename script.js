const addBtn = document.getElementById("add-task-button");
const inpTask = document.getElementById("input-task");
const ul = document.getElementById("task-list");

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

taskList.forEach(task => {
    if (task.deleted) return;

    let li = document.createElement("li");
    let chBox = document.createElement("input");
    chBox.setAttribute("type", "checkbox");
    let liTaskText = document.createElement("span");
    liTaskText.classList.add("task");

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    let img = document.createElement("img");
    img.setAttribute("src", "/icons8-delete (1).svg");
    delBtn.appendChild(img);

    liTaskText.innerHTML = task.text;
    chBox.onclick = () => {
        if (chBox.checked) {
            chBox.checked = true;
            task.completed = true;
            localStorage.setItem("tasks", JSON.stringify(taskList));
        } else {
            chBox.checked = false;
            task.completed = false;
            localStorage.setItem("tasks", JSON.stringify(taskList));
        }

    }
    if (task.completed) {
        chBox.checked = true;
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }
    let div = document.createElement("div");
    div.append(chBox, liTaskText);
    li.append(div, delBtn);
    ul.appendChild(li);

    delBtn.onclick = () => {
        ul.removeChild(li);
        task['deleted'] = true;
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }
});


addBtn.addEventListener("click", function () {

    let li = document.createElement("li");

    let chBox = document.createElement("input");
    chBox.setAttribute("type", "checkbox");

    let liTaskText = document.createElement("span");
    liTaskText.classList.add("task");

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    let img = document.createElement("img");
    img.setAttribute("src", "/icons8-delete (1).svg");
    delBtn.appendChild(img);

    if (!inpTask.value) return;


    liTaskText.innerHTML = inpTask.value;
    let div = document.createElement("div");
    div.append(chBox, liTaskText);
    li.append(div, delBtn);
    ul.appendChild(li);

    let task = {};
    task['text'] = inpTask.value;
    task['completed'] = false;
    task['deleted'] = false;

    delBtn.onclick = () => {
        ul.removeChild(li);
        task['deleted'] = true;
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }
    chBox.onclick = () => {
        if (chBox.checked) {
            chBox.checked = true;
            task.completed = true;

        } else {
            chBox.checked = false;
            task.completed = false;

        }

        localStorage.setItem("tasks", JSON.stringify(taskList));
    }


    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    inpTask.value = "";
});






