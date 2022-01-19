const arr = [1, 2, 3]

// push() adiciona ao final do array
arr.push(5, 7, 9)

const newArray = arr.concat([5, 7, 9])

console.log(arr)
console.log(newArray)

console.log(arr.join(' | '))

console.log(arr.slice(2))

console.log(arr.reverse())

// retorno do pop é o elemento q retirou, modifica o array original
console.log(arr.pop())

// remove primeiro elemento
console.log(arr.shift())