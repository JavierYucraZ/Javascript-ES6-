console.time('temporizador')
document.getElementById('subtitulo').innerHTML = "Manipulamos nuestra pagina desde un archivo externo"

//Aca ya tienen mucha mas importancia los comentarios
//porque al ser un lenguaje de programacion, hay muchas cosas que podemos olvidar
//o simplemente dejar de entender despues de un tiempo

/*Tipos de datos
Undefined -> indica un valor no definido
Boolean -> valores condicionales(verdadero o falso)
Null -> indica un valor invalido
Number -> valores numericos
String -> cadenas de texto
Symbol -> los simbolos son valores que nunca pueden cambiar una vez se definen
Object -> Object es el padre de todos estos tipos de datos
todos heredan propiedades que un object les otorga

*/

// Tipos de comentarios

//Comentario de linea, se utilizan para agregar un comentario basico o corto

/*
Comentario de bloque
Se utiliza para agregar comentarios mas extensos
explicando la funcionalidad que declaramos,
ademas estos comentarios no tienen ningun efecto en nuestro codigo final
ya que simplemente el compilador no los interpreta
*/

//Variables y constantes

/*Que son las variables
Son espacios que podemos reservar en memoria para guardar algun tipo de informacion 
y ademas que pueda cambiar segun necesitemos
pero teniendo en cuenta que estamos trabajando con memoria volatil, eso quiere decir
que los datos se pierden con ciertas acciones
*/
/*Que son las constantes
Tiene el mismo concepto que las variables, solo que en este caso, la informacion no se
puede cambiar


Ademas vale aclarar, que nosotros no definimos casi nunca el tipo de dato que manejamos
ya que estos se asignan de manera dinamica cuando los declaramos
*/

/*Para este ejemplo empezaremos utilizando uno de los metodos
que tenemos para poder interactuar con el usuario, se lo conoce como prompt
y es un pequeño formulario que podemos generar desde javascript para
que el usuario escriba algo y nosotros lo podemos capturar en nuestro programa*/

let nombre = prompt('Cual es tu nombre?')
let edad = prompt('Cual es tu edad?')

document.getElementById('datos').innerHTML = `Hola ${nombre}, tu edad es ${edad}`
// "Hola "+nombre+" tu edad es : "+edad



/*Consola de desarrollo
Utilizamos la consola para poder hacer debug de nuestra aplicacion
ahi podemos ver valores, cambios, funciones, diferentes elementos
que podrian estar fallando y asi darnos cuenta del error o simplemente
hacer pruebas de ejecucion*/

console.log(typeof nombre)
console.log(typeof edad)
console.error('Sucedio algun error en desarrollo')
console.warn('Atencion, esto es una alerta')
console.timeEnd('temporizador')

/*
Cuando empezamos a trabajar con lenguajes de programacion
somos libres de nombrar nuestras variables, constantes, clases, objetos.. como a nosotros
mejor nos parezca, pero para mantener un poco el orden, ademas de poder
interpretar lo que otros programadores realizan, ademas que nos acostumbramos
a las buenas practicas y asi nuestro mismo codigo es mas legible y mantenible, 
existe una especie de estandar o nomenclatura que deberiamos seguir

Las mas utilizadas son
Upper Case -> ESCRIBIR TODO EN MAYUSCULA(para constantes) 
Lower Case -> escribir todo en minuscula(para variables de una sola palabra)

Camel Case -> Haciendo una comparacion con las jorobas de los camellos
escribimos cada siguiente palabra empezando por mayuscula
 Upper Camel Case -> EstoEsUpperCamelCase
 Lower Camel Case -> estoEsLowerCamelCase
Snake Case -> vamos separando las palabras por guiones bajos
 Upper Snake Case -> ESTO_ES_UPPER_SNAKE_CASE(uso para constantes)
 Lower Snake Case -> esto_es_lower_snake_case
Kebab Case -> para separar las palabras usamos guiones medios
 esto-es-kebab-case

Obviamente esto ya es libre de interpretacion, no es algo definido
lo podemos utilizar como a nosotros mejor nos parezca
*/

