import axios from "axios";

export async function fetchWeather(city, setError) {
  const apiKey = "b8108492d8bf5039e9a9b93d13037aa8"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    setError("");
    return response.data;
  } catch (error) {
    setError("City Not Found!");
    return error;
  }
}
