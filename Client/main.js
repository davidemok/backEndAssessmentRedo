let form = document.getElementById("submit")
let DavidButton = document.getElementById("getDavidAnime")
let randomButton = document.getElementById("getRandomAnime")
let deleteButton = document.getElementById("deleteList")
let changeButton = document.getElementById("updateButton")


const URL = 'http://localhost:4000'

const getDavidAnime = () => {
    axios.get(`${URL}/anime`)
        .then(res => {
            const data = res.data;
            console.log(data)
            alert(JSON.stringify(data))
            //this is absolutely hideous but at least it works :cry emoji:
        })
}
const getRandomAnime = () => {
    axios.get(`${URL}/anime/random`)
        .then(res => {
            const data = res.data;
            console.log(res.data)
            alert(data)
            console.log(data)
        })
    }
const createList = evt => {
    evt.preventDefault();
    const input = document.getElementById('submitInput')
    let newAnime = input.value
    console.log(newAnime)
    axios.post(`${URL}/anime/${newAnime}`)
    .then(res => {
        let dataDiv = document.createElement('div')
        dataDiv.innerHTML = `<div>${res.data}</div>`
        document.querySelector('section').appendChild(dataDiv)
    })
}
const DeleteList = evt => {
    evt.preventDefault();
    axios.delete(`${URL}/anime/:newAnime`)
    .then(res=> {
        console.log("Deleted!")
    })
}

const updateList = (evt) => {
    evt.preventDefault();
    const change = document.getElementById('changeInput');
    const index = change.value;
    axios.put(`${URL}/anime/${index}`)
    .then(res=> {
        console.log("updated!")
    })
}

form.addEventListener('submit', createList)
DavidButton.addEventListener('click', getDavidAnime)
randomButton.addEventListener('click', getRandomAnime)
deleteButton.addEventListener('click', DeleteList)
changeButton.addEventListener('click', updateList)