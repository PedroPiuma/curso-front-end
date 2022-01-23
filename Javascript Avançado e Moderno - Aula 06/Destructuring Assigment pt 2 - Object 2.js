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

const { nome: userName, idade } = user
console.log(userName, idade)

const {
    project: { name }
} = user
// const { name } = project
console.log(name)