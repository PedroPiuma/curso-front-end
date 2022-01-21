const colaboradores = [
    { name: 'Juca', idade: 25, cargo: 'front-end', },
    { name: 'Márcia', idade: 21, cargo: 'back-end', },
    { name: 'Vitória', idade: 28, cargo: 'designer', },
    { name: 'Fernando', idade: 19, cargo: 'estagiario', },
    { name: 'Fabiane', idade: 25, cargo: 'back-end', },
    { name: 'Jéssica', idade: 23, cargo: 'front-end', },
]

//  Exercício a
const nomes = colaboradores.map(elem => elem.name)
console.log(nomes)

console.log('-------------------------------------------------------------------------------')

// Exercício b
const fronts = colaboradores.filter(elem => elem.cargo === 'front-end')
console.log(fronts)

console.log('-------------------------------------------------------------------------------')

// Exercício c
const primeiroMais23 = colaboradores.find(elem => elem.idade > 23)
console.log(primeiroMais23)

console.log('-------------------------------------------------------------------------------')

// Exercício d
const adultos = colaboradores.every(elem => elem.idade > 18)
if (adultos) console.log('Todos colaboradores são maiores de idade.')
if (!adultos) console.log('Nem todos colaboradores são maiores de idade.')

console.log('-------------------------------------------------------------------------------')

// Exercício e
const estagiario = colaboradores.some(elem => elem.cargo === 'estagiario')
if (estagiario) console.log('Existe colaborador com cargo de estagiario.')
if (!estagiario) console.log('Não existe colaborador com cargo de estagiario.')

console.log('-------------------------------------------------------------------------------')

// Exercício f
const somaDeIdades = colaboradores.reduce(((acc, elem) => acc + elem.idade), 0)
console.log(somaDeIdades)

console.log('-------------------------------------------------------------------------------')

// Exercício g
const ageOrder = colaboradores.sort((a, b) => a.idade - b.idade)
console.log(ageOrder)
