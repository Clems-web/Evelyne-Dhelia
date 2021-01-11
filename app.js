let btnSearch = document.getElementById("btnEnter");

btnSearch.addEventListener("click", function () {
    let divResume = document.getElementById("resume");
    let city = document.getElementById("input").value;
    let requestURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=fr&appid=802d6a8fe655cbe86922a75b14e51b56";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status !== 200) {
            return;
        }
        let response = xhr.response;

        divResume.innerHTML += city + "<br>";
        divResume.innerHTML += "<br>"+"Température : " + Math.ceil(response.main.temp)+"°C" + "<br>";
        divResume.innerHTML += "min : " + Math.ceil(response.main.temp_min)+"°C, " + "max : " + Math.ceil(response.main.temp_max) + "°C, " + "ressentie : "+ Math.ceil(response.main.feels_like)+ "°C"+"<br>";
        divResume.innerHTML += "<br>"+response.weather[0].description+ "<br>";
        divResume.innerHTML += "Humidité : " + response.main.humidity +"%" + "<br>";
        divResume.innerHTML += "Vent : " + response.wind.speed + " km/h";

    }

    xhr.send();


})


