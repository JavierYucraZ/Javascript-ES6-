//Funciones
/*
Las funciones son bloques que ejecutan procesos independientes
dentro de nuestro programa y solo se ejecutaran al momento
que nosotros las invoquemos

Asi como todas las que ya hemos visto, que en realidad hemos conocido
como metodos, estos no se ejecutan mientras no se llamen

Las funciones nos ayudan a dividir nuestro codigo en pequeñas secciones
para asi tener un mejor control y que nuestra aplicacion sea mas sostenible
y adaptable, siempre deberiamos usar el concepto de divide y venceras
*/


function saludar(){
	console.log('Hola mundo, estoy dentro de una funcion')
}
saludar()

//funciones con parametros
/*
los parametros son datos que se pasan desde afuera de la funcion
para que se pueda realizar algun proceso interno y retornar algun valor
*/
let nombre = 'Javier'

function saludoPersona(parametroNombre){
	console.log(`Hola ${parametroNombre}`)
}

saludoPersona(nombre)
saludoPersona('Carlos')
saludoPersona('Astrit')
// con esto logramos reutilizar el codigo, pero aplicado a
// diferentes finalidades


//Parametros por defecto
// Cuando no enviamos parametros a una funcion que los necesita, podemos
// agregar parametros por defecto
function mostrarFruta(fruta = 'Pera'){
	console.log(fruta)
}

mostrarFruta('Manzana')


//asignacion de una funcion a una variable o constante
const sumar = function(a,b){
	return a+b 
}

console.log(sumar(1,5))

//objetos con funciones
const musica = {
	reproducir : function(){
		console.log('Reproduciendo la cancion')
	},
	pausar : function(){
		console.log('pausando la reproduccion')
	}
}

musica.reproducir()
musica.pausar()

musica.eliminar = function(nombreCancion){
	console.log(`Eliminando cancion : "${nombreCancion}"`)
}

musica.eliminar('Burn it to the ground')


// Parametros Rest
function cocinar(ingrediente1, ingrediente2, ...masIngredientes){
	console.log(ingrediente1, ingrediente2, masIngredientes.join())
}

// cocinar('Pollo', 'Tomate')
// Puede darse el caso de que no sabemos cuantos parametros necesitemos enviar
// entonces no podemos estar alterando nuestra funcion una y otra vez
// segun nos vayan pidiendo


function cocinar(...masIngredientes){
	console.log(masIngredientes.join())
}

//entonces en este caso nosotros indicaremos un tipo de parametro dinamico
//para que se pueda ir adaptando a todos los elementos que nosotros enviemos
cocinar('Pollo', 'Tomate', 'Arroz', 'Papas', 'Lechuga')

// Parametros Spread
// asi como tenemos los parametros rest para recibir una cantidad variable
// de informacion, tenemos una manera de poder enviar cualquier cantidad
// de datos

let ingredientesBase = ['Pollo', 'Tomate']

function cocinar2(ing1, ing2, ing3){
	console.log(ing1, ing2, ing3)
}

cocinar2(...ingredientesBase, 'Arroz')

// Combinacion de Rest y Spread
let ingredientesBase3 = ['Pollo', 'Tomate', 'Arroz', 'Pescado']
function cocinar3(...ingredientes){
	console.log(ingredientes.join())
}

cocinar3(...ingredientesBase3,'Papa', 'Cebolla', 'Apio', 'Cerdo')


// Funciones iife
// vamos al index

// Callbacks
// Los callbacks son funciones que pueden recibir otras funciones como parametros
function calcular(datoA, datoB, sumarCB, restarCB){
	let adicion = datoA + datoB
	let sustraccion = datoA - datoB

	sumarCB(adicion)
	restarCB(sustraccion)
}

calcular(3, 2, function(resultado){
	console.log(`Resultado de la suma es : ${resultado}`)
},function(resultado){
	console.log(`Resultado de la resta es : ${resultado}`)
})


// Con las nuevas tendencias y caracteristicas en las ultimas versiones de javascript
// podemos hacer uso de una manera mas reducida para crear funciones y esto es
// Funciones flecha o funciones Lambda
let nombreFun = parametroFunFlecha => `Hola ${parametroFunFlecha}`
console.log(nombreFun('Javier'))

//Tambien es posible enviar mas de un solo parametro
let sumaFlecha = (num1, num2) => num1 + num2
console.log(sumaFlecha(5,7))

//De igual forma podemos crear muchos procesos en su interior
let divisionFlecha = (num1, num2) => {
	if (num2 == 0) {
		console.log('No se puede dividir entre 0')
	} else {
		console.log(num1/num2)
	}
}

divisionFlecha(8,3)

//sin enviar parametros
let sinParametros = () => {
	console.log('Estamos utilizando una funcion flecha sin parametros')
}

sinParametros()


// Investigar sobre la diferencia entre funciones flecha y funciones tradicionales