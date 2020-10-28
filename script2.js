// Variables dinamicas
let dato1 = 'Javier'
console.log(typeof dato1, dato1)

dato1 = 25
console.log(typeof dato1, dato1)

dato1 = true
console.log(typeof dato1, dato1)

dato1 = Array('Javier', 25, true)
console.log(typeof dato1, dato1)

let dato2, dato3

dato2 = new String('Javier')
dato3 = new Number(70190260)

console.log(dato2, dato3)

dato2 = 17
dato3 = 'Javier'

console.log(dato2, dato3)

// const PI = 3.1416

// console.log(PI)

// PI = 3

// console.log(PI)

console.log('Hola mundo, "estoy usando comillas dobles" ')


// Cadenas y sus propiedades
/*
Cuando empezamos a crear cadenas de texto, estas al ser
hijas de un objeto superior, heredan ciertas caracteristicas que podemos utilizar
*/

// Conteo de caracteres
let password = '123qweasdzxc'
console.log(password.length)
// Concatenacion mediante metodo
let nombre = "Javier"
console.log(nombre.concat(' Yucra'))
// UpperCase
let may = "esto esta en mayusculas"
let min = "ESTO ESTA EN MINUSCULAS"
// Esto se considera como metodos, ya que debemos utilizar parentesis para que se pueda ejecutar
console.log(may.toUpperCase())
console.log(min.toLowerCase())
// Busqueda de posicion de una palabra o caracter
let frase = "todos los pulgares son dedos, pero no todos los dedos son pulgares"
console.log(frase.indexOf('pulgares', 20))
console.log(frase.lastIndexOf('pulgares'))
// Subcadenas(inicio, final)
console.log(frase.substring(15,25))
console.log(frase.slice(-5))
console.log(frase.slice(5,25))
//Pero slice se usa mas en arrays

// Split, transforma un string a un arreglo, separando y eliminando
// por la condicion que indiquemos
console.log(frase.split(" "))
// Reemplazando palabras
console.log(frase.replace('pulgares', 'meniques'))
// Verificar si existe una palabra o caracter
console.log(frase.includes('todos'))
// Repetir caracteres
console.log(nombre.repeat(5))

// Considero que estas son las operaciones mas basicas o mas fundamentales
// que podemos utilizar cuando estamos trabajando con cadenas
// investigar al menos 3 metodos mas que podemos utilizar con cadenas
