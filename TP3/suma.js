
function sumatoria()
{
    var a,b,mensaje,resultado;
    var contador;
    var mensaje2,mensaje3
    contador = 0
    a = prompt("Ingrese el primer numero.");
    b = prompt("Ingrese el segundo numero.");
    resultado = parseInt(a) + parseInt(b);
    mensaje = ("La suma entre " + a + " y " + b +" es: " + resultado);
    alert(mensaje);
    if (parseInt(a) > parseInt(b))
    {resultado = parseInt(a) ** parseInt(b);
    mensaje2 = (a + " elevado a " + b + " es: " + resultado);}
    else
    aux = parseInt(b)
    {while(parseInt(a) <= parseInt(aux))
    {contador += 1;
        aux = parseInt(aux) - parseInt(a);
    }
    mensaje3 = (b+" divido "+a+" es: "+contador + " y el resto es: " + aux)
    return mensaje3
    }
}

document.addEventListener("DOMContentLoaded",function (){
    let contenedor = document.getElementById("respuesta")
    let respuesta1 = document.createElement("p")
    respuesta1.setAttribute("id","respuesta2")
    respuesta1.innerHTML=sumatoria()
    contenedor.appendChild(respuesta1)
})