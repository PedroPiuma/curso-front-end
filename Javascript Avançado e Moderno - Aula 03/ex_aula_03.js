// Exercício 1
const imprime = texto => console.log(texto)
imprime('Olá mundo!')

// Exercício 2

const numeros = [
    10,
    20,
    30,
    40,
    50,
]

const executeOnArray = (arrayDeNumeros, func) => {

    for (let i = 0; i < 5; i++) {
        console.log(func(arrayDeNumeros[i]))
    }
}

function multiplica(valor) {
    return valor * 3.14
}

executeOnArray(numeros, multiplica)

// Exercício 3
function calculate(expressao) {
    return (num1, num2) => {
        if (expressao === 'soma') {
            return num1 + num2
        } else if (expressao === 'subtrai') {
            return num1 - num2
        } else if (expressao === 'multiplica') {
            return num1 * num2
        } else if (expressao === 'divide') {
            return num1 / num2
        } else {
            console.log('Operação inválida')
        }
    }
}

console.log(calculate('soma')(5, 8))
console.log(calculate('subtrai')(5, 2))
console.log(calculate('multiplica')(5, 2))
console.log(calculate('divide')(15, 3))