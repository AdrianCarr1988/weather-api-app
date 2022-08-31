let weather = {
    "apikey" : 'eb8f38530c5cf83c31c785253fdbcb73',
    fetchWeather: function() {
        fetch(
            fetch("https://api.openweathermap.org/data/2.5/weather?q={denver}&appid={eb8f38530c5cf83c31c785253fdbcb73}")
        ).then((res) => res.json())
        .then((data) => console.log())
    }
}



/*https://api.openweathermap.org/data/2.5/weather?q={denver}&appid={eb8f38530c5cf83c31c785253fdbcb73}*/
/*https://www.youtube.com/watch?v=WZNG8UomjSI*/