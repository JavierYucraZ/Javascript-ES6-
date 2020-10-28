// Ciclos repetitivos
/*
Los ciclos son estructuras de control
con bastante utilidad y nos sirven
para estar repitiendo acciones

Se pueden reconocer con distintos nombres
pero los mas comunes son

Ciclos, Loops, Iteradores

Tenemos dos tipos de ciclos

Ciclos definidos
 este tipo de ciclos son aquellos en los que nosotros sabemos
 de antemano hasta donde llega su limite

Ciclos indefinidos
 Son unos ciclos un poco mas especiales y debemos tener cuidado
 en no caer en las repeticiones infinitas, pues si el proceso es
 muy complejo puede sobrecargar la memoria y lograr que nuestro cliente
 o incluso la maquina entera deje de funcionar
 Su limite solo se puede evaluar gracias a una condicion
*/

//For tradicional
let contador = 5
for(let indice = 0 ; indice < contador ; indice++){
	console.log(`Producto # : ${indice}`)
}


//For Invertido
for(let indice = contador; indice > 0; indice--){
	console.log(`Producto # : ${indice}`)
}

//Controlar las iteraciones
/*
continue nos permite continuar con la iteracion evitando todo lo que venga por debajo
break nos permite romper y salir del ciclo*/
for (let i = 0; i < 10; i++) {
	if (i % 2 == 0) {
		console.log('Seguimos en el ciclo, indice : ' +i)
		continue
	}else if(i == 9){
		console.log('Rompiendo ciclo')
		break
	}
	console.log(i)
}

const productos = ['Camisa', 'Pantalon', 'Polera', 'Gorra', 'Tenis']
for(let i = 0; i < productos.length; i++){
	console.log(`Tu producto ${productos[i]} fue agregado al carrito`)
}

//For of, devuelve un elemento de un arreglo sin necesidad de darle un limite
for(producto of productos){
	console.log(producto)
}

//For in, devuelve el indice del elemento de un arreglo sin necesidad de darle el limite
//El indice lo retorna como un string
for(indice in productos){
	console.log(Number(indice)+1, productos[indice])
}

const pendientes = ['Investigacion', 'Proyecto', 'Ver mi serie', 'Revisar correo', 'Salir  de compras']
//for each
pendientes.forEach( (pendiente) => {
	console.log(pendiente)
})

pendientes.forEach( (pendiente, index) => {
	console.log(index, pendiente)
})


// const stockCelulares = [
// 	{id : 1, marca : 'Xiaomi', modelo : 'Redmi note 10'},
// 	{id : 2, marca : 'Samsung', modelo : 'Galaxy A50'},
// 	{id : 3, marca : 'Huawei', modelo : 'Mate 20 Pro'},
// 	{id : 4, marca : 'Motorola', modelo : 'G8 Plus'}
// ]



// While
// Si la condicion no se cumple, no se ejecuta el codigo
let iterador = 1
let bandera = true
while(bandera){
	if (iterador % 7) {
		console.log('Seguimos en el ciclo ' +iterador)
	}else{
		bandera = false
	}
	iterador++
}

bandera = true
iterador = 1
//Ingresa al menos una vez al ciclo, aunque la condicion no se cumpla
do{
	if (iterador % 7) {
		console.log('Ingresa al menos una vez : ' +iterador)
	}else{
		bandera = false
	}
	iterador++
}while(bandera)


// Clases y objetos