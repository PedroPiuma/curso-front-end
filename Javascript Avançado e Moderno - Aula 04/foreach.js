/** FOR EACH
 *  Método para percorrer os elementos do array
 *  sem propósito específico, na maior parte 
 *  dos casos pode ser substituído por um método
 *  específica
 * 
 *  Assinatura:
 *  arr.forEach(callback[,thisArg])
 * 
 *  Retorno:
 *  undefined(sempre!)
 */

// Substituir for let i

const array = [10, 20, 30, 40, 50]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log('---------------------------------------')

function imprime(value) {
    console.log(value)
}

array.forEach(imprime)

console.log('---------------------------------------')

array.forEach(function (value) {
    console.log(value)
})

console.log('---------------------------------------')

array.forEach(value => console.log(value))

console.log('---------------------------------------')

array.forEach((value, i, originalArray) => console.log(`${i}: ${value}`, originalArray))

console.log('---------------------------------------')

array.forEach((value, i) => console.log(`${i}: ${value}`, array))
