function checkZero(num) {

    let validacao = String(num === 0)

    const troca = `${validacao.replace('true', `${num} é igual a zero`)}`
    const troca2 = `${validacao.replace('false', `${num} não é igual a zero`)}`

    console.log(`${troca}`)
    console.log(`${troca2}`)

}

checkZero(0)