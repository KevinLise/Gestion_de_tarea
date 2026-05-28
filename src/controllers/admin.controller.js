export async function adminController() {
    await getData()

    document.getElementById("btnFiltrar").addEventListener("click", async () => {
        await getData()
    })
}

async function getData() {
    const status = document.getElementById("filtroStatus").value
    const search = document.getElementById("filtroSearch").value
    const user = document.getElementById("filtroUser").value

    // Construir query params
    let query = ""
    if (status) query += `status=${status}&`
    if (search) query += `search=${search}&`
    if (user)   query += `user=${user}&`

    const url = `http://localhost:3000/todo_list${query ? "?" + query : ""}`

    const response = await fetch(url)
    let tareas = await response.json()

    // Filtro local por search y user (json-server no filtra search/user por defecto)
    if (search) {
        tareas = tareas.filter(t =>
            t.titulo.toLowerCase().includes(search.toLowerCase()) ||
            t.descripcion.toLowerCase().includes(search.toLowerCase())
        )
    }
    if (user) {
        tareas = tareas.filter(t => String(t.id_user) === String(user))
    }

    renderTareas(tareas)
}

function renderTareas(tareas) {
    const lista = document.getElementById("admin_todo_list")

    if (tareas.length === 0) {
        lista.innerHTML = `<p class="text-gray-400 text-center mt-5">No hay tareas.</p>`
        return
    }

    lista.innerHTML = tareas.map(tarea => {
        return `
            <div class="bg-white p-3 rounded-lg shadow flex flex-col gap-2">
                <div class="flex justify-between items-center">
                    <h3 class="font-bold">${tarea.titulo}</h3>
                    <span class="text-xs text-gray-500">Usuario: ${tarea.id_user}</span>
                </div>
                <p>${tarea.descripcion}</p>
                <div class="flex gap-2 items-center flex-wrap">
                    <select id="status-${tarea.id}" class="bg-gray-200 rounded p-1 text-sm">
                        <option value="pendiente"   ${tarea.status === "pendiente"  ? "selected" : ""}>Pendiente</option>
                        <option value="process"     ${tarea.status === "process"    ? "selected" : ""}>En proceso</option>
                        <option value="completed"   ${tarea.status === "completed"  ? "selected" : ""}>Completada</option>
                    </select>
                    <button onclick="cambiarStatus('${tarea.id}')" class="bg-blue-400 text-white px-3 py-1 rounded text-sm cursor-pointer hover:-translate-y-0.5">
                        Cambiar estado
                    </button>
                    <button onclick="editarTarea('${tarea.id}')" class="bg-yellow-400 px-3 py-1 rounded text-sm cursor-pointer hover:-translate-y-0.5">
                        Editar
                    </button>
                    <button onclick="eliminarTarea('${tarea.id}')" class="bg-red-400 text-white px-3 py-1 rounded text-sm cursor-pointer hover:-translate-y-0.5">
                        Eliminar
                    </button>
                </div>
                <!-- Formulario de edición (oculto por defecto) -->
                <div id="edit-${tarea.id}" class="hidden flex flex-col gap-2 mt-2">
                    <input id="edit-titulo-${tarea.id}" type="text" value="${tarea.titulo}" class="bg-gray-200 rounded p-2">
                    <textarea id="edit-desc-${tarea.id}" class="bg-gray-200 rounded p-2 resize-none">${tarea.descripcion}</textarea>
                    <button onclick="guardarEdicion('${tarea.id}')" class="bg-green-400 px-3 py-1 rounded text-sm cursor-pointer">Guardar</button>
                </div>
            </div>
        `
    }).join("")
}

// Funciones globales para los onclick del HTML
window.cambiarStatus = async function(id) {
    const nuevoStatus = document.getElementById(`status-${id}`).value

    await fetch(`http://localhost:3000/todo_list/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nuevoStatus })
    })

    await getData()
}

window.eliminarTarea = async function(id) {
    await fetch(`http://localhost:3000/todo_list/${id}`, {
        method: "DELETE"
    })

    await getData()
}

window.editarTarea = function(id) {
    const form = document.getElementById(`edit-${id}`)
    form.classList.toggle("hidden")
}

window.guardarEdicion = async function(id) {
    const titulo = document.getElementById(`edit-titulo-${id}`).value
    const descripcion = document.getElementById(`edit-desc-${id}`).value

    await fetch(`http://localhost:3000/todo_list/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descripcion })
    })

    await getData()
}
