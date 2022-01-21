/** THEN
 * 
 *  p.then(callbackSucesso)
 *  
 *  Argumento callbackSucesso:
 *      Função de callback que será executada quando p terminar com sucesso(resolve).
 *      Tem como argumento o valor resolvido em p.
 * 
 *  Retorno:
 *      Pode retornar um valor ou uma promise.
 * 
 */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso')
    }, 2000)
})
// -- Barreira de sincronia

// Nesse ambiente controlado se tem sincronia
p1.then(resp => {
    console.log(resp)
})
// Fim do ambiente controlado