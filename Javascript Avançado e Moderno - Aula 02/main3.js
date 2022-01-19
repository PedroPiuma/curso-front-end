const objUser = {
    name: 'Luís',
    age: 22,
    job: 'Dev',
}

const objAddres = {
    street: 'Rua 1',
    number: '101',
}

// Modificou o primeiro objeto
console.log(Object.assign(objUser, objAddres))

console.log(objUser)
console.log(objAddres)

console.log('----------------------------------')

let x = 10
const resp = x < 10 ? 'é menor que 10' : 'é maior ou igual a 10'
console.log(resp)

console.log('----------------------------------')

if (x < 10) {
    console.log('É menor que 10')
} else {
    console.log('É maior ou igual 10')
}

console.log('----------------------------------')

x < 10 ? console.log('É menor que 10') : console.log('É maior ou igual 10')
console.log(x < 10 ? 'É menor que 10' : 'É maior ou igual 10')

console.log('----------------------------------')

const resp1 = x < 10 ? 'É menor que 10' : 'É maior ou igual 10'
console.log(resp1)

console.log('----------------------------------')

function print(value) {
    console.log(value)
}

print(x < 10 ? 'É menor que 10' : 'É maior ou igual 10')

console.log('----------------------------------')

function teste10(value) {
    return value < 10 ? 'É menor que 10' : 'É maior ou igual 10'
}

console.log(teste10(4))

