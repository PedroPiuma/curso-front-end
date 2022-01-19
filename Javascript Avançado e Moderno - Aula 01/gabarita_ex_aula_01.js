function checkZero(number) {
    // 0 em booleano é sempre false
    // se vier 0 vai ser false, !number então vai ser verdadeiro
    return (!number && `${number} é zero`) || `${number} não é zero`
}

console.log(checkZero(123))
console.log(checkZero(0))
console.log(checkZero(13))
console.log(checkZero(-2))
console.log(checkZero('oi'))