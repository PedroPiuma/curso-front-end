const biblioteca = {
    soma: (number1, number2) => number1 + number2,
    subtracao: (number1, number2) => number1 - number2,
    multiplicacao: (number1, number2) => number1 * number2,
    divisao: (number1, number2) => number1 / number2,
}

const operator = (op, number1, number2) => biblioteca[op](number1, number2)

const calculate = () => {
    const value1 = Number(document.getElementById('value_1').value)
    const value2 = Number(document.getElementById('value_2').value)
    const op = document.getElementById('operator').value
    const print = document.getElementById('resultado')

    const result = operator(op, value1, value2)

    return (print.innerHTML = result)
}