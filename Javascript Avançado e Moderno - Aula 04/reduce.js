/** REDUCE
 *  Método que percorre os elementos do array 
 *  e realiza uma redução resultando em um único valor.
 * 
 *  Assinatura:
 *      arr.reduce(callback[,valorinical])
 * 
 *  Parâmetros:
 *      callback: função de callback que será executada
 *      para cada um dos elementos (obrigatório).
 * 
 *      valorInicial: valor que será usado como 
 *      primeiro argumento na chamada da função de callback na primeira execução.
 * 
 *  Retorna:
 *  Valor resultado da redução.
 * 
 *  Função de callback:
 *      Parâmentros:
 *          acc = acumulador         
 * 
 *          acc(obrigatório): valor inicial ou valor retornado 
 *          pela execução da função de callback no elemento anterior.
 *          
 *          currentValue(obrigatório): elemento que está sendo iterado.
 * 
 *          index(opcional)
 *          array(opcional)
 *      
 *      Retorno: 
 *          Valor que será o novo acc para o próximo elemento iterado.
 *          Caso última iteração, será o valor que o método reduce
 *          retornará.
 */

const array = [1, -2, 3, -42, 50]

const sum = array.reduce((acc, elem) => {
    return acc + elem
}, 0)

/*       acc | elem
1o.        0 + 1
2o.        1 + (-2)
3o.       -1 + 3 
4o.        2 + (-42)
5o.      -40 + 50 
*/

console.log(sum) //10

console.log('--------------------------------------')

const arrayNum = [-42, -100, -8.5, 20, 200, 20]
console.log(arrayNum)

const sum2 = arrayNum.reduce((acc, elem) => {
    console.log('acc:', acc, '| elem:', elem)
    return acc + elem
}, 0)
console.log(sum2)

console.log('--------------------------------------')

const sum3 = arrayNum.reduce(
    (acc, elem) => {
        console.log('acc:', acc)

        if (elem < 0) {
            acc.negativos.push(elem)
        } else {
            acc.positivos.push(elem)
        }

        return acc
    },
    {
        negativos: [],
        positivos: [],
    },
    0)

console.log(sum3)
