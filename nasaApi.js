

let Button = document.querySelector("#button")
Button.addEventListener("click", () => {
    fetchApi()
})

async function fetchApi() {
    let API_KEY = " "
    let response = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useData(data)
}
function useData(data) {
    const EPICArray = data
    EPICArray.forEach(function (Epic) {
        const caption = `<p>${Epic.caption}</p>`
        const date = `<p>${Epic.date}</p>`
        const image = `<img width=300px; height=300px; src="https://epic.gsfc.nasa.gov/archive/natural/2021/04/02/png/${Epic.image}.png"</img>`
        document.querySelector("#content").innerHTML += caption
        document.querySelector("#content").innerHTML += date
        document.querySelector("#content").innerHTML += image

    }
    )
}

