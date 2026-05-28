export default function userView(){
    return `
    <div class= "p-5">
        <h1 class="text-2xl font-bold text-center text-yellow-500"> Mis tareas </h1>
        <form id="todoForm" class="flex flex-col gap-3 mt-4">
            <input type="text" id="titulo" placeholder="Título de la tarea" class="bg-zinc-400 rounded-lg p-2">
            <textarea id="descripcion" placeholder="Descripción" class="bg-zinc-400 rounded-lg p-2 resize-none"></textarea>
            <button type="button" id="btnAgregar" class="bg-[rgb(255,208,0)] w-100 cursor-pointer py-2 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,210,0,0.45)] hover:bg-[#ffe033] border-yellow-500 border-2">Agregar tarea</button>
        </form>
        <div id="todo_list" class=" flex flex-col gap-3 w-80 mt-5">
        </div>
    </div>
    `
}