console.log(Number.isInteger(123))
console.log(Number.isInteger(123.123))

const num = 12.424
console.log('R$:' + num.toFixed(2))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//           012345678
const str = '   Otterwise   '
console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str.slice(5, -2))

// substitu primeira ocorrencia da letra 
console.log(str.replace('w', ' W'))
console.log(str.replace('tt', ' TT'))

function subst(v) {
    console.log(v)
    return v.toUpperCase()
}

console.log(str.replace('t', subst))

// remove os espaços das bordas mas n do meio
console.log(str.trim())

// procura e retorna booleano
console.log(str.includes('wise'))


console.log(str.length)


const templateStr = `Hello
     World`
console.log(templateStr)


let x = 10
let y = -76

console.log('x é', x, 'e y é', y)
console.log(`x é ${x} e y é ${y}`)