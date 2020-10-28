const nombre = document.getElementById('nombres')
const region = document.getElementById('regiones')
const idioma = document.getElementById('idiomas')

let	resNombre = document.getElementById('resNombre')
let resRegion = document.getElementById('resRegion')
let resIdioma = document.getElementById('resIdioma')

document.getElementById('nombre').addEventListener('submit', buscarPorNombre)
document.getElementById('region').addEventListener('submit', buscarPorRegion)
document.getElementById('idioma').addEventListener('submit', buscarPorIdioma)

const xhr = new XMLHttpRequest()

function buscarPorNombre(e){
	e.preventDefault()
	// console.log(nombre.value)
	// let seleccionado = nombre.options[nombre.selectedIndex].text
	// console.log(seleccionado)

	xhr.open('GET',`https://restcountries.eu/rest/v2/alpha/${nombre.value}`, true)
	xhr.onload = function(){
		if(this.status === 200){
			console.log(this.response)
			const respuesta = JSON.parse(this.response)
			let contenido = `
			<div class="column is-two-fifths">
				<div class="card">
				  <div class="card-image">
				    <figure class="image is-5by3">
				      <img src="${respuesta.flag}" alt="Placeholder image">
				    </figure>
				  </div>
				  <div class="card-content">
				      <p class="title">Nombre : ${respuesta.name}</p>
				      <p class="subtitle">Capital : ${respuesta.capital}</p>
				      <p class="subtitle">Region : ${respuesta.region}</p>
				      <p class="subtitle">Poblacion : ${respuesta.population} habitantes</p>
				  </div>
				</div>
			</div>
			`
			resNombre.innerHTML = contenido
		}
	}
	xhr.send()
}

function buscarPorRegion(e){
	e.preventDefault()
	xhr.open('GET',`https://restcountries.eu/rest/v2/region/${region.value}`, true)
	xhr.onload = function(){
		if(this.status === 200){
			// console.log(this.response)
			const respuesta = JSON.parse(this.response)
			let contenido = ''
			respuesta.forEach(pais => {
				contenido += `
				<tr>
				      <td>
				      	${pais.name}
				      </td>
				      <td>
				      	${pais.capital}
				      </td>
				      <td>
				      	${pais.population}
				      </td>
				    </tr>
				`
			})
			resRegion.innerHTML = contenido
		}
	}
	xhr.send()
}

function buscarPorIdioma(e){
	e.preventDefault()
	xhr.open('GET',`https://restcountries.eu/rest/v2/lang/${idioma.value}`, true)
	xhr.onload = function(){
		if(this.status === 200){
			// console.log(this.response)
			const respuesta = JSON.parse(this.response)
			let contenido = ''
			respuesta.forEach(pais => {
				contenido += `
				<tr>
				      <td>
				      	${pais.name}
				      </td>
				      <td>
				      	${pais.capital}
					  </td>
					  <td>
					 	${pais.region} 
					  </td>
				      <td>
				      	${pais.population}
				      </td>
				    </tr>
				`
			})
			resIdioma.innerHTML = contenido
		}
	}
	xhr.send()
}