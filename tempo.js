// script.js

// Substitua 'YOUR_API_KEY' pela sua chave de API da OpenWeatherMap
const apiKey = 'b52ff2f8-c9b6-11ee-9fb2-0242ac130002-b52ff370-c9b6-11ee-9fb2-0242ac130002';
// Substitua 'CITY_NAME' pelo nome da cidade para a qual você deseja obter a previsão do tempo
const city = 'São Paulo';

// URL da API da OpenWeatherMap para obter a previsão do tempo atual por cidade
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Função para fazer a requisição à API e exibir os dados no HTML
async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const weatherDiv = document.getElementById('weather');
        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Condição: ${data.weather[0].description}</p>
        `;
        weatherDiv.innerHTML = weatherInfo;
    } catch (error) {
        console.error('Erro ao obter a previsão do tempo:', error);
    }
}

// Chama a função para obter a previsão do tempo ao carregar a página
window.onload = getWeather;
