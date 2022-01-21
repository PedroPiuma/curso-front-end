/** MAP
 *  Método que percorre os elementos do array e
 *  e cria um novo array modificando ou
 *  mapeando os elementos do array original
 *  à partir da função passada como argumento.
 *  
 *  Não altera o array original
 * 
 *  Assinatura:
 *  arr.map(callback[,thisArg]);
 * 
 *  Retorno:
 *  Novo array com os elementos modificados
 */

const array = [1, 2, 3, 4, 5]

const mappedArray = array.map(elem => {
    return elem * 10
})

console.log(array)
console.log(mappedArray) // [ 10, 20, 30, 40, 50 ]

console.log('-----------------------------------')

