// Exercício 1
const myUser = {
    name: 'Luís',
    age: 22,
    email: 'luisppiuma@gmail.com'
}

console.log(myUser)

// Exercício 2
const array = ['a', 'b', 'c', 'd']
console.log(array[2])

// Exercício 3
const dev = {
    name: 'Juca',
    projects: [
        { name: 'Projeto 1', start: '01/02/2021' },
        { name: 'Projeto 2', start: '03/03/2021' }
    ]
}

console.log(dev.name)
console.log(dev.projects[1])
console.log(dev.projects[0].name)

// Exercício 4
let numeros = [1, -22, 3, 4, -5]

for (let i = 0; i < 5; i++) {
    numeros[i] = numeros[i] * 10
}
console.log(numeros)

