const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Márcia', idade: 23, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

// Exercício 1d
const cargos = {
    estagiarios: colaboradores.filter(e => e.cargo === 'estagiario'),
    fronts: colaboradores.filter(e => e.cargo === 'front-end'),
    backs: colaboradores.filter(e => e.cargo === 'back-end'),
    designers: colaboradores.filter(e => e.cargo === 'designer'),
}
const all = cargos.estagiarios.concat(cargos.fronts, cargos.backs, cargos.designers)
console.log(all)