document.addEventListener('DOMContentLoaded', function () {
    let resultadoAdivinadas = document.getElementById("resultado-letras-adivinadas")    
    let resuladoPistas = document.getElementById("resultado-letras-pistas")
    let resultadoJuego = document.getElementById("resultado-juego")
    let puntaje = document.getElementById("puntaje")
    let nuevojuego = document.getElementById("btnNuevoJuego")

    if (localStorage.getItem("puntaje") >= localStorage.getItem("pistas")) {
        resultadoJuego.innerHTML = localStorage.getItem("nombre-usuario") + " Ganaste la partida!"
        resultadoAdivinadas.innerHTML = localStorage.getItem("puntaje")
        resuladoPistas.innerHTML = localStorage.getItem("pistas")
        puntaje.innerHTML = localStorage.getItem("puntaje")
    } else {
        resultadoJuego.innerHTML = localStorage.getItem("nombre-usuario") + " Perdiste la partida!"
        resultadoAdivinadas.innerHTML = localStorage.getItem("puntaje")
        resuladoPistas.innerHTML = localStorage.getItem("pistas")
        puntaje.innerHTML = localStorage.getItem("puntaje")
    }

    nuevojuego.addEventListener("click", function () {
        window.location.href = "./juego.html"
    })
})