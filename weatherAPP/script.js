
    const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
    const form = document.querySelector("form");
    const search = document.querySelector("#search");
    const weather = document.querySelector("#weather");

        const getWeather = async (city) => {
        weather.innerHTML = `<h2>Loading...</h2>`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
                const response = await fetch(API_URL);
    const data = await response.json();
    return showWeather(data);
            } catch (error) {
        weather.innerHTML = `<h2>Failed to fetch weather data</h2>`;
    console.error("Error fetching weather data:", error);
            }
        };

        const showWeather = (data) => {
            if (data.cod == "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`;
    return;
            }

    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h4>${data.weather[0].main}</h4>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    </div>
    `;
        };

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    const city = search.value.trim();
    if (city) {
        getWeather(city);
            } else {
        weather.innerHTML = `<h2>Please enter a city name</h2>`;
            }
        });

