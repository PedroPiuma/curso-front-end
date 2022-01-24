function formatter(data) {
    const { clientes } = data
    const { purchases } = data
    let gaveta = []

    // A seguir o JS conseguiu calcular valores através de numeros com tipo string.
    // Porém user Number para modificar e garantir.
    const purchasesOrderDia = purchases.sort((acc, el) => Number(acc.data.slice(0, 2)) - Number(el.data.slice(0, 2))) // Gera array ordenado por dias
    const purchasesOrdenados = purchasesOrderDia.sort((acc, el) => Number(acc.data.slice(3, 5)) - Number(el.data.slice(3, 5))) // Gera array ordenado por meses

    const id = clientes.forEach(e => { // itera os clientes
        console.log('')
        const linha1 = `Cliente: ${e.id} - ${e.name}`
        console.log(linha1)

        let soma = 0
        purchasesOrdenados.forEach(el => { // Dentro da iteração dos clientes itera os purchases já ordenados por dia e mês.
            if (e.id === el.client_id) {
                soma += el.total    // Soma registra o valor das compras e zera ao fim da itereção de cada cliente.
                const linha2 = `Compra em ${el.data} no total de R$ ${String(el.total.toFixed(2).slice(0, -3))},${String(el.total.toFixed(2).slice(-2))}.` // Troca o ponto pela vírgula.
                console.log('')
                console.log(linha2)
                gaveta.push(el)
            }
        })

        const linha3 = `Total do cliente: R$ ${String(soma).slice(0, -3)},${String(soma).slice(-2)}` // Transforma a soma em string para mudar ponto para vírgulas.
        console.log('')
        console.log(linha3)
        console.log('')
        console.log('')

    })

}

export default formatter