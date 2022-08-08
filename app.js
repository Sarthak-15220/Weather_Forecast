window.addEventListener("load", () => {
    let long;
    let lat;
    let tempratureDescription = document.querySelector(".temprature-description");
    let tempratureDegree = document.querySelector(".temprature-degree");
    let loactionTimezone = document.querySelector(".location-timezone")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=672f0912fc712be02e8d0b3d5021ed78`
            console.log(api)
            fetch(api).then(respone => {
                return respone.json();
            })
                .then(data => {
                    console.log(data)
                    const{ temp,feels_like } = data.main;
                    tempratureDegree.textContent = temp; 
                    tempratureDescription.textContent=feels_like;
                    loactionTimezone.textContent = data.name;
                })
        })
    }
})