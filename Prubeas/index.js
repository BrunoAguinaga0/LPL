document.addEventListener('DOMContentLoaded', function(){
    let sesion = document.getElementById("iniciarSesion")
    sesion.addEventListener('click', function(){
        let usuario = document.getElementById("nombre").value
        let apellido = document.getElementById("apellido").value
        if (usuario != "" && apellido != "" ){
            window.location.href="./inicio.html"
        }else{alert("Ingrese los datos.")
        }
    })
})