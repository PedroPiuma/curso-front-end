const user = {
    nome: 'Luís',
    idade: 22,
    projects: [{
        name: 'Projeto 1',
    },
    {
        name: 'Projeto 2',
    },
    ],
}

const { projects: projetos } = user
console.log(projetos)

const p = [{ name: 'Projeto 1' }, { name: 'Projeto 2' }]
const [p1] = p
console.log(p1)
const { name: nomeProjeto } = p1
console.log(nomeProjeto)