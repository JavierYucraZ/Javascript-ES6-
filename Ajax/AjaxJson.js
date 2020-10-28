const boton1 = document.getElementById('boton1')
boton1.addEventListener('click', function(){
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'empleado.json', true)
	xhr.onload = function(){
		if (this.status === 200) {
			console.log(JSON.parse(this.responseText))
			const persona = JSON.parse(this.responseText)
			const htmlPlantilla = `
				<ul>
					<li>ID : ${persona.id}</li>
					<li>Nombre : ${persona.nombre}</li>
					<li>Apellido : ${persona.apellido}</li>
					<li>Telefono : ${persona.telefono}</li>
				</ul>
			`
			document.getElementById('empleado').innerHTML = htmlPlantilla
		}
	}
	xhr.send()
})

const boton2 = document.getElementById('boton2')
boton2.addEventListener('click',function(){
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'empleados.json', true)
	xhr.onload = function(){
		if(this.status === 200){
			console.log(JSON.parse(this.responseText))
			const personas = JSON.parse(this.responseText)
			let htmlPlantilla = ''
			personas.forEach((persona) => {
				htmlPlantilla += `
					<ul>
						<li>ID : ${persona.id}</li>
						<li>Nombre : ${persona.nombre}</li>
						<li>Apellido : ${persona.apellido}</li>
						<li>Telefono : ${persona.telefono}</li>
					</ul>
				`
			})
			document.getElementById('empleados').innerHTML = htmlPlantilla
		}
	}
	xhr.send()
})