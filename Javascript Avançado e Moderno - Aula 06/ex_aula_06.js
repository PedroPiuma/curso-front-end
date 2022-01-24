const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: { rua: 'Rua central', numero: 1, },
    projetos: ['Projeto 1', 'Projeto 2'],
}

// Exercício 1a
const { nome } = user
console.log(nome)

// Exercício 1b
const { endereco: { rua } } = user
console.log(rua)

// Exercício 1c
const { projetos } = user
console.log(projetos)

// Exercício 1d
const { projetos: [, projeto2] } = user
console.log(projeto2)

console.log('FIM DO EXERCÍCIO 1')
console.log('-----------------------------------------------')

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true },
]

// Exercício 2a
const [element1] = students
console.log(element1)

// Exercício 2b
const [, , elemento3] = students
console.log(elemento3)

// Exercício 2c
const [, { name }] = students
console.log(name)

console.log('FIM DO EXERCÍCIO 2')
console.log('-----------------------------------------------')

const anyValue = (...rest) => console.log(...rest)
anyValue(1, 2, 3, 4, 5)

console.log('FIM DO EXERCÍCIO 3')
console.log('-----------------------------------------------')

const getNome = ({ nome }) => console.log(nome)
getNome(user)

console.log('FIM DO EXERCÍCIO 4')
console.log('-----------------------------------------------')

const newObj = (firstObj, secondObj) => {
    return { ...firstObj, ...secondObj }
}
console.log(newObj(user, students))

console.log('FIM DO EXERCÍCIO 5')
console.log('-----------------------------------------------')

const fisrtArray = [1, 2, 3, 4, 5]
const secondArray = [7, 8, 9, 0]

const newArray = (array1, array2) => {
    return [...array1, ...array2]
}
console.log(newArray(fisrtArray, secondArray))

console.log('FIM DO EXERCÍCIO 6')
console.log('-----------------------------------------------')
