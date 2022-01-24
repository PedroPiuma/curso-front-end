/** REST PARAMETER
 * 
 * Caso especial do uso do rest operator
 * em uma declaração de função para acumular
 * valores passados em um array de parâmetros.
 * 
 * Deve ser o último parâmetro.
 * 
 */

const functionRest = (a, b, ...rest) => console.log(rest)
functionRest(1, 2, 3, 4, 5, 6, 7)