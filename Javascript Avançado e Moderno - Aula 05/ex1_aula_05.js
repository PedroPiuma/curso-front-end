// Exercício 1
const firstPromise =
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Primeira promise'))
        }, 2000)
    })

const secondPromise =
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Segunda promise'))
        }, 1000)
    })


const thirdPromise =
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(console.log('Terceira promise'))
        }, 3000)
    })
