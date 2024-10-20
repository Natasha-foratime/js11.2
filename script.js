function addTask() {
    let getTask = document.getElementById('task');

    let newTask = document.createElement('li');

    let copyTask = getTask.value

    newTask.textContent = copyTask;

    document.getElementById('listTask').prepend(newTask);

    getTask.value = '';
}

function finishTask() {
    document.querySelector("li").event.target
    element.classList.toggle(finish)
}