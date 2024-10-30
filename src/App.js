import './App.css';
import { useState } from 'react';
import { fetchWeather } from './api';
import WeatherCard from './Components/WeatherCard';
import CurrentDateTime from './Components/CurrentDateTime';
import Footer from './Components/Footer'; // Import the footer component

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      setWeather(weather);
    } catch (error) {
      setError("City not found");
    }
  };

  return (
    <div className="App">
      <h1 className='app_heading'>Weather App</h1>
      <CurrentDateTime />
      <form onSubmit={handleSubmit} className='container'>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {error ? (
        <p className='error'>{error}</p>
      ) : (
        <WeatherCard weather={weather} />
      )}

      <Footer /> {/* Add the footer component */}
    </div>
  );
}

export default App;
