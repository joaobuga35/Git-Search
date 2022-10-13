const form = document.getElementById('form')
const input = document.getElementById('userGit')
input.addEventListener('keypress',() => {
    if (input.value != "") {
        document.querySelector('#btn-submit').classList.add('button-active')
    } else {
        document.querySelector('#btn-submit').classList.remove('button-active')
    }
})


form.addEventListener('submit',async (event) => {
    event.preventDefault()
    const nameUser = input.value

    await profileAPI(nameUser)
    await repositoryAPI(nameUser)
})