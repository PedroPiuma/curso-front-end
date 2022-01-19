// Exercício 1
const user = {
    name: 'Marília',
    age: 26,
    job: 'Dev',
}

const keyList = Object.entries(user)
for (let i = 0; i < keyList.length; i++) {
    console.log(`O valor da propriedade ${keyList[i].join(' é ')}`)
}

console.log('--------------------------------------------------')

//Exercício 2

const users = [
    { name: 'Marília', age: 26, job: 'Dev', },
    { name: 'Juca', age: 21, job: 'RH', },
    { name: 'Flávia', age: 30, job: 'Financeiro', },
    { name: 'Sérgio', age: 24, job: 'Dev', },
]

const arrayDevs = []

for (let i = 0; i < users.length; i++) {
    arrayDevs.push(`${user.name} ${users[i].job === 'Dev' ? 'é Dev.' : 'não é dev.'}`)
}

console.log(arrayDevs.join(' '))