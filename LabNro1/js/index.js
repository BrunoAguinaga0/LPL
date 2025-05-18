document.addEventListener('DOMContentLoaded', function () {
    let ingresar = document.getElementById("iniciarSesion")
    let titulo = document.getElementById("titulo")
    let cont = document.getElementById("cont")

    ingresar.addEventListener('click', function () {
        var fecha = new Date();
        fecha.setTime(fecha.getTime() + (7 * 24 * 60 * 60 * 1000));
        let expiracion = "expires=" + fecha.toUTCString();
        let fechaActual = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        let nombre = document.getElementById("nombre")
        let contrasenia = document.getElementById("contrasenia")
        let posCookie = document.cookie.search("contador")
        if (nombre.value != "" || contra.value != "") {
            if (posCookie == -1) {
                document.cookie = ("contador=1" + ";fecha=" + fechaActual + expiracion + ";path=/");
                titulo.innerHTML = "Es tu primera vez que visitas este sitio!"
                window.location.href = "../html/tareas.html"
            }
            else {
                let posIgual = document.cookie.indexOf("=", posCookie)
                var contador = parseInt(document.cookie.substring(posIgual + 1)) + 1;
                let posFecha = document.cookie.indexOf("=", fecha)
                console.log(document.cookie)
                var fecha = document.cookie.substring((posFecha + 5), (posFecha + 15))
                document.cookie = "contador=" + contador + "; fecha=" + fechaActual + ";" + expiracion + "; path=/";
                titulo.innerHTML = "Hola    " + nombre.value + " es tu visita numero " + contador + " ultimo ingreso el"
                window.location.href = "../html/tareas.html"
            }
        } else{alert("Ingrese su nombre y apellido")}

    })
})