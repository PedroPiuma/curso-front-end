/** EVERY
 *  Método que percorre os elementos do array e
 *  informa se TODOS eles satisfazem uma condição.
 * 
 *  Assinatura:
 *  arr.every(callback[,thisArg]);
 * 
 *  Função de callback:
 *  retorna true ou false
 * 
 *  Retorna:
 *  true ou false
 */

const array = [1, -2, 3, -42, 50]

const everyLessThan0 = array.every(elem => {
    return elem < 0
})

console.log(everyLessThan0) //  false

console.log('-------------------------------------')

const array2 = [
    { name: 'Luís', age: 22, },
    { name: 'Juca', age: 21, },
    { name: 'Márcia', age: 24, },
]

const everyElem = array2.every(elem => elem.age > 20)
console.log(everyElem)

console.log('-------------------------------------')

const arrayNum = [0, 1, 2, 3, 4, 5]
const everyElem2 = arrayNum.every(elem => elem)
console.log(everyElem2) // false
// retorna false porque zero é booleano false