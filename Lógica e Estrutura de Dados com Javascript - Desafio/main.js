const myOrders = [
    { nome: 'Juca', idade: 25, cargo: 'front-end' },
    { nome: 'Márcia', idade: 23, cargo: 'back-end' },
    { nome: 'Victória', idade: 28, cargo: 'designer' },
]

function orderUsers(arrayDeObj) {
    let gaveta

    if (arrayDeObj[0].idade > arrayDeObj[1].idade) {
        gaveta = arrayDeObj[0]
        arrayDeObj[0] = arrayDeObj[1]
        arrayDeObj[1] = gaveta
    }

    if (arrayDeObj[1].idade > arrayDeObj[2].idade) {
        gaveta = arrayDeObj[1]
        arrayDeObj[1] = arrayDeObj[2]
        arrayDeObj[2] = gaveta
    }

    return arrayDeObj
}

console.log(orderUsers(myOrders))