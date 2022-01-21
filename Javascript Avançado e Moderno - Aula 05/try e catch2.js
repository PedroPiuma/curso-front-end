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
            reject('Reject p3')
        }, 3000)
    })

const execPromise = async () => {
    try {
        const resp = await p3()
        console.log('try: ', resp)
    } catch (error) {
        console.log('catch: ', error)
    } finally {
        console.log('Final')
        console.log('---------------------------------')
    }
}
execPromise()

const execPromise2 = async () => {
    try {
        const resp = await p1()
        const resp2 = await p2()
        console.log('resp p1: ', resp)
        console.log('resp p2: ', resp2)
    } catch (error) {
        console.log('catch: ', error)
    } finally {
        console.log('Final')
        console.log('---------------------------------')
    }
}
execPromise2()