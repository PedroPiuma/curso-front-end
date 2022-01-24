const obj = {
    name: 'Luís', idade: 22, linguagem: 'python'
}

const newObj = {
    ...obj,
    profissao: 'dev',
    linguagem: 'JS'
}

console.log(newObj)
console.log('--------------------------')

const obj2 = {
    name: 'Luís',
    idade: 22,
}

const obj2Copia = {
    ...obj2,
    project: 'Projeto 1',
}

obj2.linguagem = 'JS'
console.log(obj2)
console.log(obj2Copia)