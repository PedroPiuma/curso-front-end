const value = 2

let bool1 = true
let bool2 = false

if (bool1 || bool2) {
    console.log("Condição verdadeira")
} else {
    console.log("Condição falsa")
}

console.log(value)

switch (value) {
    case 1:
        console.log("É 1")
        break;
    case 2:
        console.log('É 2')
        break;

    default:
        console.log('Não é nenhum dos valores acima')
        break;
}

if (value === 1) {
    console.log('É 1')
} else if (value === 2) {
    console.log('É 2')
} else {
    console.log('Não é nenhum dos valores acima')
}