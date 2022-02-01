window.onload = () => {
    console.log('Hello World')

    console.log(window.innerHeight)
    console.log(window.innerWidth)

    const p = document.createElement('p')
    console.log(p)

    const main = document.getElementsByTagName('main')[0]
    console.log(main)
    main.appendChild(p)

    const link = document.getElementById('link')
    console.log(link.hasAttributes('href'))
    link.removeAttribute('href')
    link.setAttribute('href', 'https://www.w3schools.com/')

    link.innerText = 'Acesse w3Schools'

    const ps = document.querySelector('main').querySelectorAll('p')
    console.log(ps)

    main.addEventListener('click', onClick)
}

function onClick() {
    console.log("Hello World")
}

