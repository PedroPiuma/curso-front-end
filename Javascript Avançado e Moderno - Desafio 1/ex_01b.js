const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Márcia', idade: 23, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

// Exercício 1b

const indexTotal = Number(colaboradores.length)

function orderUsers(obj) {
    let gaveta

    for (let i = 0; i < indexTotal; i++) {
        for (let j = 0; j < indexTotal; j++) {
            if (obj[i].idade >= obj[j].idade) {
                gaveta = obj[i]
                obj[i] = obj[j]
                obj[j] = gaveta
            }
        }
    }

    return console.log(obj)

}
orderUsers(colaboradores)