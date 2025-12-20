const API_URL = '/api/contacts';
let allContacts = [];

// Selectores
const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');
const searchInput = document.getElementById('searchInput');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const contactIdInput = document.getElementById('contactId');

// 1. CARGAR DATOS
async function loadContacts() {
    try {
        const res = await fetch(API_URL);
        allContacts = await res.json();
        renderContacts(allContacts);
    } catch (err) {
        showToast("Error al conectar con el servidor", "error");
    }
}

// 2. RENDERIZAR LISTA
function renderContacts(contacts) {
    contactList.innerHTML = '';
    
    if (contacts.length === 0) {
        contactList.innerHTML = `
            <div class="col-span-full text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                <i data-lucide="user-plus" class="mx-auto mb-4 w-12 h-12 text-slate-300"></i>
                <p class="text-slate-500 font-medium">No hay contactos que coincidan.</p>
            </div>`;
        lucide.createIcons();
        return;
    }

    contacts.forEach(c => {
        const card = document.createElement('div');
        card.className = "group bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-between items-center hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/5";
        card.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg uppercase">
                    ${c.name[0]}
                </div>
                <div>
                    <h3 class="font-bold group-hover:text-blue-500 transition-colors capitalize">${c.name}</h3>
                    <p class="text-xs text-slate-500 font-mono tracking-tighter">${c.phone}</p>
                </div>
            </div>
            <div class="flex gap-1">
                <button onclick="viewContact('${c._id}')" class="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-500 rounded-lg" title="Ver"><i data-lucide="eye" class="w-5 h-5"></i></button>
                <button onclick="editContact('${c._id}')" class="p-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-amber-500 rounded-lg" title="Editar"><i data-lucide="pencil" class="w-5 h-5"></i></button>
                <button onclick="deleteContact('${c._id}')" class="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 rounded-lg" title="Eliminar"><i data-lucide="trash-2" class="w-5 h-5"></i></button>
            </div>`;
        contactList.appendChild(card);
    });
    lucide.createIcons();
}

// 3. GUARDAR / ACTUALIZAR (Con validación de números)
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = contactIdInput.value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // VALIDACIÓN: Solo números en el teléfono
    if (!/^\d+$/.test(phone)) {
        showToast("El teléfono solo permite números", "error");
        return; 
    }

    const contactData = { name, phone, email };
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    try {
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData)
        });

        if (response.ok) {
            showToast(id ? "Contacto actualizado" : "Contacto guardado", "success");
            resetForm();
            loadContacts();
        } else {
            const errorData = await response.json();
            showToast(errorData.message || "Error al procesar", "error");
        }
    } catch (err) {
        showToast("Error de conexión", "error");
    }
});

// 4. MODO EDICIÓN
function editContact(id) {
    const c = allContacts.find(i => i._id === id);
    
    formTitle.innerText = `Modificando a: ${c.name}`;
    formTitle.classList.replace('text-blue-600', 'text-amber-500');
    formTitle.classList.replace('dark:text-blue-400', 'dark:text-amber-400');
    
    contactIdInput.value = c._id;
    document.getElementById('name').value = c.name;
    document.getElementById('phone').value = c.phone;
    document.getElementById('email').value = c.email || '';
    
    submitBtn.classList.replace('bg-blue-600', 'bg-amber-600');
    submitBtn.classList.replace('hover:bg-blue-700', 'hover:bg-amber-700');
    submitBtn.innerHTML = `<i data-lucide="refresh-cw"></i> Actualizar Cambios`;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    lucide.createIcons();
}

// 5. RESETEAR FORMULARIO (Vuelve a modo "Agregar")
function resetForm() {
    contactForm.reset();
    contactIdInput.value = '';
    formTitle.innerText = "Agregar Nuevo Contacto";
    formTitle.classList.remove('text-amber-500', 'dark:text-amber-400');
    formTitle.classList.add('text-blue-600', 'dark:text-blue-400');
    
    submitBtn.classList.remove('bg-amber-600', 'hover:bg-amber-700');
    submitBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
    submitBtn.innerHTML = `<i data-lucide="save"></i> Guardar Contacto`;
    lucide.createIcons();
}

// 6. BORRAR
async function deleteContact(id) {
    if (confirm('¿Estás seguro de eliminar este contacto?')) {
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (res.ok) {
                showToast("Contacto eliminado", "success");
                loadContacts();
            }
        } catch (err) {
            showToast("No se pudo eliminar", "error");
        }
    }
}

// 7. BUSCADOR DINÁMICO
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allContacts.filter(c => 
        c.name.toLowerCase().includes(term) || 
        c.phone.includes(term)
    );
    renderContacts(filtered);
});

// 8. VER MODAL
function viewContact(id) {
    const c = allContacts.find(i => i._id === id);
    document.getElementById('modalContent').innerHTML = `
        <div class="w-24 h-24 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[2rem] mx-auto mb-6 flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-blue-500/20 uppercase">
            ${c.name[0]}
        </div>
        <h2 class="text-3xl font-black mb-2 capitalize">${c.name}</h2>
        <p class="text-blue-500 font-medium mb-8">${c.email || 'Sin correo electrónico'}</p>
        
        <div class="space-y-3">
            <div class="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl flex items-center gap-4 text-left border border-slate-100 dark:border-slate-700">
                <div class="bg-blue-500/10 p-2 rounded-lg text-blue-500"><i data-lucide="phone" class="w-5 h-5"></i></div>
                <div>
                    <p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Teléfono Móvil</p>
                    <p class="font-bold text-lg">${c.phone}</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('contactModal').classList.remove('hidden');
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('contactModal').classList.add('hidden');
}

// 9. NOTIFICACIONES (TOASTS)
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const color = type === 'success' ? 'bg-blue-600' : 'bg-red-600';
    const icon = type === 'success' ? 'check-circle' : 'octagon-alert';

    toast.className = `${color} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-toast min-w-[250px]`;
    toast.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i> <span class="font-bold">${message}</span>`;
    
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// 10. CAMBIO DE TEMA (DARK/LIGHT)
document.getElementById('themeToggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// Inicializar la aplicación
loadContacts();