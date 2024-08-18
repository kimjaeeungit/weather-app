import React from 'react';

const WeatherBox = ({ weather }) => {
  console.log('weather:', weather);
  console.log('humidity:', weather.main.humidity);

  const iconCode = weather.weather[0].icon;
  const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
  const today = new Date();
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = week[today.getDay()];
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const time = `(${dayOfWeek}) ${hours}:${minutes}`;

  console.log('today', time);
  return (
    <div className="weather-box">
      <div className="weather-name">{weather?.name}</div>
      <div className="info-box">
        <div className="tem-cfb">
          <div className="item-img">
            <img src={iconUrl} />
          </div>
          <div className="tem-cf">
            {Math.floor(weather?.main.temp)}
            {/* {Math.floor(weather?.main.temp * 1.8 + 32)} */}
          </div>
          <div className="tem-btn">
            <button className="tem-button">°C</button>
            <span>|</span>
            <button className="tem-button">°F</button>
          </div>
        </div>
        <div className="wth-tw">
          <div className="wth-font">weather</div>
          <div className="time-font">{time}</div>
          <div className="des-font">{weather?.weather[0].description}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
