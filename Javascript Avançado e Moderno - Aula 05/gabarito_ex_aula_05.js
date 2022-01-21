// Exercíco 1
const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve em 2 segundos')
    }, 2000)
})

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve em 1 segundos')
    }, 1000)
})

const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Reject em 3 segundos')
    }, 3000)
})

// Exercício 2
const promiseAll = async () => {
    try {
        const response = await Promise.all([promise1(), promise2(), promise3()])
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}
promiseAll()

// Exercício 3
const promiseRace = async () => {
    try {
        const response = await Promise.race([promise1(), promise2(), promise3()])
        console.log(response)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Corrida finalizada')
    }
}
promiseRace()