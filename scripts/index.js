const form = document.getElementById('form')
const input = document.getElementById('userGit')
input.addEventListener('keyup',() => {
    if (input.value != "") {
        document.querySelector('#btn-submit').classList.add('button-active')
    } else {
        document.querySelector('#btn-submit').classList.remove('button-active')
    }
})

async function genericForm(){
    form.addEventListener('submit',async event => {
        event.preventDefault()
        const nameUser = input.value
    
        const valueAPI = await profileAPI(nameUser)
        console.log(valueAPI)
        const stringTransform = JSON.stringify(valueAPI)
        
        if (!valueAPI.message) {
            localStorage.setItem('renderdados',stringTransform)
        }
    })
}
genericForm()
