const completeButton1 = getButton("complete-btn-1");
completeButton1.addEventListener("click", function () {
    const recent = numberFromString("recent-task");
    const total_task = numberFromString("tasks");

    const presentTask = recent - 1;
    document.getElementById("tasks").innerText = total_task + 1;
    document.getElementById("recent-task").innerText = presentTask;

    const button = document.getElementById("complete-btn-1");
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "default";
    alert("Board Completed Successfully");
    const title = document.getElementById("task-1");
    const activityLog = document.getElementById("log");

    const div = document.createElement("div");
    div.innerHTML =
        `<div class="bg-[#F4F7FF] rounded-lg p-4">
        <p>You've completed the task ${title.innerText} at ${new Date().toLocaleTimeString()
        }</p>
    </div>`;

    activityLog.appendChild(div);

    if (presentTask === 0) {
        alert("Congrats! You've completed all current tasks!");
    }
});

const completeButton2 = getButton("complete-btn-2");
completeButton2.addEventListener("click", function () {
    const recent = numberFromString("recent-task");
    const total_task = numberFromString("tasks");

    const presentTask = recent - 1;
    document.getElementById("tasks").innerText = total_task + 1;
    document.getElementById("recent-task").innerText = presentTask;

    const button = document.getElementById("complete-btn-2");
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "default";
    alert("Board Completed Successfully");
    const title = document.getElementById("task-2");
    const activityLog = document.getElementById("log");

    const div = document.createElement("div");
    div.innerHTML = `<div class="bg-[#F4F7FF] rounded-lg p-4">
        <p>You've completed the task ${title.innerText} at ${new Date().toLocaleTimeString()
        }</p>
    </div>
`;

    activityLog.appendChild(div);
    if (presentTask === 0) {
        alert("Congrats! You've completed all current tasks!");
    }
});

const completeButton3 = getButton("complete-btn-3");
completeButton3.addEventListener("click", function () {
    const recent = numberFromString("recent-task");
    const total_task = numberFromString("tasks");

    const presentTask = recent - 1;
    document.getElementById("tasks").innerText = total_task + 1;
    document.getElementById("recent-task").innerText = presentTask;

    const button = document.getElementById("complete-btn-3");
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "default";
    alert("Board Completed Successfully");

    const title = document.getElementById("task-3");
    const activityLog = document.getElementById("log");

    const div = document.createElement("div");
    div.innerHTML = `<div class="bg-[#F4F7FF] rounded-lg p-4">
        <p>You've completed the task ${title.innerText} at ${new Date().toLocaleTimeString()
        }</p>
    </div>
`;

    activityLog.appendChild(div);
    if (presentTask === 0) {
        alert("Congrats! You've completed all current tasks!");
    }
});

const completeButton4 = getButton("complete-btn-4");
completeButton4.addEventListener("click", function () {
    const recent = numberFromString("recent-task");
    const total_task = numberFromString("tasks");

    const presentTask = recent - 1;
    document.getElementById("tasks").innerText = total_task + 1;
    document.getElementById("recent-task").innerText = presentTask;

    const button = document.getElementById("complete-btn-4");
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "default";
    alert("Board Completed Successfully");

    const title = document.getElementById("task-4");

    const activityLog = document.getElementById("log");

    const div = document.createElement("div");
    div.innerHTML = `<div class="bg-[#F4F7FF] rounded-lg p-4">
        <p>You've completed the task ${title.innerText} at ${new Date().toLocaleTimeString()
        }</p>
    </div>
`;

    activityLog.appendChild(div);
    if (presentTask === 0) {
        alert("Congrats! You've completed all current tasks!");
    }
});

const completeButton5 = getButton("complete-btn-5");
completeButton5.addEventListener("click", function () {
    const recent = numberFromString("recent-task");
    const total_task = numberFromString("tasks");

    const presentTask = recent - 1;
    document.getElementById("tasks").innerText = total_task + 1;
    document.getElementById("recent-task").innerText = presentTask;

    const button = document.getElementById("complete-btn-5");
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "default";
    alert("Board Completed Successfully");

    const title = document.getElementById("task-5");
    const activityLog = document.getElementById("log");

    const div = document.createElement("div");
    div.innerHTML = `<div class="bg-[#F4F7FF] rounded-lg p-4">
        <p>You've completed the task ${title.innerHTML} at ${new Date().toLocaleTimeString()
        }</p>
    </div>
`;

    activityLog.appendChild(div);
    if (presentTask === 0) {
        alert("Congrats! You've completed all current tasks!");
    }
});

const completeButton6 = getButton("complete-btn-6");
completeButton6.addEventListener("click", function (event) {
    const recent = numberFromString("recent-task");
    const total_task = numberFromString("tasks");

    const presentTask = recent - 1;
    document.getElementById("tasks").innerText = total_task + 1;
    document.getElementById("recent-task").innerText = presentTask;

    const button = document.getElementById("complete-btn-6");
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "default";
    alert("Board Completed Successfully");

    const title = document.getElementById("task-6");
    const activityLog = document.getElementById("log");

    const div = document.createElement("div");
    div.innerHTML = `<div class="bg-[#F4F7FF] rounded-lg p-4">
        <p>You've completed the task ${title.innerText} at ${new Date().toLocaleTimeString()
        }</p>
    </div>
`;

    activityLog.appendChild(div);

    if (presentTask === 0) {
        alert("Congrats! You've completed all current tasks!");
    }
});



function numberFromString(id)
{
    const value =    document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function getButton(id){
    const button = document.getElementById(id);
    return button;
}