import React from 'react';

const ForecastBox = ({ forecast }) => {
  console.log('forecastbox', forecast);

  return (
    <div className="forecast-box">
      <div className="forecast-list-wrap">
        {forecast?.list.map((item, index) => (
          <div className="forecast-list" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastBox;
