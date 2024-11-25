function Add() {
    const input = document.getElementById('inp');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';

    // Create a paragraph element for the task
    const taskPara = document.createElement('p');
    taskPara.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function () {
        taskDiv.remove();
    };

    // Append the task and delete button to the task div
    taskDiv.appendChild(taskPara);
    taskDiv.appendChild(deleteButton);

    // Append the task div to the .text container
    document.querySelector('.text').appendChild(taskDiv);

    // Clear the input field after adding
    input.value = '';
}
