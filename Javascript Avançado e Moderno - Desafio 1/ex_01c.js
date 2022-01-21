const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Márcia', idade: 23, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

// Exercício 1c

function ordemCargos(arrayColab) {
    const conversaoDeCargoPNumero = arrayColab.map(el => {
        if (el.cargo === 'estagiario') {
            el.cargo = -2
        } else if (el.cargo === 'front-end') {
            el.cargo = -1
        } else if (el.cargo === 'back-end') {
            el.cargo = 1
        } else {
            el.cargo = 2
        }
    })

    const ordenacaoDosCargos = arrayColab.sort((acc, elem) => acc.cargo - elem.cargo);

    const conversaoDeNumeroPCargo = arrayColab.map(el => {
        if (el.cargo === -2) {
            el.cargo = 'estagiario'
        } else if (el.cargo === -1) {
            el.cargo = 'front-end'
        } else if (el.cargo === 1) {
            el.cargo = 'back-end'
        } else {
            el.cargo = 'designer'
        }
    })

    return console.log(ordenacaoDosCargos)

}
ordemCargos(colaboradores)