const API_URL = "http://localhost:3334/tasks";

/**
 * Fetches all tasks from the backend.
 */
export async function getTasks() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return await response.json();
}

/**
 * Sends a new task to the backend.
 * @param {Object} task - The task object { name: string }.
 */
export async function createTask(task) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to create task");
  return await response.json();
}

/**
 * Updates an existing task by its index.
 * @param {number} index - The index of the task.
 * @param {Object} task - The updated task object.
 */
export async function updateTask(index, task) {
  const response = await fetch(`${API_URL}/${index}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return await response.json();
}

/**
 * Deletes a task by its index.
 * @param {number} index - The index of the task.
 */
export async function deleteTask(index) {
  const response = await fetch(`${API_URL}/${index}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
  return await response.json();
}
