
function getWeatherForecast() {
    const apiKey = '09822a650889328d4462b3bf725dc962'; 
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayForecast(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayForecast(data) {
    const forecastResults = document.getElementById('forecastResults');
    forecastResults.innerHTML = `

      
    <div class="Heading">
    <h2>Weather Forecast for ${data.name}</h2>
    </div>
    <div class="container">

        <div class="row">

            <div  class="col-sm-6" >
                <div class="row">
                    <div class="col-sm-4">
                        <h2>${data.name}</h2>
                        <h1>${data.main.temp}</h1> 
                        <p>Temperature</p>
                    </div>
                    <div class="col-sm-2">
                        <i style="font-size:45px;" class="bi bi-thermometer-snow"></i>
                    </div>
                    
                </div>
            </div>


            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>${data.name}</h2>
                        <h3> ${data.weather[0].description}</h3>
                        <p>Weather description</p>  
                       
                    </div>
                    <div class="col-sm-2">
                        <i style="font-size:40px;" class="bi bi-water"></i>
                    </div>
                   
                </div>
            </div>

        </div>
    </div>





    <div class="container">

        <div class="row">

            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>${data.name}</h2>
                        <h1>Humidity: ${data.main.humidity}%</h1>
                       
                    </div>
                    <div class="col-sm-2">
                        <i style="font-size:45px;" class="bi bi-cloud-fog2-fill"></i>
                    </div>
                    
                </div>
            </div>


            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>${data.name}</h2>
                        <h1>Wind Speed ${data.wind.speed} m/s</h1> 
                        
                    </div>
                    <div class="col-sm-2">
                        <i style="font-size:45px;" class="bi bi-speedometer"></i>
                    </div>
                   
                </div>
            </div>

        </div>
    </div>



      
      
    `;
}