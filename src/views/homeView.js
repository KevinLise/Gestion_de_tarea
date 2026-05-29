export default function homeView(){
    return `<h1 class="text-5xl text-[rgb(255,208,0)] font-bold text-center">Hola <span id="name"></span> </h1>
    <bh class="text-center text-gray-400 mt-2">Bienvenido a tu gestor de tareas</bh>
    <hr class="my-5 border-gray-600">
    <div class="flex flex-col gap-3 items-center w-full h-full">
        <image src="/home.jpg" class="hidden md:block w-full"></image>
        <img src="/mobile-home.jpg" class="block md:hidden w-full">
    </div>`}