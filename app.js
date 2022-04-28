const userSelect = document.getElementById("check-info");

//! Async Logic 
async function getData() {
    const API_KEY = "47e9a6f0593acb1eb9453646a55a6d9b";
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=524901&lang=ru&appid=${API_KEY}`
        )
        const data = await response.json()

        return data;
    } catch (error) {
        alertError(error)
    }

}

document.addEventListener("DOMContentLoaded", initApp);


function initApp() {
    getData().then(data => {
        render(data)
    })
}

function render(data) {
    renderCity(data);
    renderCodeCity(data);
    renderWeather(data);
}

function renderCity(data) {
    const cityPlace = document.getElementById('place')
    cityPlace.innerHTML = `Место: <span>${data.name}</span>`
}

function renderCodeCity(data) {
    const cityPlace = document.getElementById('code')
    cityPlace.innerHTML = `Код страны: <span>${data.sys.country}</span>`
}

function renderWeather(data) {
    let icon = `<img src="${`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}">`
    const cityPlace = document.getElementById('weather')
    cityPlace.innerHTML = `Погода:${icon} <span>${data.weather[0].main}/ ${data.weather[0].description} 
    </span>`
}



function getRequiredId(value) {
    return value;
}



function alertError(error) {
    alert(error.message);
}