document.addEventListener('DOMContentLoaded',function(){
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 días, quiero mas dias, cambio el 7 por la cantidad de dias deseados
    let expiracion = "expires=" + fecha.toUTCString();
    let titulo = document.getElementById("titulo")
    let cont = document.getElementById("cont")
    let posCookie = document.cookie.search("contador")
    if (posCookie == -1){
        document.cookie = "contador=1;"+ expiracion +"; path=/";
        titulo.innerHTML = "Es tu primera vez que visitas este sitio!"
    }
    else{
        let posIgual = document.cookie.indexOf("=",posCookie)
        var contador = parseInt(document.cookie.substring(posIgual+1))+1;
        document.cookie = "contador=" + contador + ";   "+ expiracion +"; path=/";
        titulo.innerHTML = "Ya has visitado este sitio!"
        cont.innerHTML = "Esta es tu visita nro: " + contador
    }
})