//Objetos
const persona = {
	//atributo, valor
	nombre : 'Javier',
	email : 'yucrazj@gmail.com',
	celular : 70190260,
	mayorEdad : true,
	especialidades : [
		"Desarrollo Front End",
		"Desarrollo Back End"
	],
	ubicacion : {
		pais : 'La Paz',
		departamento : 'Murillo'
	}
}

console.log(persona)
console.log(`Nombre : ${persona.nombre}, 
	Email : ${persona.email}, 
	Especialidades : ${persona.especialidades.join()}, 
	Celular : ${persona.celular},
	Mayor de Edad : ${persona.mayorEdad}`)

persona.especialidades.push('Desarrollo movil')

console.log(`Nombre : ${persona.nombre}, 
	Email : ${persona.email}, 
	Especialidades : ${persona.especialidades.join()}, 
	Celular : ${persona.celular},
	Mayor de Edad : ${persona.mayorEdad}`)

console.log(`Nombre : ${persona.nombre}, 
	Email : ${persona.email}, 
	Especialidades : ${persona.especialidades.join()}, 
	Celular : ${persona.celular},
	Mayor de Edad : ${persona.mayorEdad},
	Ubicacion : ${persona.ubicacion.pais}, ${persona.ubicacion.departamento}`)
