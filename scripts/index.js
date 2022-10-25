const form = document.getElementById('form')
const input = document.getElementById('userGit')
const datasUser = localStorage.getItem('@renderimg')
const newDatasUser = JSON.parse(datasUser)
let objectsProfile = []
if (JSON.parse(datasUser)) {
    objectsProfile = JSON.parse(datasUser)
}


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


 function renderImgProfile(userProfile) {
    const listProfiles = document.querySelector('#list-profile-add')
    const newArr = userProfile.reverse().filter((elem, index) => {
        return index == 1 || index == 2 || index == 0
    })
    console.log(newArr)

    newArr.forEach(element => {
        const li = document.createElement('li')
        const img = document.createElement('img')

        img.src = element
        img.classList = 'img-profile-add'

        li.append(img)
        listProfiles.append(li)
    });
}
renderImgProfile(newDatasUser)
