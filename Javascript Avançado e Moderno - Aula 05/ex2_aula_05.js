// Exercício 2
const assyncFunction = async () => {
    const firstPromise = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Primeira promise')
            }, 2000)
        })

    const secondPromise = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Segunda promise')
            }, 1000)
        })


    const thirdPromise = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Terceira promise')
            }, 3000)
        })

    Promise.all([firstPromise(), secondPromise(), thirdPromise()])
        .then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            console.log('Final')
        })
}
assyncFunction()
