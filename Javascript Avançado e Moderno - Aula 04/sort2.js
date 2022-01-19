const arrayNum = [-42, -100, -8.5, 20, 200, 20]
const sortedArray = arrayNum.sort((a, b) => {
    /*
    a = -42 b = -100 => + // -42 - (-100) = 58 (+)
    a = 20 b = 200 => - // 20 - (200) = -180 (-)
    a = 20 b = 20 => 0 // 20 - (20) = 0 (0)
    a = -42 b = 20 => - // -42 - (20) = -62 (-)
    */
    /* if (a - b < 0) return a - b
    if (a - b > 0) return a - b */
    return a - b
})

console.log(sortedArray)

console.log('--------------------------------------------------------')

const sortedArray2 = arrayNum.sort((a, b) => a - b)
console.log(sortedArray2)