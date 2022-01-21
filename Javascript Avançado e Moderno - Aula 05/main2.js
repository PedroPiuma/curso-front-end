const value = 10

function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value !== 'number') {
                reject('Argumento não é um número')
            }
            resolve(value * 10)
        }, 2000)
    })
}

// Executar função p1()
p1().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('Final')
})