/** SOME
 * 
 *  Só um método, pra saber se existe ou não
 * 
 *  Método para percorrer os elementos para saber
 *  se existe algum que satisfaça a condição
 *  informada.
 * 
 *  Assinatura:
 *  arr.some(callback[,thisArg]);
 * 
 *  Função de callback:
 *  retorna true ou false
 * 
 *  Retorno:
 *  true ou false
 */

const array = [1, -2, 3, -42, 50]

const hasElem = array.some(elem => {
    return elem < 0
})

console.log(hasElem) // true

console.log('-------------------------------------')

const array2 = [
    { name: 'Luís', age: 22, },
    { name: 'Juca', age: 21, },
    { name: 'Márcia', age: 24, },
]

const hasElem2 = array2.some(elem => elem.age < 25)
console.log(hasElem2)