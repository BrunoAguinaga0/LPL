document.addEventListener('DOMContentLoaded', function(){
    let nombre = document.getElementById("Nombre")
    let preg1 = document.getElementById("pregunta1")
    let preg2 = document.getElementById("pregunta2")
    let preg3 = document.getElementById("pregunta3")
    let preg4 = document.getElementById("pregunta4")
    let preg5 = document.getElementById("pregunta5")
    let puntajeTotal = document.getElementById("puntaje")
    let cargo = document.getElementById("cargo")
    preg1.innerHTML = localStorage.getItem("rta1") + " puntos"
    preg2.innerHTML = localStorage.getItem("rta2") + " puntos"
    preg3.innerHTML = localStorage.getItem("rta3") + " puntos"
    preg4.innerHTML = localStorage.getItem("rta4") + " puntos"
    preg5.innerHTML = localStorage.getItem("rta5") + " puntos"
    puntajeTotal.innerHTML = localStorage.getItem("puntajeUsuario")
    cargo.innerHTML = puesto()
    nombre.innerHTML = localStorage.getItem("nombreUsuario")
    

    function puesto(){
        if (localStorage.getItem("puntajeUsuario") >= 8){
            return "Tu Puntaje te habilita para: Cocinero"
        }else{
            if (localStorage.getItem("puntajeUsuario") > 6){
                return "Tu Puntaje te habilita para: Ayudante de cocina"
            }
            else{
                return "No califica para ningun puesto."
            }
        }
    }
})