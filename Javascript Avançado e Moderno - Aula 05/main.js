/** PROMISES
 *  O que está indicando que a Promise
 *  foi resolvido é o chamado da função resolve()
 * 
 *  Caso a Promise tenha sido quebrada
 *  deve ser chamado a função reject()
 * 
 */

const p1 = new Promise((resolve, reject) => {
    resolve('Sucesso!')
    //reject("Erro!")
})
console.log(p1)
console.log('-----------------------------------------')

// Função setTimeout recebe uma função e o tempo em milissegundos
setTimeout(() => {
    console.log('Hello World')
    console.log('-----------------------------------------')
}, 2000)

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Sucesso!'))
    }, 3000)
    //reject("Erro!")
})
console.log(p2)
console.log('-----------------------------------------')
