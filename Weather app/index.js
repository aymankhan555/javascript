const cityInput = document.querySelector('.cityInput');
const weatherForm = document.querySelector('.weatherForm');
const card = document.querySelector('.card');

const apikey = "bc3010eaf9858755393294a54c83e12a";


weatherForm.addEventListener('submit', async event => {

    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            showWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError('Please Enter a city');
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Cant fetch data from weather api");
    }
    return await response.json();
}

function showWeatherInfo(data) {
    const { name: city,
        main: { temp, humidity },
        weather: [{ id, description }]
    } = data;

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');


    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = `${description}`;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.classList.add('descDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    card.textContent = '';
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
    card.style.display = "flex";

}
function getWeatherEmoji(id) {

    if (id >= 200 && id < 300) {
        return '⛈️';
    }
    if (id >= 300 && id < 400) {
        return '🌧️'
    }
    if (id >= 500 && id < 600) {
        return '🌧️'
    }
    if (id >= 600 && id < 700) {
        return '❄️'
    }
    if (id >= 700 && id < 800) {
        return '🌫️'
    }
    if (id ===800) {
        return '☀️'
    }
    if(id>800)
    {
        return '☁️';
    }
    return '❓';



}

function displayError(message) {
    const newElement = document.createElement('p');
    card.textContent = '';

    newElement.textContent = message;
    newElement.classList.add('errorDisplay');
    card.style.display = "flex";
    card.appendChild(newElement);

}