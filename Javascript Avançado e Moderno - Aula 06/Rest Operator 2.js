const user = {
    nome: 'Luís',
    idade: 22,
    projects: [
        { name: 'Projeto 1', },
        { name: 'Projeto 2', },
        { name: 'Projeto 3', },
    ],
}

const func = ([projeto1, ...rest]) => {
    console.log(projeto1)
    console.log(rest)
}
func(user.projects)

const func2 = ({ projects: [{ name: projeto1 }, { name: projeto2 }] }) => {
    console.log(projeto1)
    console.log(projeto2)
}
func2(user)