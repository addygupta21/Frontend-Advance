import { useState, useEffect } from "react";
const WeatherApp = () => {
  const [weatherData, setWeather] = useState(null);

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid={API key}`).then(response => response.json).then(data => setWeather(data)).catch(err => console.log(err));
    })
    }
  }, []);
  return (
    <div>
      <h1>Weather App</h1>
      {weatherData ? 
      (
      <>
      <div> 
        <p>weather data present </p>
        <p> weather info: {weatherData.main.temp}</p>
      </div>
      </>
      )
    :
    (<h1> nothing present</h1>)}
    </div>
  );
};

export default WeatherApp;