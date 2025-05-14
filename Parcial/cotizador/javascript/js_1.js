
function muestro_div_limpieza () {
	document.getElementById("div_limpieza_acuario").hidden = false
	document.getElementById("div_domicilio_acuario").hidden = false
	document.getElementById("div_otros_servicios").hidden = true
}

function oculto_div_limpieza() {
	document.getElementById("div_limpieza_acuario").hidden = true
	document.getElementById("div_otros_servicios").hidden = false
	document.getElementById("div_domicilio_acuario").hidden = true
}

function calculo_precio_peluqueria (cantidad_mascota,peso_mascota) {
	precio_base_por_mascota_hasta_25_kg = 300
	precio_adicional_por_kg = 28
	kg_adicionales = 0
	peso_adicional = peso_mascota - 25
	total_a_pagar = precio_base_por_mascota_hasta_25_kg * cantidad_mascota
	if (peso_adicional>0) {
		total_a_pagar += peso_adicional * precio_adicional_por_kg 
	}
	return total_a_pagar
}

function calculo_precio_banio (cantidad_mascota,peso_mascota) {
	precio_base_por_mascota_hasta_35_kg = 250
	precio_adicional_por_kg = 15
	kg_adicionales = 0
	peso_adicional = peso_mascota - 35
	total_a_pagar = precio_base_por_mascota_hasta_35_kg * cantidad_mascota
	if (peso_adicional>0) {
		total_a_pagar += peso_adicional * precio_adicional_por_kg 
	}
	return total_a_pagar
}

function calculo_precio_limpieza (ancho_piscina,alto_piscina) {
	precio_base_por_metro_cuadrado = 125
	metros_cuadrados = ancho_piscina * alto_piscina
	total_a_pagar = precio_base_por_metro_cuadrado * metros_cuadrados
	return total_a_pagar
}

function calculo_precio_vacunacion (cantidad_mascota) {
	precio_base_por_mascota = 150
	precio_extra_vacuna = 55
	total_a_pagar = (precio_base_por_mascota * cantidad_mascota) + precio_extra_vacuna
	return total_a_pagar
}

function calculo_precio_consulta_medica (cantidad_mascota) {
	precio_base_por_mascota = 180
	total_a_pagar = precio_base_por_mascota * cantidad_mascota
	return total_a_pagar
}

function proceso_formulario() {
	
	servicio_elegido = document.getElementById("tipo_servicio").value

	alto_pecera = document.getElementById("input_alto").value

	ancho_pecera = document.getElementById("input_ancho").value

	cantidad_peces = document.getElementById("cant_peces").value

	cantidad_animales = document.getElementById("cant_animales").value

	raza_elegida = document.getElementById("raza_animal").value

	peso_animal = document.getElementById("peso_animal").value

	if (servicio_elegido == "Peluqueria") {
		total_calculado = calculo_precio_peluqueria(cantidad_animales,peso_animal)

	} else if (servicio_elegido == "Banio") {
		total_calculado = calculo_precio_banio(cantidad_animales,peso_animal)

	} else if (servicio_elegido == "LimpiezaDeAcuario") {
		total_calculado = calculo_precio_limpieza(ancho_pecera,alto_pecera)

	} else if (servicio_elegido == "Vacunacion") {
		total_calculado = calculo_precio_vacunacion(cantidad_animales)

	} else if (servicio_elegido == "ConsultaMedica") {
		total_calculado = calculo_precio_consulta_medica(cantidad_animales)
	}

	txt_campo_observaciones = document.getElementById("observaciones")

	txt_sucursal_entrega = document.getElementById("sucursal_entrega")

	txt_sucursal_retiro = document.getElementById("sucursal_retiro")

	txt_domicilio_acuario = document.getElementById("domicilio_acuario")

	cadena = "Debe pagar: "+total_calculado+" por el servicio de: "+servicio_elegido+"."
	alert("¡¡Formulario Procesado!!")
	alert(cadena)
}


