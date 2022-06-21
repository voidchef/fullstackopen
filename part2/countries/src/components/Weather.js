import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ lat, lon }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  if (weather) {
    return (
      <div>
        <p>temperature {weather.main.temp} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0].description}
        ></img>
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
  }
};

export default Weather;
