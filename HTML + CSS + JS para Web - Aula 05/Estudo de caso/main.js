function onSubmit(event) {
    event.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const comment = document.querySelector('#comment').value

    console.log(name, email, comment)

    // Enviar dados para a API
    const data = {
        name: name,
        email: email,
        body: comment,
    }

    const url = 'https://jsonplaceholder.typicode.com/comments'
    const strogfiedData = JSON.stringify(data)

    fetch(url, {
        method: 'POST',
        body: strogfiedData,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            alert('Comentário enviado com sucesso')
        });
}

window.onload = () => {
    const createCommentForm = document.querySelector('#create-comment')
    createCommentForm.addEventListener('submit', onSubmit)
}