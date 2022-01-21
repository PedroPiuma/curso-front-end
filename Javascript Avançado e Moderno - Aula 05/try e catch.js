function formatCurrency(value) {
    try {
        return value.toFixed(2)
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log('Final')
    }
}

console.log(formatCurrency('10'))