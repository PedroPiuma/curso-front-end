const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Márcia', idade: 23, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

// Exercício 1b
let novaLista = []
const newListGenerator = userList => {
    for (let i; userList.length; i++) {
        ageOrder(userList)
    }
}

const ageOrder = userList => {
    let gaveta = userList[0]
    let index
    const maisVelho = userList.map(e => {
        if (e.idade >= gaveta.idade) {
            index = userList.indexOf(e)
            gaveta = e
        }
    })
    userList.splice(index, 1)
    return novaLista.push(gaveta)
}
newListGenerator(colaboradores)
console.log(novaLista)