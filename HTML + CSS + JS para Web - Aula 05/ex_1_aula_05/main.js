function calculadora(event) {
    event.preventDefault()
    const paragrafo = document.querySelector('#resultado')

    const primeiroValor = Number(document.querySelector('#first-number').value)
    const segundoValor = Number(document.querySelector('#second-number').value)
    const operador = document.querySelector('#operador').value

    console.log(primeiroValor, segundoValor, operador)

    switch (operador) {
        case '/':
            return paragrafo.innerText = primeiroValor / segundoValor
        case '+':
            return paragrafo.innerText = primeiroValor + segundoValor
        case '-':
            return paragrafo.innerText = primeiroValor - segundoValor
        case '*':
            return paragrafo.innerText = primeiroValor * segundoValor
    }
}

window.onload = () => {
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', calculadora)
}