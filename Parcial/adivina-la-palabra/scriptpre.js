document.addEventListener('DOMContentLoaded', () => {
    let bienvenido = document.getElementById("bienvenido-usuario")
    let acceso = document.getElementById("acceso")
    let ganadas = document.getElementById("ganadas")
    let jugar = document.getElementById("btnJugar")

    bienvenido.innerHTML = localStorage.getItem("nombre-usuario")
    acceso.innerHTML = localStorage.getItem("acceso")
    ganadas.innerHTML = localStorage.getItem("partidas-ganadas")
    jugar.addEventListener('click', function () {
        window.location.href = "./juego.html"
    })
    // contenedor.innerHTML = "<p>Ya ganaste" + localStorage.getItem("partidas-ganadas") + "partidas.</p>"
})