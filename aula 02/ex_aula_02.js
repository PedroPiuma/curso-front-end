// 1
function checkSignal(x) {
    if (x > 0) {
        console.log(`${x} é positivo`)
    } else if (x < 0) {
        console.log(`${x} é negativo`)
    } else {
        console.log(`${x} é zero`)
    }
}

checkSignal(-99)
checkSignal(42)
checkSignal(0)

// 2
function double(num) {
    return num * 2
}
console.log(double(5))


// 3
function calculate(string, num1, num2) {
    if (string === 'soma') {
        const soma = num1 + num2
        return console.log(soma)
    }
    if (string === 'subtrai') {
        const subtracao = num1 - num2
        return console.log(subtracao)
    }
    if (string === 'multiplica') {
        const multiplicacao = num1 * num2
        return console.log(multiplicacao)
    }
    if (string === 'divide') {
        const divisao = num1 / num2
        return console.log(divisao)
    }
}

calculate('soma', 3, 8)
calculate('subtrai', 10, 5)
calculate('multiplica', 4, 6)
calculate('divide', 5, 2)
