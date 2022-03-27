// + 43
// - 45
// * 42
// / 47
// = 61

window.onload = () => {
    calculadora()
}

let memoria = []
function calculadora() {
    const visor = document.querySelector('#visor')
    const valorSalvo = document.querySelector('#valorSalvo')
    const formulario = document.querySelector('#formulario')

    formulario.addEventListener('click', e => e.preventDefault()) // cancel refresh

    const keyCode = e => {
        switch (e.keyCode) {
            case 43:
                memoria.push(Number(visor.value))
                const soma = memoria.reduce((acc, elem) => { return acc + elem }, 0)
                visor.value = soma
                valorSalvo.innerText = `Valor salvo: ${soma}`
                break
            case 45:
                memoria.push(Number(visor.value))
                const subtracao = memoria.reduce((acc, elem) => { return acc - elem })
                visor.value = subtracao
                valorSalvo.innerText = `Valor salvo: ${subtracao}`
                break
            case 42:
                memoria.push(Number(visor.value))
                const multiplicacao = memoria.reduce((acc, elem) => { return acc * elem })
                visor.value = multiplicacao
                valorSalvo.innerText = `Valor salvo: ${multiplicacao}`
                break
            case 47:
                memoria.push(Number(visor.value))
                const divisao = memoria.reduce((acc, elem) => { return acc / elem })
                visor.value = divisao
                valorSalvo.innerText = `Valor salvo: ${divisao}`
                break
            default:
                console.log('P')
        }
    }

    const capturaClick = e => {
        const target = e.target.innerText
        console.log(target)
        switch (target) {
            case 'C':
                visor.value = ''
                valorSalvo.innerText = `Resultado: `
                memoria = []
                break
        }
    }

    const tecla = document.addEventListener('keypress', keyCode)
    const click = document.body.addEventListener('click', capturaClick)

}



