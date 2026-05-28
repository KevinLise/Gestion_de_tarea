export function homeController(){
    const user = JSON.parse(localStorage.getItem("user"))

    const userInfo = document.getElementById("name")
    userInfo.innerText = user.full_name

    const logoutButton = document.getElementById("btnLogout")
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("user")
        window.location.hash = "login"
})
}



