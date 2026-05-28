export async function todoController(){
    const user = JSON.parse(localStorage.getItem("user"))

    await getData(user)

    const btn = document.getElementById("btnAgregar")
    btn.addEventListener("click", async (e) => {
        e.preventDefault()
        await saveData(user)
    })
}

async function getData(user){
    const response = await fetch(`http://localhost:3000/todo_list`)
    const todasLasTareas = await response.json()
    
    const tareas = todasLasTareas.filter(tarea => tarea.id_user === user.id)

    const lista = document.getElementById("todo_list")

    lista.innerHTML = tareas.map(tarea => {
        return `
            <div class="bg-zinc-500 p-3 rounded-lg shadow">
                <h3 class="font-bold">${tarea.titulo}</h3>
                <p>${tarea.descripcion}</p>
                <p>Estado: ${tarea.status}</p>
            </div>
        `
    }).join("")
}

async function saveData(user){
    const titulo = document.getElementById("titulo").value
    const descripcion = document.getElementById("descripcion").value

    const response = await fetch("http://localhost:3000/todo_list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            titulo,
            descripcion,
            id_user: user.id,
            status: "pendiente"
        })
    })

    if(response.ok){
        await getData(user) // recarga la lista
        document.getElementById("titulo").value = ""
        document.getElementById("descripcion").value = ""
    }
}