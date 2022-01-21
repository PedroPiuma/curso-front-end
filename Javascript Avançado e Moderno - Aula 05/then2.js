const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso')
    }, 2000)
})

p1.then(resp => {
    console.log(resp)
    return 'Terminou'
}).then((resp) => {
    console.log(resp)
})
