async function profileAPI(value){
    const requisition = await fetch(`https://api.github.com/users/${value}`)
    .then((response) => {
        const btnSeeUser = document.querySelector('#btn-submit')
        btnSeeUser.innerHTML = `<img src = "./assets/img/spinner.svg" class="img-spinner">`
        if (response.status == 200) {
            setTimeout(() => {
                window.location.replace("./pages/profile/profile.html")
            },3700)
        } else {
            localStorage.removeItem('renderdados')
            const hiddenMessage = document.querySelector('#span-hide')
            setTimeout(() => {
                btnSeeUser.innerText = "Ver perfil do github"
                hiddenMessage.classList.remove('hide')
            },3700)
        }
        return response.json()
    })

    .then(responseJson => responseJson)
    .catch(error => error)
    return requisition
}

function cleanError(){
    const hiddenMessage = document.querySelector('#span-hide')
    const input = document.getElementById('userGit') 

    input.addEventListener('keyup',() => {
        hiddenMessage.classList.add('hide')
    })
}

cleanError()


// async function repositoryAPI(value){
//     const requisitionRepos = await fetch(`https://api.github.com/users/${value}/repos`)
//     .then(function(response){ return response.json()})
//     .then(function(responseJson){ console.log(responseJson)})
//     .catch((error) => console.log(error))

//     return requisitionRepos
// }