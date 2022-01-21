const installments = [
    { installments_number: 1, value: 123.45, status: 'Pago' },
    { installments_number: 2, value: 139.88, status: 'Pago' },
    { installments_number: 3, value: 123.45, status: 'Pago' },
    { installments_number: 4, value: 182.37, status: 'Aberto' },
    { installments_number: 5, value: 133.93, status: 'Aberto' },
]

// Exercício 2a
console.log(installments.length)
console.log('FIM DO EXERCÍCIO 2A')
console.log('----------------------------------------------------')

// Exercício 2b
function defValores(parcelas) {
    let resultadoPago = null
    let resultadoAberto = null

    const a = parcelas.map(e => {
        if (e.status === 'Pago') {
            resultadoPago += e.value
        } else {
            resultadoAberto += e.value
        }
    })

    const resultFinal = {
        total_paid: resultadoPago,
        total_open: resultadoAberto,
    }

    return resultFinal
}
console.log(defValores(installments))
console.log('FIM DO EXERCÍCIO 2B')
console.log('----------------------------------------------------')

// Exercício 2c
function descOrder(parcelas) {
    let gaveta = null
    for (let i = 0; i < parcelas.length; i++) {
        for (let j = 0; j < parcelas.length; j++) {
            if (parcelas[i].value >= parcelas[j].value) {
                gaveta = parcelas[i]
                parcelas[i] = parcelas[j]
                parcelas[j] = gaveta
            }
        }
    }
    return parcelas
}
console.log(descOrder(installments))
console.log('FIM DO EXERCÍCIO 2C')
console.log('----------------------------------------------------')

// Exercício 2d

function desempatador(array) {
    let objParaTroca

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].value === array[j].value && array[i].installments_number !== array[j].installments_number) {
                objParaTroca = [array[i], array[j]]
                ordenadorDosNumeros(objParaTroca)

                array[i] = objParaTroca[0]
                array[j] = objParaTroca[1]
            }
        }

    }
}

function ordenadorDosNumeros(array) {
    return array.sort((acc, elem) => acc.installments_number - elem.installments_number)
}

function crescOrder(parcelas) {
    let gaveta = null
    for (let i = 0; i < parcelas.length; i++) {
        for (let j = 0; j < parcelas.length; j++) {
            if (parcelas[i].value <= parcelas[j].value) {
                gaveta = parcelas[i]
                parcelas[i] = parcelas[j]
                parcelas[j] = gaveta
            }
        }
    }
    desempatador(parcelas)
    return parcelas
}
console.log(crescOrder(installments))
console.log('FIM DO EXERCÍCIO 2D')
console.log('----------------------------------------------------')
