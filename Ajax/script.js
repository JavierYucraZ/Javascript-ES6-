document.getElementById('cargar').addEventListener('click', cargarDatos)

function cargarDatos(e){
	e.preventDefault()
	//Creamos un objeto XMLHttpRequest
	// Esta clase se encarga de realizar peticiones hacia un servidor
	const xhr = new XMLHttpRequest()
	
	//abrimos una conexion
	/*
	en el metodo open le indicamos que tipo de peticion estamos realizando
	al servidor
	GET -> para pedir informacion
	POST -> para agregar informacion
	PUT -> para actualizar informacion
	DElETE -> para eliminar informacion
	como segundo parametro le indicamos hacia donde queremos hacer una peticion
	como tercer parametro le indicamos que sera un llamado asincrono
	*/
	xhr.open('GET', 'datos.txt', true)
	
	// una vez que carga la pagina
	xhr.onload = function(){
		// Status http
		/*
			200 : ok
			403 : peticion prohibida
			404 : recurso no encontrado
			Tarea -> investigar al menos dos estados por cada seccion
			100, 200, 300, 400, 500
		*/
		// nosotros queremos que nuestro codigo solo funcione cuando estamos
		// en el estado 200, this se refiere a la conexion que estamos haciendo
		if(this.status === 200){
			//response text
			console.log(this.response)
			document.getElementById('listado').innerHTML = `<h1>${this.response}</h1>`
		}
	}

	//enviar la peticion
	xhr.send()

}