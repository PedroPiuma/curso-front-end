/** SPREAD OPERATOR
 * 
 * Operador unário.
 * 
 *  Símbolo: reticiências(...).
 * 
 * Usado em um array "espalha" os elementos do array
 * 
 * Podemos utilizar para criar uma cópia do array.
 */

const arr = [1, 2, 3, 4, 5]
console.log(arr[0], arr[1], arr[2], arr[3], arr[4])
console.log(...arr)

const array1 = [1, 2]
const array2 = [3, 4]
const arrayF = [...array1, ...array2]
console.log(arrayF)