import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
  return (
    <div>
      <Button
        variant={`${selectedCity == '' ? 'outline-warning' : 'warning'}`}
        onClick={() => handleCityChange('current')}
      >
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          variant={`${selectedCity == item ? 'outline-warning' : 'warning'}`}
          key={index}
          onClick={() => handleCityChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
