/** FILTER
 *  Método que percore os elementos do array
 *  e cria um novo array contendo SOMENTE
 *  os elementos que satisfaçam uma condição.
 * 
 *  Assinatura:
 *  arr.filter(callback[,thisArg]);
 * 
 *  Função de callback:
 *  retorno booleano
 * 
 *  Retorno:
 *  Novo array com os elementos que satisfizeram a condição.
 */

const array = [1, -2, 3, -42, 50]

const filteredArray = array.filter(elem => {
    return elem < 0
})

console.log(filteredArray) // [ -2, -42 ]

console.log('--------------------------------------------')

const array2 = [
    { name: 'Luís', age: 22, },
    { name: 'Juca', age: 21, },
    { name: 'Márcia', age: 24, },
]

const filteredArray2 = array2.filter(elem => {
    return elem.age < 23
})

console.log(array2)
console.log(filteredArray2)


