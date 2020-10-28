//Arreglos
const numeros = [1,2,3,4,5]
console.log(numeros)

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril')
console.log(meses)

//mostrar los elementos interiores de un arreglo
console.log(meses.join())

//Tamaño del arreglo
console.log(meses.length)

//verificar que realmente sea un arreglo
console.log(Array.isArray(meses))

//obtener solo una posicion
console.log(meses[3])

//agregar un nuevo elemento al final del arreglo
meses.push('Mayo')
console.log(meses)

//agregar un nuevo elemento al inicio del arreglo
meses.unshift('Mes 0')
console.log(meses)

//eliminar el ultimo elemento de un arreglo
meses.pop()
console.log(meses)

//eliminar el primer elemento del arreglo
meses.shift()
console.log(meses)

//eliminar varios elementos indicando inicio y final
meses.splice(2,2)
console.log(meses)

//invertir un arreglo
meses.reverse()
console.log(meses)

//buscar el indice de un elemento
console.log(meses.indexOf('Enero'))

//ordenar un arreglo
const frutas = ['Manzana', 'Platano', 'Sandia', 'Kiwi', 'Naranja']
console.log(frutas.sort())

//Ordenar numeros, no funciona de la misma manera que cuando usamos textos
//ya que el metodo sort, ordena empezando por el primer caracter y no por su valor
const numerico = [91,2,0,45,7,10,1,20]

console.log(numerico.sort(function(a,b){return a - b}))

/*Cuando nosotros declaramos un arreglo como constante, significa que no puede
cambiar, pero en este caso, lo que no puede cambiar es el arreglo total*/
const arrConstante = [1,2,3]
console.log(arrConstante)

//Pero si podemos cambiar los elementos por separado, eliminar y agregar
arrConstante[2] = 4
console.log(arrConstante)

