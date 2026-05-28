export default function loginView() {
    return `<div id="login_container" class="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
        <div class="h-full bg-neutral-900 place-items-center">
          <image src= "/login-logo.png" width="200px" height="200px" class="m-20"></image>
          <form id="loginForm" class="bg-zinc-800 flex flex-col p-5 rounded-xl shadow shadow-gray-500 w-72 md:w-100 gap-3">
            <label for="username" class="text-white">Username</label>
            <input type="text" name="username" id="username" class="bg-zinc-800 text-white placeholder:text-gray-500 border border-gray-600 rounded-lg p-2" placeholder="jhon.doe">
            <label for="password" class="text-white">Password</label>
            <input type="password" name="password" id="password" class="bg-zinc-800 text-white placeholder:text-gray-500 border border-gray-600 rounded-lg p-2" placeholder="*********">
            
            <button id="btnLogin" class="bg-[rgb(255,208,0)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,210,0,0.45)] hover:bg-[#ffe033] border-yellow-500 border-2 hover:font-bold cursor-pointer py-2 rounded-xl">Login</button>
          </form>
        </div>
        <div class="col-span-1 hidden md:block h-full bg-[url('/login.jpg')] bg-cover bg-center"></div>
      </div>`}