/** FIND
 *  Método para percorrer os elementos do array
 *  buscando o PRIMEIRO que satisfaça a condição
 *  informada.
 * 
 *  Assinatura: 
 *  arr.find(callback[,thisArg]);
 * 
 *  Função de callback:
 *  retorno booleano
 * 
 *  Retorno:
 *  Elemento que satisfez a condição, caso exista.
 *  undefined caso contrário.
 */

const array = [1, -2, 3, -42, 50]

const findElem = array.find(elem => {
    return elem < 0
})

console.log(findElem) // -2 

console.log('---------------------------------------')

const findElem2 = array.find(elem => {
    return elem > 30
})
console.log(findElem2) // 50 








