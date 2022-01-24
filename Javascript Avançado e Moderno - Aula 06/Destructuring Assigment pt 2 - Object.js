/** Podemos dar um nome diferente do nome da propriedade à variável
 *  (ou constante) que estamos atribuindo.
 * 
 *  Podemos encadear desestruturações.
 * 
 *  Podemos desestruturar parâmentros na declação da função.
 * 
 */

const user = {
    nome: 'Luís',
    idade: 22,
    project: {
        name: 'Projeto 1',
    },
}

// const userName = user.nome
// const { nome: userName, idade: idade } = user
const { nome: userName, idade } = user
// userName é a variável
// idade: idade pode ser só idade
console.log(userName, idade)

const { project } = user
const { name } = project
console.log(name)