const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: { rua: 'Rua central', numero: 1, },
    projetos: ['Projeto 1', 'Projeto 2'],
}

// Exercício 1
const { nome, endereco: { rua }, projetos, projetos: [, projeto2] } = user
//a
console.log(nome)

// b
console.log(rua)

// c
console.log(projetos)

// d
console.log(projeto2)

console.log('FIM DO EXERCÍCIO 1')
console.log('-----------------------------------------------')

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true },
]

// Exercício 2
const [primeiro, { name }, terceiro] = students

//a
console.log(primeiro)

// b
console.log(terceiro)

// c
console.log(name)

console.log('FIM DO EXERCÍCIO 2')
console.log('-----------------------------------------------')

const anyValue = (...rest) => console.log(...rest)
anyValue(1, 2, 3, 4, 5, true, 'Hello world', true !== false)

console.log('FIM DO EXERCÍCIO 3')
console.log('-----------------------------------------------')

const getNome = ({ nome }) => console.log(nome)
getNome(user)

console.log('FIM DO EXERCÍCIO 4')
console.log('-----------------------------------------------')

const newObj = (firstObj, secondObj) => ({ ...firstObj, ...secondObj })
console.log(newObj(user, students))

console.log('FIM DO EXERCÍCIO 5')
console.log('-----------------------------------------------')

const fisrtArray = [1, 2, 3, 4, 5]
const secondArray = [7, 8, 9, 0]

const newArray = (array1, array2) => ([...array1, ...array2])
console.log(newArray(fisrtArray, secondArray))

console.log('FIM DO EXERCÍCIO 6')
console.log('-----------------------------------------------')
