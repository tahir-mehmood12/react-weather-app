import { Weather_API_Key, Weather_API_Url } from "../api";

export const fetchCityWeather = async (cityName) => {
  try {
    const response = await fetch(
      `${Weather_API_Url}/weather?q=${cityName}&units=metric&appid=${Weather_API_Key}`
    );

    if (!response.ok) {
      throw new Error("City not found or invalid!");
    }

    const weatherData = await response.json();

    return {
      name: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
    };
  } catch (err) {
    console.error(`Error fetching weather data for ${cityName}:`, err);
    return null;
  }
};
