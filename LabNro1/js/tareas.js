
document.addEventListener('DOMContentLoaded', function () {
    let ingreso = document.getElementById("btnAgregar")
    let finalizo = document.getElementById("finalizo")
    let limpiarTareas = document.getElementById("btnLimpiar")
    var contenedor = document.getElementById("espacioTareas")
    var contenedor2 = document.getElementById("espacioTareas2")
    
    ingreso.addEventListener('click', function () {
        let descripcion = document.getElementById("descripcion").value
        if (descripcion != "") {
        let parrafo = document.createElement("p")
        parrafo.innerHTML = descripcion
        let nuevoInput = document.createElement("input")
        nuevoInput.setAttribute("type", "checkbox")
        contenedor.appendChild(nuevoInput)
        contenedor.appendChild(parrafo)
        }else {
            alert("Ingrese una tarea.")
        }
    })

    finalizo.addEventListener('click', function () {
        var divs = document.querySelectorAll(".filaTarea")
        for(let div of divs){
            let checkboxes = div.querySelectorAll("input[type='checkbox']")
            for (let checkbox of checkboxes) {
                if (checkbox.checked) {
                    let parrafo = checkbox.nextElementSibling
                    div.removeChild(parrafo)
                    div.removeChild(checkbox)
                    contenedor2.appendChild(parrafo)
                    contenedor.removeChild(div)
                }
            }
        }
    })
    limpiarTareas.addEventListener('click', function () {
        var divs = document.querySelectorAll(".filaTarea")
        for(let div of divs){
            let checkboxes = div.querySelectorAll("input[type='checkbox']")
            for (let checkbox of checkboxes) {
                let parrafo = checkbox.nextElementSibling
                div.removeChild(parrafo)
                div.removeChild(checkbox)
                contenedor.removeChild(div)
            }
        }
        contenedor2.innerHTML = ""

    })
})
