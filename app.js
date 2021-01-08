let city = document.getElementById("input").value;
let requestURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=802d6a8fe655cbe86922a75b14e51b56";
let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        return;
    }
    let response = xhr.response;
    console.log(response);
}

xhr.send();

