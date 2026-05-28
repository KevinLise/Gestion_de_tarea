export default function loginView() {
    return `<div id="login_container" class="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
        <div class="h-full bg-white place-items-center">
          <image src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCfRTs4dobPwBzM4ChOfDClmQoIuQ9rNrww&s" width="100px" height="100px" class="m-25"></image>
          <form id="loginForm" class="bg-stone-200 flex flex-col p-5 rounded-xl shadow shadow-gray-500 w-72 md:w-100 gap-3">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" class="bg-white rounded-lg p-2" placeholder="jhon.doe">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="bg-white rounded-lg p-2" placeholder="*********">
            
            <button id="btnLogin" class="bg-blue-400 hover:bg-blue-500 hover:font-bold cursor-pointer py-2 rounded-xl">Login</button>
          </form>
        </div>
        <div class="col-span-1 hidden md:block h-full bg-[url('/login.jpg')] bg-cover bg-center"></div>
      </div>`}