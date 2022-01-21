/**
 * Promise.all([promise_1,...,promise_n]):
 *      Executa todas as promises do array.
 *      Encadeamos essa execução com then, catch, e/ou finally para realizar o tratamento.
 *      O argumento nas funções de callback será um array.
 * 
 * Promise.race([promise_1,...,promise_n]):
 *      Executa todas as promises do array.
 *      Encadeamos essa execução com then, catch, e/ou finally para realizar o tratamento.
 *      O argumento nas funções de callback será o resultado da promise que terminou primeiro.
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

const p2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolve p2')
        }, 1000)
    })

const p3 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolve p3')
        }, 3000)
    })

Promise.all([p1(), p2(), p3()])
    .then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        console.log('Final')
    })

Promise.race([p1(), p2(), p3()])
    .then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        console.log('Final')
    })