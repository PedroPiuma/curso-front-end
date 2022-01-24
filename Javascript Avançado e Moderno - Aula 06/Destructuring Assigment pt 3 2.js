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

//const { projects: projetos } = user
/*
Array se desestrutura por posição
Quando acessa objeto {} precisa definer -> :
1º Acessa objeto user {}
2º Acessa projects do user e define:
3º Acessa o array de projects
4º Acessa o 1º objeto de array {}
5º Acessa name do objeto e define o nome da variável
 */
const { projects: [{ name: nomeProjeto }] } = user
console.log(nomeProjeto)