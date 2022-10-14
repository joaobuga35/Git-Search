const btnUsers = document.querySelector('.btn-redirected')
btnUsers.addEventListener('click',(event) => {
    localStorage.removeItem('renderdados')
})
const bringDatas = localStorage.getItem('renderdados')
const newDatas = JSON.parse(bringDatas)




async function repositoryAPI(value){
    const requisitionRepos = await fetch(`https://api.github.com/users/${value.login}/repos`)
    .then(response => response.json())
    .then(responseJson => responseJson)

    return requisitionRepos
}


function renderProfile(user){
    const divHead = document.querySelector('.head-profile')
    const img = document.createElement('img')
    const divProfile = document.createElement('div')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')

    img.src = user.avatar_url

    divProfile.classList = 'profile-description'
    h2.innerText = user.name
    span.innerText = user.bio

    divProfile.append(h2,span)

    divHead.append(img,divProfile)
}

renderProfile(newDatas)

// async function render() {
//     const listMain = document.getElementById('list-projects')
//     const callFunctionRepo = await repositoryAPI(newDatas)
//     console.log(listMain)
//     listMain.innerHTML = ''
  
//     callFunctionRepo.forEach(repos => {
//       const card = renderRepository(repos)
  
//       listMain.appendChild(card)
//     })
//     return listMain
// }


 async function renderRepository(){
    const listMain = document.getElementById('list-projects')
    const callFunctionRepo = await repositoryAPI(newDatas)

    console.log(callFunctionRepo)

    callFunctionRepo.forEach((repos) => {
        const li = document.createElement('li')
        const h3Repo = document.createElement('h3')
        const pRepo = document.createElement('p')
        const divRepo = document.createElement('div')
        const buttonRepo = document.createElement('button')
        const a = document.createElement('a')
        const buttonDemo = document.createElement('button')

        h3Repo.innerText = repos.name
        pRepo.innerText = repos.description

        li.classList = 'list-repositories'
        divRepo.classList = 'div-btn-repo-demo'

        a.classList = 'repository'
        a.innerText = 'Repositório'
        a.href = repos.html_url
        a.target = '_blank'

        buttonRepo.classList = 'btn-repository'
        buttonDemo.classList = 'btn-demo'

        buttonDemo.innerText = 'Demo'

        buttonRepo.append(a)
        divRepo.append(buttonRepo, buttonDemo)
        li.append(h3Repo, pRepo, divRepo)

        listMain.append(li)
    })
}

renderRepository()

// <div class="head-profile">
//     <img src="/assets/img/imgProfile.svg" alt="">
//         <div class="profile-description">
//             <h2>Samuel Leão</h2>
//             <span>UI developer</span>
//         </div>
// </div>

{/* <li class="list-repositories">
    <h3>Project Module 2 - Kenzie...</h3>
    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>

    <div class="div-btn-repo-demo">
        <button class="btn-repository"><a class="repository" href="#">Repositório</a></button>
        <button class="btn-demo">Demo</button>
    </div>
</li> */}