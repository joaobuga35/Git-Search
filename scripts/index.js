const form = document.getElementById('form')
const input = document.getElementById('userGit')
const objectsProfile = []
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

        objectsProfile.push(valueAPI.avatar_url)
        console.log(objectsProfile)
        const newObjectJson = JSON.stringify(objectsProfile)
        localStorage.setItem('@renderimg',newObjectJson)

        const stringTransform = JSON.stringify(valueAPI)
        if (!valueAPI.message) {
            localStorage.setItem('renderdados',stringTransform)
        }
    })
}

genericForm()

const datasUser = localStorage.getItem('@renderimg')
const newDatasUser = JSON.parse(datasUser)

 function renderImgProfile(userProfile) {
    const listProfiles = document.querySelector('#list-profile-add')

    userProfile.forEach(element => {
        const li = document.createElement('li')
        const img = document.createElement('img')

        img.src = element
        img.classList = 'img-profile-add'

        li.append(img)
        listProfiles.append(li)
    });
}
renderImgProfile(newDatasUser)
