// Exercício 1
const imprime = arg => console.log(arg)

imprime('Olá mundo!')

// Exercício 2
const executeOnArray = function (array, func) {
    for (let i = 0; i < array.length; ++i) {
        console.log(func(array[i]))
    }
}

const double = arg => arg * 10

executeOnArray([1, 2, 3, 4, 5], double)

// Exercício 3
const operator = {
    soma: (number1, number2) => number1 + number2,
    subtrai: (number1, number2) => number1 - number2,
    multiplica: (number1, number2) => number1 * number2,
    divide: (number1, number2) => number1 / number2,
}

const calculate = (arg) => (number1, number2) => operator[arg](number1, number2)

console.log(calculate('soma')(5, 8))
console.log(calculate('subtrai')(5, 2))
console.log(calculate('multiplica')(5, 2))
console.log(calculate('divide')(15, 3))
