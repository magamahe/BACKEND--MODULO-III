const API_URL = "http://localhost:3000/tasks"; // después lo cambiás por la URL de Render

const form = document.getElementById("taskForm");
const table = document.getElementById("tasksTable");

let editingId = null;

// Cargar tareas
const loadTasks = async () => {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  table.innerHTML = "";

  tasks.forEach(task => {
    const row = document.createElement("tr");
    row.className = "border-b";

    row.innerHTML = `
      <td class="p-2 ${task.completed ? 'line-through text-gray-400' : ''}">
        ${task.title}
      </td>
      <td class="p-2">${task.description}</td>
      <td class="p-2 text-center">
        <input type="checkbox" ${task.completed ? 'checked' : ''} 
        onclick="toggleCompleted(${task.id}, ${!task.completed})">
      </td>
      <td class="p-2 text-center space-x-2">
        <button onclick="editTask(${task.id})" class="text-blue-500">✏️</button>
        <button onclick="deleteTask(${task.id})" class="text-red-500">🗑️</button>
      </td>
    `;

    table.appendChild(row);
  });
};

// Agregar o editar
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const task = { title, description };

  if (editingId) {
    await fetch(`${API_URL}/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    editingId = null;
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
  }

  form.reset();
  loadTasks();
});

// Eliminar
const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadTasks();
};

// Editar
const editTask = async (id) => {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const task = tasks.find(t => t.id === id);

  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  editingId = id;
};

// Completar
const toggleCompleted = async (id, completed) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed })
  });
  loadTasks();
};

loadTasks();
