const container = document.querySelector('.container');
const input = document.querySelector('input');
const searchButton = document.querySelector('.search');
const notFound = document.querySelector('.not-found');
const weatherBox = document.querySelector('.weather-box');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const info = document.querySelector('.info');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity span');
const wind = document.querySelector('.wind span');
const apiKey = getApiKey();

searchButton.addEventListener('click', () => {

    if (input.value === '') return;

    const location = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => {

        if(json.cod === '404'){
            weatherBox.classList.add('display-none');
            container.classList.add('not-found-height');
            notFound.classList.add('display-block');
            return;
        }

        cleanAll();
        weatherBox.classList.add('display-block');
        container.classList.add('found-height');
        notFound.classList.add('display-none');
        

        city.textContent = json.name;
        temperature.textContent =`${json.main.temp}°`;
        info.textContent = json.weather[0].main;
        description.textContent = json.weather[0].description;
        humidity.textContent = `${json.main.humidity}%`;
        wind.textContent = `${json.wind.speed}km/h`;


    })


});

function cleanAll(){
    input.value = "";
    city.textContent = "";
    temperature.textContent = "";
    info.textContent = "";
    description.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";
}



/*
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    */