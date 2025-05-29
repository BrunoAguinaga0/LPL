// Ordena el array alfabéticamente o por número si se le pasa una función
let nums = [5, 2, 9];
nums.sort(); // [2, 5, 9]

// Invierte el orden del array
nums.reverse(); // [9, 5, 2]

// Agrega un elemento al final del array
nums.push(10); // [9, 5, 2, 10]

// Elimina el último elemento
nums.pop(); // [9, 5, 2]

// Devuelve una nueva copia parcial del array
let sub = nums.slice(0, 2); // [9, 5]

// Transforma cada elemento del array
let dobles = nums.map(n => n * 2); // [18, 10, 4]

// Filtra elementos según condición
let mayoresA5 = nums.filter(n => n > 5); // [9]

// Devuelve el primer elemento que cumple la condición
let primeroMayorA5 = nums.find(n => n > 5); // 9

// Devuelve true si algún elemento cumple la condición
nums.some(n => n === 2); // true

// Devuelve true si todos los elementos cumplen la condición
nums.every(n => n > 0); // true

// Reduce a un solo valor
let suma = nums.reduce((a, b) => a + b, 0); // 16

// Verifica si incluye un elemento
nums.includes(5); // true

// Une los elementos como un string
nums.join('-'); // "9-5-2"

// Elimina duplicados
let unicos = [...new Set([1, 2, 2, 3])]; // [1, 2, 3]



//STRINGS


let texto = "  Hola Mundo  ";

// Elimina espacios al inicio y final
texto.trim(); // "Hola Mundo"

// Convierte a mayúsculas
texto.toUpperCase(); // "  HOLA MUNDO  "

// Convierte a minúsculas
texto.toLowerCase(); // "  hola mundo  "

// Divide el string en partes
texto.split(" "); // ["", "", "Hola", "Mundo", "", ""]

// Reemplaza un texto
texto.replace("Hola", "Adiós"); // "  Adiós Mundo



// MATH



Math.round(4.6); // 5 – redondea al entero más cercano
Math.floor(4.9); // 4 – redondea hacia abajo
Math.ceil(4.1);  // 5 – redondea hacia arriba

// Valor absoluto
Math.abs(-10); // 10

// Aleatorio entre 0 y 1
Math.random(); // Ejemplo: 0.3827...

// Aleatorio entre dos valores (ejemplo entre 5 y 10)
function randomEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mínimo y máximo
Math.min(3, 1, 5); // 1
Math.max(3, 1, 5); // 5

// Potencias y raíces
Math.pow(2, 3); // 8
Math.sqrt(16); // 4


// FECHAS

const ahora = new Date();

// Fecha como string ISO (útil para guardar en BD)
ahora.toISOString(); // "2025-05-17T17:10:00.000Z"

// Obtener año, mes, día, etc.
ahora.getFullYear();  // 2025
ahora.getMonth();     // 4 (¡Enero es 0!)
ahora.getDate();      // 17

// Sumar días a una fecha
function sumarDias(fecha, dias) {
    const resultado = new Date(fecha);
    resultado.setDate(resultado.getDate() + dias);
    return resultado;
}

// Comparar fechas
const mañana = sumarDias(ahora, 1);
mañana > ahora; // true




// Ver si una variable es un número
Number.isFinite(42); // true
Number.isNaN(NaN);   // true

// Convertir string a número
parseInt("42");   // 42
parseFloat("3.14"); // 3.14

// Esperar (async/await compatible)
function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}



const ahora2 = new Date();

// Fecha como string ISO (útil para guardar en BD)
ahora.toISOString(); // "2025-05-17T17:10:00.000Z"

// Obtener año, mes, día, etc.
ahora.getFullYear();  // 2025
ahora.getMonth();     // 4 (¡Enero es 0!)
ahora.getDate();      // 17

// Sumar días a una fecha
function sumarDias(fecha, dias) {
    const resultado = new Date(fecha);
    resultado.setDate(resultado.getDate() + dias);
    return resultado;
}

// Comparar fechas
const maniana = sumarDias(ahora, 1);


// Obtener un elemento por ID
const elem = document.getElementById("miElemento");

// Obtener el texto de un nodo
elem.textContent; // "Hola"

// Cambiar texto del nodo
elem.textContent = "Nuevo texto";

// Cambiar estilo
elem.style.color = "red";


// Obtener elemento padre
elem.parentElement;


// Obtener siguiente elemento hermano (no nodos de texto)
elem.nextElementSibling;


// Obtener anterior elemento hermano (no nodos de texto)
elem.previousElementSibling;


ejemplo:
// <div id="primero">Uno</div>
// <div id="segundo">Dos</div>
// <div id="tercero">Tres</div>

const tercero = document.getElementById("tercero");
const anterior = tercero.previousElementSibling;

console.log(anterior.id); // "segundo"


// Agregar un evento
elem.addEventListener("click", () => alert("¡Click!"));


// Obtener todos los elementos con clase
document.getElementsByClassName("mi-clase");

// Obtener todos los elementos con etiqueta
document.getElementsByTagName("div");

// Selección avanzada
document.querySelector(".mi-clase"); // primer match
document.querySelectorAll("div"); // todos los divs

// Crear un nuevo nodo
let nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Hola!";
document.body.appendChild(nuevoDiv); // lo agrega al body

// Remover un nodo
nuevoDiv.remove();

// Clonar un nodo
let copia = nuevoDiv.cloneNode(true);

// Obtener el valor de un atributo
elem.getAttribute("id"); // "miElemento"

// Cambiar o agregar un atributo
elem.setAttribute("title", "Tooltip");

// Ver clases CSS
elem.classList.add("resaltado");
elem.classList.remove("resaltado");
elem.classList.toggle("activo");