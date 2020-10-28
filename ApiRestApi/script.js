// Si nos enfocamos solo en ser desarrolladores Front-End
/*En un trabajo formal, lo primero que debemos hacer es aprender a consumir servicios
y esto lo logramos utilizando APIs, accediendo a los end points
Un ejemplo super clasico, es que para una entrevista, simplemente te dan
algunos end points y te dicen que los consumas y los muestres*/

// json placeholder
const usuarios = document.querySelector('#cargar')
usuarios.addEventListener('click', cargarAPI)

function cargarAPI(e){
	e.preventDefault()
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
	xhr.onload = function(){
		if (this.status === 200) {
			const users = JSON.parse(this.responseText)
			let contenido = ''
			users.forEach((user)=>{
				contenido += `
					<h3>${user.name}</h3>
			 		<p>${user.username}</p>
			 		<p>${user.email}</p>
				`
			})
			document.getElementById('listado').innerHTML = contenido
		}
	}
	xhr.send()
}