const userSelect = document.getElementById("check-info");

const API_KEY = "47e9a6f0593acb1eb9453646a55a6d9b";
const lat = 40.75; //latitude
const lon = 72.3333; //longitude

function createOptionElement(data) {
    const option = document.createElement("option");
    option.value = data.name;
    option.innerText = data.name;

    userSelect.append(option);
}

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    Promise.all([getData()])
        .then(val => {
            val.forEach(res => res.id == cityListreRequired(res.id) ? console.log(res.name) : console.log("ERROR"))
        })
}

function cityListreRequired(cityId) {
    return cityId == 1484846 ||
        cityId == 524894 ||
        cityId == 2643743 ||
        cityId == 2921044 ||
        cityId == 2658434
}

function alertError(error) {
    alert(error.message);
}


//! Async Logic 
async function getData() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${cityListreRequired()}&lang=ru&appid=${API_KEY}`
        )
        const data = await response.json()

        return data;
    } catch (error) {
        alertError(error)
    }

}