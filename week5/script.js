let body = document.querySelector("body");
function checkWeather() {
// let temperature = prompt("what is the temperature outside?");
let temp = document.querySelector("#temperature");
let temperature = temp.value;
if (temperature >= 10 && temperature < 20) {
    console.log("it feels cold");
    body.style.backgroundColor = "lightblue";
}
else if (temperature >= 20 && temperature < 30)
{
    console.log("it feels warm and sunny");
    body.style.backgroundColor = "orange";
}
else if (temperature > 30)
{
    console.log("it is boiling");
    body.style.backgroundColor = "red";
}
else if (temperature < 10)
{
    console.log("it is freezing");
    body.style.backgroundColor = "gray";
}
}