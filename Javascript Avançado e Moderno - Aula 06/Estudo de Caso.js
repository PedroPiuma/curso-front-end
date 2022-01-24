/** Erro comum no dia a dia de um dev:
 * "TypeError: Cannot read property [prop_name] of undefined"
 * 
 * "TypeError: Cannot read property [prop_name] of null"
 * 
 * Ocorre quando manipulamos objetos.
 * 
 * Estamos tentando acessar uma propriedade mas o 
 * 'dono' da propriedade não existe (undefined ou null)
 */

const user = {
    name: 'Luís',
    project: null,
}

/* if (user.project.name) {
    console.log('Projeto cadastrado')
} */

console.log('----------------------------')

const obj = {
    name: 'Luís',
    idade: 22,
    project: null,
}
if (obj.project) {
    console.log(obj.project.nae)
}