/** FINALLY
 * 
 *  p.finally(callback)
 * 
 *  Argumento:
 *      Função de callback que será executada quando p terminar. Não tem argumentos.
 * 
 *  Retorno: Retorna uma promise.
 * 
 */

const value = 10

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof value !== 'number') {
            reject('Argumento não é um número')
        }
        resolve(value * 10)
    }, 2000)
})


p1.then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('Final')
})