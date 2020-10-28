//Variables y constantes
const listaTareas = document.querySelector('#lista-tareas')
const formulario = document.querySelector('#formulario')
let textarea = document.querySelector('#tarea')


function eventListeners(){
	formulario.addEventListener('submit', agregarTarea)

	formulario.addEventListener('keyup', function(e){
		e.preventDefault()
		if (e.keyCode === 13) {
			agregarTarea(e)
			formulario.reset()
		}
	})

	//Eliminar Tareas
	listaTareas.addEventListener('click', eliminarTarea)
	document.addEventListener('DOMContentLoaded', cargarLocalStorage)
}

eventListeners()


function agregarTarea(e){
	e.preventDefault()
	console.log('Formulario enviado')

	//leemos el valor de los campos del formulario
	const contenidoTarea = document.querySelector('#tarea').value

	console.log(contenidoTarea)


	//Ahora, como debemos agregar las tareas dinamicamente
	//entonces debemos crear los elementos dinamicamente
	const li = document.createElement('li')
	li.classList.add('collection-item', 'avatar')
	
	//icono tarea
	const icono = document.createElement('i')
	icono.classList.add('material-icons','circle')
	icono.innerText = 'event_available'

	//contenido de la lista
	const parrafo = document.createElement('p')
	parrafo.className = 'teal-text'
	parrafo.innerText = contenidoTarea

	//boton eliminar
	const botonEliminar = document.createElement('a')
	botonEliminar.classList = 'secondary-content'

	//icono eliminar
	const iconoEliminar = document.createElement('i')
	iconoEliminar.classList.add('tiny','material-icons')
	iconoEliminar.style.cursor = 'pointer'
	iconoEliminar.innerText = 'close'

	//enlazamos todos los elementos
	li.appendChild(icono)
	li.appendChild(parrafo)
	li.appendChild(botonEliminar)
	botonEliminar.appendChild(iconoEliminar)

	
	listaTareas.appendChild(li)
	formulario.reset()


	//Una vez agregado a la pagina, en ocasiones necesitamos que la informacion persista
	//para esto podriamos utilizar una base de datos para almacenarlo
	//eso lo veremos casi al final del curso, por ahora, usaremos un tipo de almacenamiento
	//local que todos los navegadores modernos tiene, llamado local storage

	//creamos la funcion
	agregarTareaLocalStorage(contenidoTarea)
}


function eliminarTarea(e){
	e.preventDefault()
	

	if (e.target.attributes.class.nodeValue == 'tiny material-icons') {
		// console.log('Click en eliminar')
		// console.log(e.target.parentElement.parentElement)
		// console.log(e.target.parentElement.parentElement.childNodes[1].innerText)
		let valor = e.target.parentElement.parentElement.childNodes[1].innerText	
		if (confirm('Desea eliminar esta tarea?')) {
			e.target.parentElement.parentElement.remove()
			eliminarTareaLocalStorage(valor)
			alert('Tarea eliminada')
		}
	}
}


//Agregar tarea a local storage
function agregarTareaLocalStorage(tarea){
	//en esta variable obtendremos todas las tareas que ya estan guardadas
	let tareas


	// obtenemos todas las tareas guardadas
	tareas = obtenerTareasLocalStorage()
	//independientemente si tiene elementos o no, ambos son arreglos
	//entonces podemos usar uno de tantos metodos que ya conocemos
	
	tareas.push(tarea)
	//ahora, localstorage, solo acepta strings, entonces debemos cambiar
	//el formato antes de enviarlo
	localStorage.setItem('tareas', JSON.stringify(tareas))


	//agregamos a ls
	//si lo hacemos de esta manera, entonces logramos que se guarde
	//pero en cada guardado, el contenido se ira sobreescribiendo
	//y no queremos lograr eso, para ese caso, usaremos arreglos
	//para almacenar todas las tareas sin que se solapen
	// localStorage.setItem('tareas',tarea)




}

function obtenerTareasLocalStorage(){
	let tareas 
	//revisamos la informacion de ls
	if (localStorage.getItem('tareas') == null) {
		tareas = []
	}else{
		//transformaremos toda la informacion que nos llegue a un formato
		//que javascript pueda manejar facilmente, ya que ls nos devuelve texto plano
		//es mejor cambiar su formato
		//este formato sera JSON(javascript object notation)
		//que tiene la siguiente forma
		//llave : valor
		tareas = JSON.parse(localStorage.getItem('tareas'))
	}
	return tareas
}

function cargarLocalStorage(){
	let tareas = obtenerTareasLocalStorage()
//	console.log(tareas)
	tareas.forEach((tarea) => {
		//Ahora, como debemos agregar las tareas dinamicamente
		//entonces debemos crear los elementos dinamicamente
		const li = document.createElement('li')
		li.classList.add('collection-item', 'avatar')
		
		//icono tarea
		const icono = document.createElement('i')
		icono.classList.add('material-icons','circle')
		icono.innerText = 'event_available'

		//contenido de la lista
		const parrafo = document.createElement('p')
		parrafo.className = 'teal-text'
		parrafo.innerText = tarea

		//boton eliminar
		const botonEliminar = document.createElement('a')
		botonEliminar.classList = 'secondary-content'

		//icono eliminar
		const iconoEliminar = document.createElement('i')
		iconoEliminar.classList.add('tiny','material-icons')
		iconoEliminar.style.cursor = 'pointer'
		iconoEliminar.innerText = 'close'

		//enlazamos todos los elementos
		li.appendChild(icono)
		li.appendChild(parrafo)
		li.appendChild(botonEliminar)
		botonEliminar.appendChild(iconoEliminar)

		
		listaTareas.appendChild(li)
	})
}

function eliminarTareaLocalStorage(tareaParametro){
	// console.log(`enviado desde funcion eliminar :  ${tarea}`)

	let tareas = obtenerTareasLocalStorage()
	tareas.forEach((tarea,index) => {
		// console.log(tarea)
		if (tareaParametro == tarea) {
			/*
			En este caso, usamos la funcion splice para eliminar un elemento
			del arreglo que nos llego desde local storage
			Pero no es suficiente, porque lo que estamos manejando es un arreglo
			y debemos guardarlo con los cambios en ls
			*/
			tareas.splice(index, 1)
		}
	})
	localStorage.setItem('tareas', JSON.stringify(tareas))
}

