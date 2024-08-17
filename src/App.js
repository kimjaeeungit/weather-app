import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨 상태 들어간다.
// 3. 5개의 버튼이 있다.(1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼 누를떄다마 도시별 날씨가 보인다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ['paris', 'dublin', 'seoul', 'oxford'];
  // 배열에 값을 안주면 렌더 후에 바로 실행
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('현재위치:', lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=861351e4b65eb1adfebe021f96f31ff3&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data:', data);
    setWeather(data);
  };

  //시티별로 데이터 가져오기
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=861351e4b65eb1adfebe021f96f31ff3&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    console.log('Data', data);
  };

  useEffect(() => {
    if (city == '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
