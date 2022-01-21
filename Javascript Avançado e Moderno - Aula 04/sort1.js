/** SORT
 *  Método de ordenação do array.
 * 
 *  Assinatura:
 *      arr.sort([funcDeComparacao]);
 * 
 *  Parâmetro:
 *      Função de callback que irá comparar dois 
 *      elementos identificando a precedência entre eles.
 * 
 *  Retorno:
 *      Array ordenado (mesmo assim altera o array original).
 * 
 *  Função de callback:
 *      Utilizada para identificar qual a precedência entre
 *      dois elementos do array.
 * 
 *  Retorno:
 *      Número negativo: caso firstElem deva aparecer ANTES
 *      de sencodElem no array ordenado.
 * 
 *      Número posito: caso firstElem deva aparecer DEPOIS
 *      de sencodElem no array ordenado.
 * 
 *      Zero: Caso não haja diferença de precedência entre
 *      firstElem e secondElem.
 */

const array = [1, -2, 3, -42, 50]

const sortedArray = array.sort((a, b) => {
    if (a - b < 0) return -1
    if (a - b > 0) return 1
    return 0
})

console.log(array)
console.log(sortedArray) // [ -42, -2, 1, 3, 50 ]

console.log('-------------------------------------------')

// sort sem argumentos ordem em ordem alfa numérica, ordem alfabética
const arrayNum = [-42, -100, -8.5, 20, 200, 65.65]
const sortedArray2 = arrayNum.sort()

console.log(sortedArray2)

console.log('-------------------------------------------')

const arrayNum2 = [-42, -100, -8.5, 20, 200, 65.65]
const sortedArray3 = arrayNum2.sort((a, b) => {
    if (a < b) return -1 // precendência de a aparecer ANTES do b
    if (a > b) return 1 // precendência de a aparecer DEPOIS do b
    if (a === b) return 0
})

console.log(sortedArray3)