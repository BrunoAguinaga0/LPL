document.addEventListener('DOMContentLoaded', () => {
    let tiempo = document.getElementById("TiempoActual")
    let btnComenzar = document.getElementById("btnComenzar")
    let dateTime = new Date()
    tiempo.innerHTML = dateTime.getDate() + "/" + dateTime.getMonth() + "/" + dateTime.getFullYear() + " - " + dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getMinutes()
    btnComenzar.addEventListener('click', function(){
        window.location.href="./test.html"
    })
})