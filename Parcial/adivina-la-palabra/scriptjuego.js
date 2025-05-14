const palabras7 = [
    "caballo",
    "piedras",
    "aviones",
    "mercado",
    "temblor",
    "esfuerzo",
    "pantano",
    "alquile",
    "bosques",
    "glorias"
];

const palabras8 = [
    "mariposa",
    "violento",
    "escalera",
    "hospital",
    "albergue",
    "esperado",
    "nublado",
    "festejar",
    "computar",
    "vigilado"
];

const palabras10 = [
    "bicicletas",
    "aventurero",
    "universidad",
    "conspirado",
    "presupuesto",
    "explorador",
    "revolucion",
    "pensamientos",
    "disciplinar",
    "fotografia"
];

function consisto_input(letra) {
    if (!isNaN(letra)) {
        return false
    } else {
        return true
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let bienvenidouser = document.getElementById("a-jugar-usuario")
    let spanpalabra = document.getElementById("palabra-misteriosa")
    let seleccion = document.getElementById("opciones-palabras")
    let jugar = document.getElementById("btnJugar")
    let abandonar = document.getElementById("btnAbandonar")
    let letra = document.getElementById("letra")
    let guiones = ""
    let pistas = document.getElementById("letras-pistas")
    let contPistas = 0
    let adivinadas = document.getElementById("letras-adivinadas")
    let contAdivinadas = 0
    let posicionesLetra = []
    let posicionGuion = []
    let seleccionado = false
    let ganadas = parseInt(localStorage.getItem("partidas-ganadas"))

    seleccion.addEventListener('change', function () {
        if (seleccion.value == 7) {
            let palabraAleatoria = palabras7[Math.floor(Math.random() * palabras7.length)];
            localStorage.setItem("palabra-aleatoria", palabraAleatoria)
            guiones = "_______"
            spanpalabra.innerHTML = guiones
            seleccionado = true
        } else if (seleccion.value == 8) {
            let palabraAleatoria = palabras8[Math.floor(Math.random() * palabras8.length)];
            localStorage.setItem("palabra-aleatoria", palabraAleatoria)
            guiones = "________"
            spanpalabra.innerHTML = guiones
            seleccionado = true
        } else if (seleccion.value == 10) {
            let palabraAleatoria = palabras10[Math.floor(Math.random() * palabras10.length)];
            localStorage.setItem("palabra-aleatoria", palabraAleatoria)
            guiones = "__________"
            spanpalabra.innerHTML = guiones
            seleccionado = true
        } else {
            seleccion.focus()
            seleccionado = false
        }
        letra.focus()
        bienvenidouser.innerHTML = localStorage.getItem("nombre-usuario")
    })

    function comparo() {
        if (guiones === localStorage.getItem("palabra-aleatoria")) {
            return true
        } else {
            return false
        }
    }

    jugar.addEventListener('click', function () {
        if (seleccionado && consisto_input(letra.value)) {
            if (!guiones.includes(letra.value)) {
                letra.focus()
                if (localStorage.getItem("palabra-aleatoria").includes(letra.value)) {
                    for (let i = 0; i < localStorage.getItem("palabra-aleatoria").length; i++) {
                        if (localStorage.getItem("palabra-aleatoria")[i].toLowerCase() === letra.value.toLowerCase()) {
                            posicionesLetra.push(i)
                        }
                    }
                    for (let pos of posicionesLetra) {
                        guiones = guiones.substring(0, pos) + letra.value + guiones.substring(pos + 1)
                    }
                    contAdivinadas += 1
                    adivinadas.innerHTML = contAdivinadas
                    spanpalabra.innerHTML = guiones
                    posicionesLetra = []
                    letra.value = ""
                } else {
                    let posPista
                    for (let i = 0; i < guiones.length; i++) {
                        if (guiones[i] === "_") {
                            posicionGuion.push(i)
                        }
                    }
                    posPista = posicionGuion[Math.floor(Math.random() * posicionGuion.length)]
                    guiones = guiones.substring(0, posPista) + localStorage.getItem("palabra-aleatoria")[posPista] + guiones.substring(posPista + 1)
                    contPistas += 1
                    pistas.innerHTML = contPistas
                    spanpalabra.innerHTML = guiones
                    posicionGuion = []
                    letra.value = ""
                }
                if (comparo()) {
                    if (contAdivinadas >= contPistas) {
                        localStorage.setItem("partidas-ganadas", ganadas += 1)
                        localStorage.setItem("puntaje", contAdivinadas)
                        localStorage.setItem("pistas", contPistas)
                        window.location.href = "./resultado.html"
                    } else {
                        localStorage.setItem("puntaje", contAdivinadas)
                        localStorage.setItem("pistas", contPistas)
                        window.location.href = "./resultado.html"
                    }
                }
            }
        } else {
            letra.focus()
            letra.value = ""
            alert("NO SELECCIONO LA LONGITUD O INGRESO UN CARACTER NO ALFABETICO")
        }
    })

    abandonar.addEventListener('click', function () {
        window.location.href = "./prejuego.html"
    })
})