const API_URL = 'http://localhost:3000/api/tasks';
let allTasks = [];

// Selectores
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const taskIdInput = document.getElementById('taskId');

let editingTaskId = null;

// 1. CARGAR TAREAS
async function loadTasks() {
    try {
        const res = await fetch(API_URL);
        allTasks = await res.json();
        renderTasks(allTasks);
    } catch (err) {
        showToast("Error al conectar con el servidor", "error");
    }
}

// 2. RENDERIZAR LISTA
function renderTasks(tasks) {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="col-span-full text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed">
                <p class="text-slate-500 font-medium">No hay tareas pendientes.</p>
            </div>`;
        return;
    }

    tasks.forEach(t => {
        const card = document.createElement('div');
        card.className = `bg-white dark:bg-slate-900 p-5 rounded-2xl border flex justify-between items-center
            ${t.completed ? 'opacity-60 line-through' : ''}`;

        card.innerHTML = `
            <div>
                <h3 class="font-bold text-lg">${t.title}</h3>
                <p class="text-sm text-slate-500">${t.description || 'Sin descripción'}</p>
            </div>
            <div class="flex gap-2">
                <button onclick="toggleTask('${t._id}', ${t.completed})"
                    class="px-3 py-1 rounded-lg text-sm ${t.completed ? 'bg-amber-500' : 'bg-green-600'} text-white">
                    ${t.completed ? 'Reabrir' : 'Completar'}
                </button>
                <button onclick="editTask('${t._id}')" class="text-blue-500">✏️</button>
                <button onclick="deleteTask('${t._id}')" class="text-red-500">🗑️</button>
            </div>
        `;

        taskList.appendChild(card);
    });
}

// 3. GUARDAR / ACTUALIZAR
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = taskIdInput.value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const taskData = { title, description };
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    if (editingTaskId && editingTaskId !== taskIdInput.value) {
        showToast("Estado inválido del formulario", "error");
        resetForm();
        return;
    }

    try {
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData)
        });

        if (res.ok) {
            showToast(id ? "Tarea actualizada" : "Tarea creada");
            resetForm();
            loadTasks();
        }
    } catch {
        showToast("Error al guardar", "error");
    }
});

// 4. EDITAR
function editTask(id) {
    const t = allTasks.find(task => task._id === id);
    if (!t) return;

    editingTaskId = id;

    formTitle.innerText = "Editando tarea";
    formTitle.classList.remove('text-blue-600');
    formTitle.classList.add('text-amber-500');

    taskIdInput.value = id;
    document.getElementById('title').value = t.title;
    document.getElementById('description').value = t.description || '';

    submitBtn.innerText = "Modificar tarea";
    submitBtn.classList.remove('bg-blue-600');
    submitBtn.classList.add('bg-amber-500');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. RESETEAR FORMULARIO
function resetForm() {
    taskForm.reset();
    taskIdInput.value = '';
    editingTaskId = null;

    formTitle.innerText = "Agregar nueva tarea";
    formTitle.classList.remove('text-amber-500');
    formTitle.classList.add('text-blue-600');

    submitBtn.innerText = "Guardar tarea";
    submitBtn.classList.remove('bg-amber-500');
    submitBtn.classList.add('bg-blue-600');
}

// 6. BORRAR
async function deleteTask(id) {
    if (!confirm("¿Eliminar esta tarea?")) return;

    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

        if (res.ok) {
            showToast("Tarea eliminada");

            // ⚠️ Si estaba editando esta tarea → resetear
            if (editingTaskId === id) {
                resetForm();
            }

            loadTasks();
        }
    } catch {
        showToast("No se pudo eliminar", "error");
    }
}

// 7. COMPLETAR / REABRIR
async function toggleTask(id, completed) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !completed })
        });
        loadTasks();
    } catch {
        showToast("Error al actualizar estado", "error");
    }
}

// 8. BUSCADOR
searchInput.addEventListener('input', e => {
    const term = e.target.value.toLowerCase();
    const filtered = allTasks.filter(t =>
        t.title.toLowerCase().includes(term)
    );
    renderTasks(filtered);
});

// 9. TOAST
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-5 right-5 px-6 py-3 rounded-xl text-white 
        ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
    toast.innerText = message;

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
//THEME 
document.getElementById('themeToggle').addEventListener('click', () => {
    console.log("Cambiando tema..."); // Esto te confirmará en la consola (F12) si el botón responde
    document.documentElement.classList.toggle('dark');
});
// INIT
loadTasks();
