document.addEventListener('DOMContentLoaded', function () {
    let btnDatos = document.getElementById("btnDatos")
    let btnPreg = document.getElementById("enviarPreg")

    btnDatos.addEventListener('click', function () {
        let nombre = document.getElementById("Nombre").value
        let edad = document.getElementById("Edad").value
        let domicilio = document.getElementById("Domicilio").value
        localStorage.setItem("nombreUsuario", nombre)
        localStorage.setItem("edadUsuario", edad)
        localStorage.setItem("domicilioUsuario", domicilio)
    })

    btnPreg.addEventListener("click",function(){
        let puntajeTotal = 0
        let rta1 = document.querySelectorAll('input[name="preg1"]:checked');
        let rta2 = document.querySelectorAll('input[name="preg2"]:checked');
        let rta3 = document.querySelectorAll('input[name="preg3"]:checked');
        let rta4 = document.querySelectorAll('input[name="preg4"]:checked');
        let rta5 = document.querySelectorAll('input[name="preg5"]:checked');
        puntajeTotal = calculoRta1(rta1) + calculoRta2(rta2) + calculoRta3(rta3) + calculoRta4(rta4) + calculoRta5(rta5);
        localStorage.setItem("puntajeUsuario", puntajeTotal)
        window.location.href="./resultado.html"
    })

        function calculoRta1(rta) {
            let puntaje1 = 0;
            for (let respuesta of rta) {
                switch (respuesta.value) {
                    case "cafe":
                        puntaje1 += 3
                        break
                    case "leche":
                    case "tostadas":
                    case "medialunas":
                        puntaje1 += 2
                        break
                    case "ajo":
                        puntaje1 += -1
                        break
                }
            }
            puntaje1 = (Math.round((puntaje1 * 0.3)*100)/100)
            localStorage.setItem("rta1",puntaje1)
            return puntaje1
        }

        function calculoRta2(rta) {
            let puntaje2 = 0
            for (let respuesta of rta) {
                if (respuesta.value === "pasas") {
                    puntaje2 = 10
                }
            }
            puntaje2 = (puntaje2 * 0.05)
            localStorage.setItem("rta2",puntaje2)
            return puntaje2
        }
        function calculoRta3(rta) {
            let puntaje3 = 0;
            for (let respuesta of rta) {
                if (respuesta.value === "coccion") {
                    puntaje3 = 10;
                }
            }
            puntaje3 = (puntaje3 * 0.1)
            localStorage.setItem("rta3",puntaje3)
            return puntaje3
        }
        function calculoRta4(rta) {
            let puntaje4 = 0
            for (let respuesta of rta) {
                switch (respuesta.value) {
                    case "180":
                        puntaje4 += 8
                        break
                    case "170":
                        puntaje4 += 2
                        break
                }
            }
            puntaje4 = (puntaje4 * 0.3)
            localStorage.setItem("rta4",puntaje4)
            return puntaje4
        }

        function calculoRta5(rta) {
            let puntaje5 = 0
            for (let respuesta of rta) {
                switch (respuesta.value) {
                    case "germinado":
                        puntaje5 += 2
                        break
                    case "acimo":
                        puntaje5 += 8
                        break
                }
            }
            puntaje5 = (puntaje5 * 0.25)
            localStorage.setItem("rta5",puntaje5)
            return puntaje5
        }
    })