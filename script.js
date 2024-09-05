document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const celebrationSound = document.getElementById("celebration-sound");
    const messageDiv = document.createElement("div"); // Create a message div
    messageDiv.id = "message"; // Set its id to "message"
    document.body.appendChild(messageDiv); // Append it to the document body
    let tasksAdded = 0;

    addTaskBtn.addEventListener("click", function() {
        const taskInput = document.getElementById("task-input");
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.className = "task-item";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            li.appendChild(checkbox);
            const taskTextSpan = document.createElement("span");
            taskTextSpan.textContent = taskText;
            taskTextSpan.className = "task-text";
            li.appendChild(taskTextSpan);
            const removeBtn = document.createElement("button");
            removeBtn.className = "remove-btn";
            removeBtn.textContent = "X";
            removeBtn.addEventListener("click", function() {
                li.remove();
                tasksAdded--;
            });
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = "";
            tasksAdded++;
        } else {
            alert("Please enter a task.");
        }
    });

    taskList.addEventListener("change", function(e) {
        if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
            const taskText = e.target.nextSibling.textContent;
            if (e.target.checked) {
                // Do something when checkbox is checked (task completed)
                console.log("Task completed: " + taskText);
            } else {
                // Do something when checkbox is unchecked (task incomplete)
                console.log("Task incomplete: " + taskText);
            }

            // Check if all tasks are completed
            if (tasksAdded === taskList.querySelectorAll("input[type='checkbox']:checked").length) {
                celebrate();
            }
        }
    });

    function celebrate() {
        celebrationSound.play();
        // You can add other celebratory effects here

        // Add your completion comment here
        console.log("All tasks completed!");

        // Display a message
        messageDiv.textContent = "Congratulations! All tasks completed!";
    }
});
