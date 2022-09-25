const searchText = document.querySelector(".searchText");
const submitBtn = document.querySelector(".submitBtn");
const place = document.querySelector(".place");

const sendValue = () => {
  const key = "a0e78d3b449db7059df0a38abd3952f8";
  const city = searchText.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      place.innerHTML =`
      <div class="data_results">
          <h3>${data.name}</h3>
          <h4><i class="fa-solid fa-temperature-three-quarters"></i>   ${data.main.temp} °C</h4>
          <p>${data.weather[0].description}</p>
          <div class="data">
            <div class="temp">
              <div class="data_value">
                <span><i style="color:rgb(26, 209, 185) ;" class="fa-solid fa-temperature-low"></i> Temp Min :</span>
                <span class="data_num">${data.main.temp_min} °C</span>
              </div>
              <div class="data_value">
                <span><i style="color: rgb(209, 27, 27);" class="fa-solid fa-temperature-high"></i> Temp Max :</span>
                <span class="data_num">${data.main.temp_max} °C</span>
              </div>
            </div>
            <div class="weather">
              <div class="data_value">
                <span><i style="color: rgb(44, 146, 204);" class="fa-solid fa-droplet"></i> Humidity :</span>
                <span class="data_num">${data.main.humidity} %</span>
              </div>
              <div class="data_value">
                <span ><i style="color: gray;" class="fa-solid fa-wind"></i> Wind :</span>
                <span class="data_num">${data.wind.speed} Km/hr</span>
              </div>
            </div>
          </div>
        </div>
      `;
      console.log(data);
    });
};

submitBtn.addEventListener("click", sendValue);
