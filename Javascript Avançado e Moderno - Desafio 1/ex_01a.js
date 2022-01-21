const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Márcia', idade: 23, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

// Exercício 1a

const cargos = {
    'front-end': (colaboradores.filter(item => item.cargo === 'front-end')).length,
    'back-end': (colaboradores.filter(item => item.cargo === 'back-end')).length,
    'designer': (colaboradores.filter(item => item.cargo === 'designer')).length,
    'estagiario': (colaboradores.filter(item => item.cargo === 'estagiario')).length,
}

// console.log(Object.entries(cargos))
console.log(cargos)
