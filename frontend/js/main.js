import { getTasks, createTask, updateTask, deleteTask } from "./api.js";

const form = document.querySelector("#new-task-form");
const taskList = document.querySelector("#tasks");

/**
 * Loads all tasks from the backend and renders them.
 */
async function loadTasks() {
  try {
    const tasks = await getTasks();
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      // Use the array index as ID
      renderTask(task.name, index);
    });
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
}

// Initial load
loadTasks();

/**
 * Handles the form submission for creating a new task.
 */
form.addEventListener("submit", async (event) => {
  // Prevent the default browser reload on form submission
  event.preventDefault();

  const formData = new FormData(form);
  const enteredTaskName = formData.get("task-input")?.trim();

  // Validate input
  if (!enteredTaskName) {
    alert("Please enter a task!");
    return;
  }

  try {
    // Send POST request to the backend to create a new item
    await createTask({ name: enteredTaskName });
    // Reload the list to get the updated indices
    loadTasks();
    form.reset();
  } catch (error) {
    console.error("Error creating task:", error);
  }
});

/**
 * Creates the DOM structure for a task and handles its interaction.
 * @param {string} taskName - The name displayed in the task.
 * @param {number} taskId - The index of the task in the database.
 */
function renderTask(taskName, taskId) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.classList.add("text");
  inputElement.value = taskName;
  inputElement.readOnly = true;

  const actionsElement = document.createElement("div");
  actionsElement.classList.add("task-actions");

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerText = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "Delete";

  // Toggle between Edit and Save modes
  editButton.addEventListener("click", async () => {
    if (inputElement.readOnly) {
      // Enable editing mode
      inputElement.readOnly = false;
      inputElement.focus();
      editButton.innerText = "Save";
    } else {
      // Save changes to the backend
      const updatedName = inputElement.value.trim();
      if (!updatedName) {
        alert("Task cannot be empty!");
        return;
      }

      try {
        await updateTask(taskId, { name: updatedName });
        inputElement.readOnly = true;
        editButton.innerText = "Edit";
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  });

  // Delete task from the backend and DOM
  deleteButton.addEventListener("click", async () => {
    try {
      await deleteTask(taskId);
      // Reload list to ensure indices are correct after deletion
      loadTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  });

  actionsElement.appendChild(editButton);
  actionsElement.appendChild(deleteButton);

  taskElement.appendChild(inputElement);
  taskElement.appendChild(actionsElement);

  taskList.appendChild(taskElement);
}
