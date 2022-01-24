const obj = {
    name: 'Luís',
    project: null,
}

if (obj?.project?.name) {
    console.log('Projeto cadastrado')
}

console.log('----------------------')

const obj2 = {
    name: 'Luís',
    idade: 22,
    project: {
        name: 'Projeto 1',
    },
}

console.log(obj2?.project?.name)