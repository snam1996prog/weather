console.log("Let us write some javascript.");

async function Weather() {
  let city = document.getElementById("city").value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=270d2abbe8ef2f14f6506d040da24657&units=metric`
  );

  if (response.status === 404) {
    document.querySelector(".card").innerText = "Please try again... City not found.";
  } else {
    let data = await response.json();
    document.getElementById("temp").innerText = `${Math.round(data.main.temp)}\u00B0C`;
    document.getElementById("city_temp").innerText = `${data.name}`;
    document.getElementById("win").innerText = `${data.wind.speed} Km/h`;
    document.getElementById("humid").innerText = `${data.main.humidity}%`;
    console.log(response);
    if(data.main.humidity>=50){
        document.getElementById('main_img').innerHTML = ` <img src="/Images/cloudy.png" alt="Image not available">`;
    }
    else{
        document.getElementById('main_img').innerHTML = ` <img src="/Images/sunny.png" alt="Image not available">`
    }
    document.getElementById("city").value = "";
  }
}

document.getElementById("s_city").addEventListener("click", Weather);
