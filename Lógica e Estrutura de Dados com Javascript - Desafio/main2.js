let myOrders = [
    { nome: 'Juca', idade: 25, cargo: 'front-end' },
    { nome: 'Márcia', idade: 23, cargo: 'back-end' },
    { nome: 'Victória', idade: 28, cargo: 'designer' },
    { nome: 'Luís', idade: 22, cargo: 'estudante da otterwise' },
    { nome: 'Silvia', idade: 53, cargo: 'professora' },
    { nome: 'Neusa', idade: 83, cargo: 'aposentada' },
    { nome: 'Felipe', idade: 20, cargo: 'estudante' }
]

const indexTotal = Number(myOrders.length)

function orderUsers(obj) {
    let gaveta

    for (let i = 0; i < indexTotal; i++) {
        for (let j = 0; j < indexTotal; j++) {
            if (obj[i].idade <= obj[j].idade) {
                gaveta = obj[i]
                obj[i] = obj[j]
                obj[j] = gaveta
            }
        }
    }

    return console.log(obj)

}
orderUsers(myOrders)