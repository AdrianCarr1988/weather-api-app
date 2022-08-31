let weather = {
    apikey : 'eb8f38530c5cf83c31c785253fdbcb73',
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid="
             + this.apikey
    
        )
        .then((res) => res.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {name} = data
        const {icon, description} = data.weather[0];
        const { temp, humidity, feels_like, temp_max, temp_min} = data.main;
        const {speed } = data.wind;
        const {lon, lat} =  data.coord;
        console.log(name, icon, description, temp, humidity, speed, feels_like, lon, lat);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+ icon+'.png'
        document.querySelector('.temp').innerText = temp +"C"
        document.querySelector('.feels').innerText = "feels like " + feels_like +"C"
        document.querySelector('.description').innerText = description
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + '%'
        document.querySelector('.wind').innerText = 'Wind speed ' + speed + 'km/h'
        document.querySelector('.coord').innerText = `Lon: ${lon} Lat: ${lat}`
        document.querySelector('.min').innerText = `Min: ${temp_min}`
        document.querySelector('.max').innerText = `Max: ${temp_max}`
        document.body.style.background=`url(https://source.unsplash.com/1920x1080/?${name}+skyline)`
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);

    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

