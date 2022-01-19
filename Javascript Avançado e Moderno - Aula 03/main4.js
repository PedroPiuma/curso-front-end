const users = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' },
    { name: 'Sérgio', age: 24, job: 'Dev' },
]


const getColorByJob = user => {
    switch (user.job) {
        case 'Dev':
            return 'Blue'
        case 'RH':
            return 'Yellow'
        case 'Financeiro':
            return 'Green'
    }
}
console.log(getColorByJob(users[2]))


const colorByJog = {
    Dev: 'Blue',
    RH: 'Yellow',
    Financeiro: 'Green',
}
console.log(users[2])
console.log(users[2].job)
console.log(typeof users[2].job)
console.log(colorByJog[users[2].job])