import React, { useState } from 'react';
import axios from 'axios';

const Appweather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();


    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=49deef29c3cd4078b8aebca99efa9224`);
            setWeather(response);
        } catch (error) {
            console.log('Error fetching data', error);
        }
    };

    const handleClick = () => {
        fetchWeather();
    };

    return (
        <div className='weather-container'>
            <input className='weather-container' type="text" placeholder='Enter city name' value={city} onChange={handleCityChange} />
            <button className='weather-container' onClick={handleClick}>Get Weather</button>
            {weather && (<>
              <div className='weather-info'>
              <h2>{weather.data.name}</h2>
              <p className='weather-details'>Temperaure is {weather.data.main.temp}</p>
              <p className='weather-details'>{weather.data.weather[0].description}</p>
              
              </div>
              </>)}
        </div>
    );
}

export default Appweather;
