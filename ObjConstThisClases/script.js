/*
Objetos, constructores, elementos this, clases
Si bien ya vimos la manera de crear objetos en nuestro programa
fue un simple vistazo, ya que con las nuevas tendencias y ultimas
versiones que tenemos disponibles hoy en dia ya podemos utilizar lo que
se conoce como programacion orientada a objetos de manera muy fluida
y no simplemente emulando su comportamiento

Versiones de Javascript
La primera version de javascript nacio en 1995 y se creo para potenciar
un poco las funcionalidades del navegador netscape, al que dejaron de
dar mantenimiento en 2008

Cuando este lenguaje se lanzo como publico, Microsoft como primer competidor
tambien se vio obligado a crear su propio lenguaje para implementar
en Internet Explorer y se llamaba Jscript

y asi se fue popularizando este lenguaje, pero esto de que cada navegador tenga
su propio lenguaje traia muchos problemas de implementacion y se necesitaba un estandar

Aqui es donde entra ECMA international, que es una organizacion que se encarga
de generar estandares para la comunicacion

Entonces gracias a esta organizacion, se logro llegar a un estandar para el
lenguaje de javascript y fue en la version 1.1
y su primera version como ECMAscript fue oficialmente la 1.3

A partir de aca, cada cierto tiempo se fueron aumentando y rediseñando muchos elementos
del lenguaje hasta ser tal y como lo conocemos ahora

Tarea -> 
	Investigar sobre las caracteristicas de
	ECMAscript 5, 6

	A partir del año 2017 el nombre se oficial es 
	ECMAscript 2017 
	ECMAscript 2018 
	ECMAscript 2019
<-

y las siguientes versiones ya se conocen como ES.next

////////////////
Ahora con todo esto tenemos disponibles un monton de
caracteristicas nuevas que nos permiten trabajar
en un lenguaje practicamente de alto nivel


Entre las nuevas caracteristicas esta la programacion
utilizando clases, constructores, usar la propiedad o atributo this
*/

//Uso del elemento this
const cliente = {
	nombre : 'Javier',
	saldo : 2000,
	tipoCliente : function(){
		let tipo
		if (this.saldo > 1000) {
			tipo = 'Gold'
		}else{
			tipo = 'Normal'
		}
		return tipo
	}
}

console.log(cliente.tipoCliente())
//y si todos van a revisar su consola, veran el mensaje
/*saldo no esta definido, esto pasa porque estamos intentando
acceder a un atributo dentro de la funcion y como ya explicamos
las funciones son bloques de codigo independientes, esto quiere decir que
no le importa mucho lo que pase afuera, pero como estamos dentro un objeto
podemos utilizar la palabra reservada this, indicando que queremos acceder
a un atributo del mismo objeto

Siempre que estemos en un objeto, debemos utilizar la palabra this
para poder utilizar su propios atributos*/

//Clases
/*
Nuestro objeto por si solo trabaja correctamente, pero que pasa
cuando queremos crear otro objeto con los mismos atributos,
pero con diferentes valores, tendriamos que reescribir todo el codigo
aca es donde entra el concepto de clases

Las clases simplemente son estructuras que nos permiten
generar una especie de plantilla para todos nuestros objetos
Como en versiones anteriores no existia este concepto en este lenguaje de
programacion, se usaba funciones simulando que cumplian el trabajo de clases
*/

function Cliente(nombre, saldo, edad){
	this.nombre = nombre
	this.saldo = saldo
	this.edad = edad
	this.tipoCliente = function(){
		let tipo
		if (this.saldo > 1000) {
			tipo = 'Gold'
		}else{
			tipo = 'Normal'
		}
		return tipo
	}
}

//Esto se conoce como constructor
/*Cuando nosotros enviamos la informacion como parametros y la 
clase las recibe, haciendo uso de la palabra this, crea sus propios
atributos y los empieza a construir con la informacion que le este llegando desde
el exterior*/
const nuevoCliente = new Cliente('Javier', 200, 28)
const nuevoCliente2 = new Cliente('Astrit', 1500, 15)
console.log(nuevoCliente.tipoCliente())
console.log(nuevoCliente2.tipoCliente())


/*Prototipos
En las ultimas versiones, practicamente los prototipos desaparecen
pero es necesario saber como es su comportamiento, porque aun hay programadores
que los usan y nos podemos topar con alguno

El prototipo de cualquier objeto, es la manera en que esta construido
entonces haciendo uso de estos, podemos alterar nuestra funcion-clase
sin tener que sobrecargarla de metodos
*/

Cliente.prototype.acceso_a_tarjeta = function(edad){
	let mensaje
	if (edad > 18) {
		mensaje = 'Tiene acceso a tarjeta de credito'
	}else{
		mensaje = 'No tiene acceso a tarjeta de credito'
	}

	return mensaje
}

console.log(nuevoCliente.acceso_a_tarjeta(28))

Cliente.prototype.mostrarDatos = function(){
return `Nombre : ${this.nombre},
Saldo : ${this.saldo},
Edad : ${this.edad},
Tipo de cliente : ${this.tipoCliente()},
Acceso a tarjeta : ${this.acceso_a_tarjeta(this.edad)}`
}


console.log(nuevoCliente.mostrarDatos())
console.log(nuevoCliente2.mostrarDatos())

/*Herencia de prototipos*/
function Empresa(nombre, saldo, edad, telefono, tipo){
	Cliente.call(this, nombre, saldo, edad)
	this.telefono = telefono
	this.tipo = tipo
}

Empresa.prototype.mostrarInfo = function(){
	return `Nombre : ${this.nombre},
Saldo : ${this.saldo},
Edad : ${this.edad},
Tipo de cliente : ${this.tipoCliente()},
Telefono : ${this.telefono},
Tipo de empresa : ${this.tipo}`
}

const empresa = new Empresa('Educomser', 10000, 15, 7589962, 'Educacion')
console.log(empresa.mostrarInfo())


const Persona = {
	imprimirSaludo : function(){
		return `Hola, ${this.nombre} ${this.apellido}`
	}
}

const persona = Object.create(Persona)
persona.nombre = 'Javier'
persona.apellido = 'Yucra'

console.log(persona.imprimirSaludo())

/*Uso de clases*/
class videoClub{
	// Shrek, 2001, animada
	// Avatar, 2009, ficcion

	constructor(nombre, year){
		this.nombre = nombre
		this.year = year
	}

	mostrarPelicula(){
		return `Nombre : ${this.nombre}, Año : ${this.year}`
	}

	static bienvenida(){
		return `Bienvenido a nuestro video Club`
	}
}

const pelicula = new videoClub('Shrek', 2001, 'Animada')
console.log(videoClub.bienvenida())	


class GeneroPelicula extends videoClub{
	constructor(nombre, year, genero){
		super(nombre, year)
		this.genero = genero
	}

	mostrarInfoPelicula(){
		return `Nombre : ${this.nombre}, Año : ${this.year}, Genero : ${this.genero}`
	}
}

const pelicula2 = new GeneroPelicula('Avatar', 2009, 'Ciencia Ficcion')
console.log(pelicula2.mostrarInfoPelicula())