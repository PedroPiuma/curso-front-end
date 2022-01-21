const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Márcia', idade: 23, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

// Exercício 1d
let maisVelho = [['user', 200, 'default']]
console.log(maisVelho[maisVelho.length - 1][1])

const criadorDeArray = colaboradores.map(e => {
    if (e.idade <= maisVelho[maisVelho.length - 1][1])
        return maisVelho.push(Object.values(e))
})

console.log(maisVelho)

