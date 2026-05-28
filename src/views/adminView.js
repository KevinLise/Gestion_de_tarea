export default function adminView() {
    return `
    <div class="p-5">
        <h1 class="text-2xl font-bold text-center text-yellow-500">Panel Admin - Todas las tareas</h1>

        <!-- Filtros -->
        <div class="flex flex-wrap gap-3 mt-4">
            <select id="filtroStatus" class="bg-zinc-600 text-white border border-gray-500 rounded-lg p-2">
                <option value="">Todos los estados</option>
                <option value="pendiente">Pendiente</option>
                <option value="process">En proceso</option>
                <option value="completed">Completada</option>
            </select>
            <input type="text" id="filtroSearch" placeholder="Buscar tarea..." class="bg-zinc-600 text-white placeholder:text-gray-500 border border-gray-500 rounded-lg p-2">
            <input type="text" id="filtroUser" placeholder="ID de usuario..." class="bg-zinc-600 text-white placeholder:text-gray-500 border border-gray-500 rounded-lg p-2 w-36">
            <button id="btnFiltrar" class="bg-[rgb(255,208,0)] cursor-pointer py-2 px-4 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,210,0,0.45)] hover:bg-[#ffe033] border-yellow-500 border-2">Filtrar</button>
        </div>

        <!-- Lista de tareas -->
        <div id="admin_todo_list" class="flex flex-col gap-3 mt-5">
        </div>
    </div>
    `
}
