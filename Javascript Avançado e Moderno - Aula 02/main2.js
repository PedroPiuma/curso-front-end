const obj = {
    name: 'Luís',
    age: 22,
    job: 'Dev',
}

console.log(obj)

console.log('-------------------------')

const objKeys = Object.keys(obj)
console.log('chaves: ', objKeys)
for (let i = 0; i < objKeys.length; i++) {
    console.log(objKeys[i])
}

console.log('-------------------------')

const objValues = Object.values(obj)
console.log('values: ', objValues)
for (let i = 0; i < objValues.length; i++) {
    console.log(objValues[i])
}

console.log('-------------------------')

const objEntries = Object.entries(obj)
console.log('entries: ', objEntries)
for (let i = 0; i < objEntries.length; i++) {
    console.log(objEntries[i])
}

console.log('-------------------------')

