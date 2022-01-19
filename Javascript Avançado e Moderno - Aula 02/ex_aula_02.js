// Exercício 1
const user = {
    name: 'Marília',
    age: 26,
    job: 'Dev',
}

const keyName = Object.keys(user).slice(0, 1)
const keyAge = Object.keys(user).slice(1, 2)
const keyJob = Object.keys(user).slice(2)

const valueName = Object.values(user).slice(0, 1)
const valueAge = Object.values(user).slice(1, 2)
const valueJob = Object.values(user).slice(2)

console.log(`O valor da propriedade ${keyName} é ${valueName}`)
console.log(`O valor da propriedade ${keyAge} é ${valueAge}`)
console.log(`O valor da propriedade ${keyJob} é ${valueJob}`)

console.log('--------------------------------------------------')

//Exercício 2

const users = [
    { name: 'Marília', age: 26, job: 'Dev', },
    { name: 'Juca', age: 21, job: 'RH', },
    { name: 'Flávia', age: 30, job: 'Financeiro', },
    { name: 'Sérgio', age: 24, job: 'Dev', },
]

let linha = []

for (let i = 0; i < users.length; i++) {
    const objInterno = users[i].job
    if (objInterno.includes('Dev')) {
        linha += `${users[i].name} é dev. `
    } else {
        linha += `${users[i].name} não é dev. `
    }
}

console.log(linha)