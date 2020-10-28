//Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?')
console.log(presupuestoUsuario)

let cantidadPresupuesto

const formulario = document.getElementById('agregarGasto')
const notificacion = document.getElementById('notificacion')

//Clases
class Presupuesto{
	constructor(presupuestoUsuario){
		//Cuando obtenemos el valor de un prompt, este se envia como string
		this.presupuesto = Number(presupuestoUsuario)
		this.restante = Number(presupuestoUsuario)
	}

	//metodo para ir restando del presupuesto actual
	presupuestoRestante(cantidad = 0){
		return this.restante -= Number(cantidad)
	}
}

//Todo lo relacionado a nuestro html
class Interfaz{
	insertarPresupuesto(cantidad){
		console.log(cantidad)

		const presupuestoSpan = document.querySelector('span#total')
		const restanteSpan = document.querySelector('span#restante')

		//insertar al html
		presupuestoSpan.innerHTML = `${cantidad}$`
		restanteSpan.innerHTML = `${cantidad}$`
	}

	imprimirMensaje(mensaje, tipo){
		const texto = document.getElementById('mensaje')
		notificacion.classList.add(tipo)
		texto.innerHTML = mensaje
		notificacion.style.display = 'block'
	}

	agregarGastoLista(nombreGasto, cantidadGasto){
		// <li>Item 1<span class="tag is-primary">Primary</span></li>
		const gastosListado = document.querySelector('#gastos ul')
		// creamos li
		const li = document.createElement('li')
		const span = document.createElement('span')

		span.classList.add('tag', 'is-primary')
		span.innerText = cantidadGasto

		li.innerHTML = nombreGasto

		li.appendChild(span)
		gastosListado.appendChild(li)
	}

	presupuestoRestante(cantidad){
		const restante = document.querySelector('#restante')
		const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad)
		restante.innerHTML = `${presupuestoRestanteUsuario}$`
		this.calcularPorcentaje()
	}

	calcularPorcentaje(){
		const presupuestoTotal = cantidadPresupuesto.presupuesto
		const presupuestoRestante = cantidadPresupuesto.restante

		//calculamos el 25%
		if( (presupuestoTotal / 4) > presupuestoRestante){
			const restante = document.querySelector('#restante')
			restante.classList.remove('is-success','is-warning')
			restante.classList.add('is-danger')
		}else if((presupuestoTotal / 2) > presupuestoRestante){
			const restante = document.querySelector('#restante')
			restante.classList.remove('is-success')
			restante.classList.add('is-warning')
		}
	}


}


//listeners
document.addEventListener('DOMContentLoaded', function(){
	if (presupuestoUsuario == null || presupuestoUsuario === '') {
		window.location.reload()
	}else{
		//instanciar un presupuesto
		console.log('Agregado correctamente')
		cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
		console.log(cantidadPresupuesto)

		//instanciar la clase de interfaz
		const ui = new Interfaz()
		ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)
	}
})

formulario.addEventListener('submit', function(e){
	e.preventDefault()
	//leer del formulario de gastos
	const nombreGasto = document.getElementById('gasto').value
	const cantidadGasto = document.getElementById('cantidad').value


	//instanciar la interfaz
	const ui = new Interfaz()
	//comprobamos que los campos no esten vacios
	if(nombreGasto == '' || cantidadGasto == ''){
		//2 parametros, mensaje y tipo
		ui.imprimirMensaje('Hubo un error', 'is-danger')
	}else{
		ui.imprimirMensaje('Gasto agregado correctamente', 'is-success')
		ui.agregarGastoLista(nombreGasto, cantidadGasto)
		ui.presupuestoRestante(cantidadGasto)
	}
})
