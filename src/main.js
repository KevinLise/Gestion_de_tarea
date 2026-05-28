import './style.css'
import notFoundView from './views/notFoundView.js'
import homeView from './views/homeView.js'
import loginView from './views/loginView.js'
import userView from './views/userView.js'
import adminView from './views/adminView.js'
import { loginController } from './controllers/login.controller.js'
import { homeController as luisita } from './controllers/home.controller.js'
import layout from './components/layout.js'
import { todoController } from './controllers/todo.controller.js'
import { adminController } from './controllers/admin.controller.js'

const appContainer = document.getElementById("app")

const router = {
  home: {
    view: homeView,
    controller: luisita
  },

  login: {
    view: loginView,
    controller: loginController
  },

  users: {
    view: userView,
    controller: todoController
  },

  admin: {
    view: adminView,
    controller: adminController
  }
}

async function renderRoute() {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  const path = window.location.hash.replace("#", "") || ""

  const route = router[path?path:"home"]

  if (!route) {
    appContainer.innerHTML = notFoundView()
    return
  }

  // LOGIN sin layout
  if (path === "login") {
    appContainer.innerHTML = route.view()

    if (route.controller) {
      await route.controller()
    }

    return
  }

  
  if(!user && path !== "login"){

    appContainer.innerHTML = router.login.view()
    await router.login.controller()

    return
  }

  // resto con layout
  appContainer.innerHTML = layout()

  document.getElementById("principal_content").innerHTML =
    route.view()

  if (route.controller) {
    await route.controller()
  }
}

document.addEventListener("DOMContentLoaded", renderRoute)

window.addEventListener("hashchange", renderRoute)
