import './App.css';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';
import ResponsiveGauge from './components/smallerComponents/ResponsiveGauge';
import Transport from './components/transporte/Transport';

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,relativehumidity_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo')
      .then(respo => respo.json()
      ).then(data => {
        setWeatherData(data);
        setLoading(false);
      }).catch(ex => {
        console.error(ex);
      })
  }, [])

  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {!loading && <Weather weatherdata={weatherData} />}
    
      <div className="Map">
      </div>
    </div>
  );
}

export default App;
