/** Podemos ignorar os elementos a direita que não queremos
 *  desestruturar.
 * 
 *  Podemos "pular" elementos que não queremos com vírgula.
 * 
 */

const numeros = [1, 2, 3]
const [a, , c] = numeros
console.log(a, c)

const array = [1, 2, 3, 4, 5]
let [, , number] = array
console.log(number)