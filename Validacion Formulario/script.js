const nombre = document.getElementById('nombre'),
email = document.getElementById('email'),
asunto = document.getElementById('asunto'),
mensaje = document.getElementById('mensaje'),
botonEnviar = document.getElementById('botonEnviar'),
botonResetear = document.getElementById('botonResetear'),
formulario = document.getElementById('formulario')


function eventListeners(){
	document.addEventListener('DOMContentLoaded', inicioApp)
	//ocurre cuando nosotros le quitamos el focus a un elemento
	nombre.addEventListener('blur', validarCampo)
	email.addEventListener('blur', validarCampo)
	asunto.addEventListener('blur', validarCampo)
	mensaje.addEventListener('blur', validarCampo)

	//envio
	botonEnviar.addEventListener('click',enviarEmail)
	botonResetear.addEventListener('click', function(){
		formulario.reset()
	})
}
eventListeners()


function inicioApp(){
	//disable envio
	botonEnviar.disabled = true
	formulario.reset()
}

function validarCampo(){
	// console.log('Quitando foco de input')
	//Validamos longitud del texto y que no este vacio
	//Como esta funcion se encarga de varios elementos al mismo tiempo
	//podemos utilizar this, para indicar que estamos trabajando
	//con el elemento que lo esta utilizando
	validarLongitud(this)

	if(nombre.value !== '' && email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
		botonEnviar.disabled = false
	}

	// Si bien podemos aplicar la validacion de html
	// Es mejor aplicar una validacion propia en algunos casos
	// console.log(this.type)
	if(this.type === 'email'){
		validarEmail(this)
	}
}

function enviarEmail(e){
	e.preventDefault()
	const carga = document.getElementById('carga')
	const enviado = document.getElementById('enviado')

	inicioApp()

	carga.style.display = 'block'
	botonEnviar.style.display = 'none'
	botonResetear.style.display = 'none'

	//ejecutar una funcion despues de cierto tiempo
	setTimeout(function(){
		carga.style.display = 'none'
		enviado.style.display = 'block'
	},2000)

	setTimeout(function(){
		enviado.style.display = 'none'
		botonEnviar.style.display = 'inline'
		botonResetear.style.display = 'inline'
	},5000)

}


function validarLongitud(campo){
	// console.log(campo)
	if (campo.value.length > 0) {
		campo.style.borderBottomColor = 'green'
		campo.classList.remove('error')
	}else{
		campo.style.borderBottomColor = 'red'
		campo.classList.add('error')
	}
}


function validarEmail(email){
	if (expresionRegularEmail(email.value)) {
		email.style.borderBottomColor = 'green'
		email.classList.remove('error')
	}else{
		email.style.borderBottomColor = 'red'
		email.classList.add('error')
	}
}


function expresionRegularEmail(email){
	//Es una secuencia de caracteres que se puede utilizar para verificar un patron
	const expresionRegular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,10})+$/
	//el metodo test verifica si una expresion cumple con la condicion
	//que dicta una expresion regular
	return expresionRegular.test(email) ? true : false
}
