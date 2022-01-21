/** Função Assíncrona
 * 
 *  Substitui o then no tratamento de Promises.
 *  A chamada de uma função assíncrona retorna uma Promise.
 * 
 */

const value = 10

const p1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value !== 'number') {
                reject('Argumento não é um número')
            }
            resolve(value * 10)
        }, 2000)
    })

async function asyncFunction() {
    const resp = await p1()
    console.log(resp)
}

asyncFunction()

