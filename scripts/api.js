async function profileAPI(value){
    const requisition = await fetch(`https://api.github.com/users/${value}`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        // window.location.replace("./pages/profile/profile.html")
    })
    .catch((error) => console.log(error))
    return requisition
}

async function repositoryAPI(value){
    const requisitionRepos = await fetch(`https://api.github.com/users/${value}/repos`)
    .then(function(response){ return response.json()})
    .then(function(responseJson){ console.log(responseJson)})
    .catch((error) => console.log(error))

    return requisitionRepos
}