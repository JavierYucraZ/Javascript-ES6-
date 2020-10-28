// Condicionales
// Evalua si una expresion es verdadera o falsa
let edad = 25
if (edad > 18) {
	console.log('Eres mayor de edad')
}


let numero1 = 2, numero2 = "2"

//Igualdad e Igualdad Exacta
if (numero1 === numero2) {
	console.log('Los datos son iguales')
}else{
	console.log('Los datos no son iguales')
}

//Operador ternario
let esMiembro = false
console.log(esMiembro ? "el ingreso es de 100bs" : "el ingreso es de 200bs")

//Condicionales anidadas
let hora = "10:55pm", tiempo = hora.substring(0,2)

if (hora.includes("am")) {
	console.log('Buenos dias')
} else if(hora.includes("pm") && tiempo < 7) {
	console.log('Buenas tardes')
} else if(hora.includes("pm") && tiempo > 7){
	console.log('Buenas noches')
}


//Switch
let departamento = 'cochabamba'
let lp = Array('Camacho', "Franz Tamayo", 'Aroma')
let sc = Array('Andres Ibañez', "Guarayos", 'Ignacio Warnes')
let cb = Array('Arani','Bolivar','Campero')
switch (departamento) {
	case 'La Paz':
		console.log(lp)
		break;
	case 'Santa Cruz':
		console.log(sc)
		break;
	case 'Cochabamba':
		console.log(cb)
		break;
	default:
		console.log('Ciudad no encontrada')
		break;
}


