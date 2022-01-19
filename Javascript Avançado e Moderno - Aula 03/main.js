// Self-Executing Anonymous Function

const result = (function (firstNumber, secondNumber) {
    return firstNumber + secondNumber
})(1, 2) //retorna 3
console.log(result)

console.log('---------------------------------------------')

// Arrow Function

const result1 = ((firstNumber, secondNumber) => {
    return firstNumber + secondNumber
})(1, 2)
console.log(result1)

console.log('---------------------------------------------')

const result2 = ((value) => {
    console.log(value)
})(1)

console.log('---------------------------------------------')

const result3 = (value => {
    console.log(value)
})(1)

console.log('---------------------------------------------')

const result4 = (() => {
    console.log('Hello world!')
})()

console.log('---------------------------------------------')

const result5 = ((firstNumber, secondNumber) => firstNumber + secondNumber)(5, 8)
console.log(result5)

console.log('---------------------------------------------')

// Uma função pode ser atribuída à uma variável ou constante
const result6 = (firstNumber, secondNumber) => firstNumber + secondNumber
console.log(result6)
console.log(typeof result6)
console.log(result6(2, 3))

console.log('---------------------------------------------')