document.addEventListener('DOMContentLoaded', () => {
    let inpUsr = document.getElementById("inp-usr")
    let btnIngresar = document.getElementById("btnIngresar")
    let ganadas = 0
    
    // Función para formatear la fecha como DD/MM/YYYY
    function obtenerFechaFormateada() {
        let fecha = new Date()
        let dia = String(fecha.getDate()).padStart(2, '0')
        let mes = String(fecha.getMonth() + 1).padStart(2, '0') // +1 porque getMonth() devuelve 0-11
        let anio = fecha.getFullYear()
        return dia + '/' + mes + '/' + anio
    }
    
    let fechaAcceso = obtenerFechaFormateada()

    window.onload = () => {
        if (localStorage.getItem("nombre-usuario")) {
            window.location.href = "./prejuego.html"
        }
    }

    btnIngresar.addEventListener('click', function () {
        if (inpUsr.value == "") { 
            alert("Ingresa loco")
        } else {
            localStorage.setItem("nombre-usuario", inpUsr.value)
            localStorage.setItem("acceso", fechaAcceso)
            localStorage.setItem("partidas-ganadas", ganadas)
            window.location.href = "./prejuego.html"
        }
    })
})