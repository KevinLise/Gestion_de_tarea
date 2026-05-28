
const views = [
  {
    name: "home",
    route: "#home",
    role: ["admin", "user"],
    icon: ""
  },
  {
    name: "users",
    route: "#users",
    role: ["user"],
    icon: ""
  },
  {
    name: "admin",
    route: "#admin",
    role: ["admin"],
    icon: ""
  }
]

function renderRoute() {
  const user = JSON.parse(localStorage.getItem("user"))

  const routes = views
    .filter(view => view.role.includes(user.role))
    .map(view => {
      return `
        <a href="${view.route}" class="text-white py-2 hover:text-yellow-400">
          ${view.name}
        </a>
      `
    })

  return routes
}

export default function layout() {
  const routes = renderRoute()
  return `
    <header class="flex flex-row bg-neutral-900 justify-between w-full px-2 py-3">
        <button class="bg-blue-200 px-5 py-1 rounded-full cursor-pointer">
          User
        </button>
        <button id="btnLogout" class="bg-cyan-300 px-5 py-1 rounded-full cursor-pointer">Logout</button>
      </header>
      <section class="grid grid-cols-8">
        <sidebar class="bg-neutral-900 min-h-screen col-span-1">
          <div class="flex flex-col ml-6">
            ${routes.map((item) => {
                return item
              }).join("")
                }
            </div>
        </sidebar>
        <main id="principal_content" class="bg-zinc-800 col-span-7 p-5">
        </main>
      </section>`
}
document.addEventListener("click", (e) => {
    if (e.target.id === "btnLogout") {
        localStorage.removeItem("user")
        window.location.hash = "login"
    }
})