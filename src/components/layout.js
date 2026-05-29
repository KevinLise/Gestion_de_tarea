
const views = [
  { name: "home", route: "#home", role: ["admin", "user"] },
  { name: "users", route: "#users", role: ["user"] },
  { name: "admin", route: "#admin", role: ["admin"] }
]

function renderRoute() {
  const user = JSON.parse(localStorage.getItem("user"))
  return views
    .filter(view => view.role.includes(user.role))
    .map(view => `
      <a href="${view.route}" class="text-white py-2 hover:text-yellow-400 transition-colors">
        ${view.name}
      </a>
    `)
}

export default function layout() {
  const routes = renderRoute()
  return `
    <header class="flex flex-row bg-neutral-900 justify-between items-center w-full px-4 py-3">
      <button id="btnMenu" class="text-white text-2xl md:hidden cursor-pointer">☰</button>
      <button class="bg-[rgb(255,208,0)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,210,0,0.45)] hover:bg-[#ffe033] border-yellow-500 border-2 px-5 py-1 rounded-full cursor-pointer">
        ${JSON.parse(localStorage.getItem("user")).username}
      </button>
      <button id="btnLogout" class="bg-[rgb(255,208,0)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,210,0,0.45)] hover:bg-[#ffe033] border-yellow-500 border-2 px-5 py-1 rounded-full cursor-pointer">
        Logout
      </button>
    </header>
    <section class="relative flex">
      <aside id="sidebar" class="bg-neutral-900 min-h-screen w-48 shrink-0 transition-all duration-300 hidden md:flex flex-col pt-4 gap-1 absolute md:relative z-20 top-0 left-0 ">
        <div class="flex flex-col ml-6 gap-3">
          ${routes.map(item => item).join("")}
        </div>
      </aside>
      <main id="principal_content" class="flex flex-col bg-zinc-800 flex-1 p-5 min-h-screen">
      </main>
    </section>
  `
}

document.addEventListener("click", (e) => {
  if (e.target.id === "btnLogout") {
    localStorage.removeItem("user")
    window.location.hash = "login"
  }

  if (e.target.id === "btnMenu") {
    const sidebar = document.getElementById("sidebar")
    sidebar.classList.toggle("hidden")
  }
})