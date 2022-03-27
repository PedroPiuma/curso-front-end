window.onload = () => {
    calculadora()
}

function calculadora() {
    const botoes = document.querySelector('button')
    const igual = document.querySelector('#igual')
    const formulario = document.querySelector('#formulario')

    formulario.addEventListener('submit', e => e.preventDefault()) //cancela refresh
    formulario.addEventListener('click', capturaClick)

    formulario.addEventListener('keypress', e => enter(e))

    const visor = document.querySelector('#visor')

    function enter(e) {
        if (e.keyCode === 13) igual.click()
    }


    function capturaClick(e) {
        const target = e.target.innerText
        console.log(e.target.innerText)

        switch (target) {
            case '0':
                return visor.value += 0
            case '1':
                return visor.value += 1
            case '2':
                return visor.value += 2
            case '3':
                return visor.value += 3
            case '4':
                return visor.value += 4
            case '5':
                return visor.value += 5
            case '6':
                return visor.value += 6
            case '7':
                return visor.value += 7
            case '8':
                return visor.value += 8
            case '9':
                return visor.value += 9
            case 'C':
                visor.value = null
                return
            case '+':
                return visor.value += '+'
            case '-':
                return visor.value += '-'
            case '/':
                return visor.value += '/'
            case '*':
                return visor.value += '*'
            case '=':
                if (typeof eval(visor.value) === 'number') { visor.value = eval(visor.value) }
                else {
                    alert('Expresão não aceita.')
                    visor.value = null
                }
                return
        }
    }
}



