const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?')
console.log(presupuestoUsuario)

let cantidadPresupuesto
let sw = 0
const formulario = document.getElementById('agregarGasto')
//const notificacion = document.getElementById('notificacion')

//Clases
class Presupuesto{

    constructor(presupuestoUsuario){
        this.presupuesto = Number(presupuestoUsuario)
        this.restante = Number(presupuestoUsuario)
    }
 
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad)
    }
    presupuestoRestanteSum(cantidad = 0){
        return this.restante += Number(cantidad)
    }
}

class Interfaz{
    insertarPresupuesto(cantidad){
        console.log(cantidad)

        const presupuestoSpan = document.querySelector('span#total')
        const restanteSpan = document.querySelector('span#restante')

        presupuestoSpan.innerHTML = `${cantidad}$`
        restanteSpan.innerHTML = `${cantidad}$`
    }

    agregarGastoLista(nombreGasto, cantidadGasto){
        
        const ui = new Interfaz()

        if(sw == 1){                      
            ui.imprimirMensaje('Gasto agregado correctamente', 'is-success', 'green')
            
            const gastoListado = document.querySelector('#gastos ul')

            const li = document.createElement('li')
            const span = document.createElement('span')
    
            li.innerHTML = nombreGasto
    
            span.classList.add('tag', 'is-primary')
            span.innerText = cantidadGasto
    
            li.appendChild(span)
            gastoListado.appendChild(li)
        }else{            
            ui.imprimirMensaje('No cuenta con saldo suficiente', 'is-warning')
        }      
    }

    imprimirMensaje(mensaje, tipo, color){
        const texto = document.getElementById('mensaje')
        notificacion.classList.add(tipo)
        texto.innerText = mensaje
        notificacion.style.background = color
        notificacion.style.display = 'block'
    }

    presupuestoRestante(cantidad){
        const restante = document.getElementById('restante')
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad)  
        const ui = new Interfaz()

        if(presupuestoRestanteUsuario >= 0){
         
            sw = 1
            ui.imprimirMensaje('Gasto agregado correctamente', 'is-success', 'green')           
            restante.innerHTML = `${presupuestoRestanteUsuario}$`
            
            const estilo = document.getElementById('notRestante')
            const botonEnviar = document.getElementById('botonEnviar')

            const val70p = (presupuestoUsuario * 70)/100
            const val40p = (presupuestoUsuario * 40)/100
            const val69p = (presupuestoUsuario * 69)/100
            const val39p = (presupuestoUsuario * 39)/100

            if(presupuestoRestanteUsuario >= val70p){
                estilo.classList.add('is-success')
            }else{
                if(presupuestoRestanteUsuario >= val40p && presupuestoRestanteUsuario <= val69p){
                    estilo.classList.add('is-warning')
                }else{
                    if(presupuestoRestanteUsuario <= val39p){
                    estilo.classList.add('is-danger')                   
                    }
                }
            }           
            if(presupuestoRestanteUsuario == 0){
                
                ui.imprimirMensaje('Se quedo con saldo cero', 'is-danger', 'red')                
                botonEnviar.disabled = true
            }
        }else{
            sw = 0            
            ui.imprimirMensaje('No cuenta con saldo suficiente', 'is-warning', 'red')
            cantidadPresupuesto.presupuestoRestanteSum(cantidad)
        }        
    }  
}

//Listeners
document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario == null || presupuestoUsuario == ''){
        window.location.reload()
    }else{
        console.log('Agregado correctamente')
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario)
        console.log(cantidadPresupuesto)

        const ui = new Interfaz()
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)
    }
})

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const nombreGasto = document.getElementById('gasto').value
    const cantidadGasto = document.getElementById('cantidad').value

    const ui = new Interfaz()

    if(nombreGasto == '' || cantidadGasto == '' || cantidadGasto <= '0'){
        ui.imprimirMensaje('Debe ingresar informacion valida', 'is-danger')
    }else{
        //ui.imprimirMensaje('Gasto agregado correctamente', 'is-success')
        ui.presupuestoRestante(cantidadGasto)
        ui.agregarGastoLista(nombreGasto, cantidadGasto)
    }
})

