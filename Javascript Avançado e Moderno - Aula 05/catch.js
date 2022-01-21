/** CATCH
 * 
 *  p.catch(callbackFalha)
 * 
 *  Argumento:
 *      Função de callback que será executada quando
 *      p terminar com falha(reject). Tem como argumento
 *      o valor rejeitado em p.
 * 
 *  Retorno:
 *      Pode retornar um valor ou uma promise.
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
})
