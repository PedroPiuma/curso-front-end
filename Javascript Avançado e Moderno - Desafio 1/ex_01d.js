const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Jucassauro', idade: 25, cargo: 'designer', },
    { name: 'Roselaine', idade: 25, cargo: 'estagiario', },
    { name: 'Márcia', idade: 23, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

// Exercício 1d: Idade crescente com precedência de cargo

const indexTotal = Number(colaboradores.length)

// FUNCÇÔES AUXILIARES
// Função de ordenar idade de modo crescente
function orderAge(obj) {
    let gaveta
    for (let i = 0; i < indexTotal; i++) {
        for (let j = 0; j < indexTotal; j++) {
            if (obj[i].idade <= obj[j].idade) {
                gaveta = obj[i]
                obj[i] = obj[j]
                obj[j] = gaveta
            } else if (obj[i].idade <= obj[j].idade && obj[i].cargo === obj[j].cargo) {
                gaveta = obj[i]
                obj[i] = obj[j]
                obj[j] = gaveta
            }
        }
    }

    return obj
}

// Função de converter cargo para número
function conversorDeCargoParaNumero(arrayColab) {
    return arrayColab.map(el => {
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
}

// Função de organizar cargos numéricos de modo crescente
function ordenadorDosNumeros(array) {
    return array.sort((acc, elem) => acc.cargo - elem.cargo)
}

// Função de converter novamente os cargos nunméricos de numéros para cargos
function reConversorParaCargo(array) {
    return array.map(el => {
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
}

// FUNÇÃO PRINCIPAL : THE BOSS HIGH-ORDER FUNCTION
function orderUsers(array) {
    // Chama função de idade.
    orderAge(array)

    // Cria variável para troca de posições.
    let objParaTroca

    // Itera dois laços, de modo que, primeiro elemento com cada outro elemento.
    for (let i = 0; i < indexTotal; i++) {
        for (let j = 0; j < indexTotal; j++) {
            // Caso idades iguais e diferentes cargos:
            if ((array[i].idade === array[j].idade) && array[i].cargo !== array[j].cargo) {

                // Define a variável para troca de posições.
                objParaTroca = [array[i], array[j]]

                // Chama as funções auxiliares para organizar a novo variável declarada.
                conversorDeCargoParaNumero(objParaTroca)
                ordenadorDosNumeros(objParaTroca)
                reConversorParaCargo(objParaTroca)

                // Altera posições com precedência de cargo
                array[i] = objParaTroca[1]
                array[j] = objParaTroca[0]

            }
        }
    }

}
orderUsers(colaboradores)
console.log(colaboradores)
