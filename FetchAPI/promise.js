// Promesas
/**
 * Es una nueva caracteristica dentro de javascript
 * Es un objeto que representa la respuesta o el fracaso de una operacion asincrona
    then() => llega informacion siempre y cuando tengamos una respuesta positiva
    catch() => llega el error
 * 
 Son la mejor alternativa a los callbacks, ya que cuando abusamos de ellos
 caemos en algo llamado callback hell, que es una anidacion muy dificil de
 mantener y seguir su flujo
 * 
 */

const aplicarDescuento = new Promise(function(resolve, reject){
   const descuento = true
   if(descuento){
      resolve('Descuento Aplicado')
   }else{
      reject('No se puede aplicar el descuento')
   }
})

aplicarDescuento.then(response=>{
   console.log(response)
}).catch(error =>{
   console.log(error)
})