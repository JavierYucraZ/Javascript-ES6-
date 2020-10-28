document.getElementById('txtBoton').addEventListener('click', cargarTxt)

function cargarTxt(e){
    e.preventDefault()
    //primero se realiza la conexion y se transforma los datos
    fetch('datos.txt').then(function(response){
        return response.text()
    }).then(function(info){
        //aca recibimos la informacion transformada y la agregamos a la pagina
        document.getElementById('resultado').innerHTML = info
    })
}

document.getElementById('jsonBoton').addEventListener('click', cargarJson)
function cargarJson(e){
    e.preventDefault()
    fetch('empleados.json').then(res => {
        return res.json()
    }).then(arreglo => {
        // console.log(arreglo)
        let html = ''
        arreglo.forEach( persona =>{
            html += `
                <ul>
                    <li>ID : ${persona.id}</li>
                    <li>Nombre : ${persona.nombre}</li>
                    <li>Apellido : ${persona.apellido}</li>
                    <li>Telefono : ${persona.telefono}</li>
                </ul>
            `
        })
        document.getElementById('empleados').innerHTML = html
    })
}

// https://picsum.photos/

document.getElementById('apiBoton').addEventListener('click', cargarApi)
function cargarApi(e){
    e.preventDefault()
    fetch('https://picsum.photos/v2/list?page=2&limit=5').then(res=>{
        return res.json()
    }).then(imagenes => {
        let html = ''
        imagenes.forEach(imagen => {
            html += `
                <ul>
                    <li>
                        ID : ${imagen.id}
                    </li>
                    <li>
                        Autor : ${imagen.author}
                    </li>
                    <li>
                        <a href="${imagen.url}">${imagen.url}</a>
                    </li>
                </ul>
            `
        })
        document.getElementById('imagenes').innerHTML = html
    })
}

