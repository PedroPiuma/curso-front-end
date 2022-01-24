/** REST OPERATOR
 * 
 *  Operador usado para acumular o resto de uma array
 *  ou objeto em um novo array ou novo objeto.
 */

const restObj = params => {
    // const { name: name, idade: idade, profissao: profissao} = Do params
    const { name, ...rest } = params
    console.log(rest)
}

const obj = {
    name: 'Luís',
    idade: 22,
    profissao: 'Estudante'
}

restObj(obj)

console.log('-------------------------------------')

const user = {
    nome: 'Luís',
    idade: 22,
    projects: [
        { name: 'Projeto 1', },
        { name: 'Projeto 2', },
    ],
}

const { nome, ...resto } = user
console.log(resto)

console.log('-------------------------------------')

// Pode ter desestruturação em parâmetro de função também
const func = ({ nome, idade, projects }) => {
    console.log(nome)
    console.log(idade)
    console.log(projects)
}
func(user)

console.log('-------------------------------------')

// Pode usar rest também dentro da desestruturação
const func2 = ({ nome, ...rest }) => {
    console.log(nome)
    console.log(rest)
}
func(user)