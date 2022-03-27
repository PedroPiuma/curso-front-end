let register = null
let operator = null

const operators = [
    { name: 'Soma', symbol: '+', func: (number1, number2) => number1 + number2 },
    { name: 'Subtração', symbol: '-', func: (number1, number2) => number1 - number2 },
    { name: 'Multiplicação', symbol: '*', func: (number1, number2) => number1 * number2 },
    { name: 'Divisão', symbol: '/', func: (number1, number2) => number1 / number2 },
]

const cleanScreen = () => {
    const screen = document.getElementById('screen')
    screen.value = ''
}

const handleOperator = (elem) => {
    const screen = document.getElementById('screen')
    register = Number(screen.value)
    operator = elem
    screen.value = ''
}

const printResult = () => {
    const screen = document.getElementById('screen')
    screen.value = operator.func(register, Number(screen.value))
}

const printScreen = (e, i) => {
    const screen = document.getElementById('screen')
    screen.value += i
}

const createOperators = () => {
    const getDiv = document.getElementById('panel-op')
    operators.forEach(elem => {
        const newButton = document.createElement('button')
        newButton.setAttribute('id', elem.name)
        newButton.setAttribute('type', 'button')
        newButton.addEventListener('click', () => handleOperator(elem))
        newButton.innerHTML = elem.symbol
        getDiv.appendChild(newButton)
    })
}

const createDigits = () => {
    const getDiv = document.getElementById('panel-digits')
    for (let i = 0; i < 10; i++) {
        const newButton = document.createElement('button')
        newButton.setAttribute('id', `digito-${i}`)
        newButton.setAttribute('type', 'button')
        newButton.addEventListener('click', (e) => printScreen(e, i))
        newButton.innerHTML = i
        getDiv.appendChild(newButton)
    }
}

window.onload = () => {
    createDigits()
    createOperators()
}

