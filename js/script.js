
const key="dcdb585c9d699743e38d7bb669dc5b80";

function screenData(data){
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) +"°C";
  document.querySelector(".text-weather").innerHTML = data.weather[0].description;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".img-weather").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){ //async=Avisar que vai acessar um servidor
 
   const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());//passando para json
   
   screenData(data);
}

function clickButton(){
    const city = document.querySelector(".input-city").value;

    searchCity(city);
}

