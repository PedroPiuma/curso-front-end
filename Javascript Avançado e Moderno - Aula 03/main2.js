/**
 * Uma função pode ser o valor de uma propriedade de um objeto
 */

const soma = (firstNumber, secondNumber) => firstNumber + secondNumber

const obj = {
    name: 'teste',
    func: soma,
}

console.log(obj.func)
console.log(obj.func(5, 8))

console.log('-----------------------------------')

// Uma função pode ser o valor de uma propriedade de um objeto
const funcArray = [
    soma,
    (firstNumber, secondNumber) => {
        return firstNumber * secondNumber
    },
]
console.log(funcArray[0](3, 4))
console.log(funcArray[1](3, 4))

console.log('-----------------------------------')

// High-Order function
function aplica(func, value) {
    return func(value)
}
// Callback Function da High-Order function
function mult10(a) {
    return console.log(a * 10)
}

aplica(mult10, 9) // retornará 90

console.log('-----------------------------------')

// High-Order function
function aplica2(func, value) {
    return func(value)
}
console.log(aplica2(a => a * 10, 9)) // retorna 90

console.log('-----------------------------------')

// High order function
function mult(a) {
    return b => a * b
}
console.log(mult(3)) // b => 3 * b
console.log(mult(3)(2)) // b => 3 * b ||->|| 2 => 3 * 2 -> 6

