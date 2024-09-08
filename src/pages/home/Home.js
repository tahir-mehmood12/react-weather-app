import { useEffect, useState } from "react";
import AddCityForm from "../../components/home-page/AddCityForm";
import AddCitiesWeatherList from "../../components/home-page/AddCitiesWeatherList";
import { fetchCityWeather } from "../../utility/DataFetching";

import classes from "./home.module.css";

export default function HomePage() {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const predefinedCities = [
    "Karachi",
    "Peshawar",
    "Tokyo",
    "Paris",
    "Multan",
    "Berlin",
    "Toronto",
    "Mumbai",
    "Moscow",
    "Kohat",
  ];

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      setLoading(true);
      const weatherDataPromises = predefinedCities.map((city) =>
        fetchCityWeather(city)
      );

      const results = await Promise.all(weatherDataPromises);
      const validWeatherData = results.filter((data) => data !== null);
      setCitiesWeather(validWeatherData);
      setLoading(false);
    };

    fetchCitiesWeather();
  }, []);

  // console.log(citiesWeather);

  const handleAddCity = async (cityName) => {
    const weatherData = await fetchCityWeather(cityName);
    if (weatherData) {
      setCitiesWeather([weatherData, ...citiesWeather]);
      setError("");
    } else {
      setError("City not found or invalid!");
    }
  };

  const handleRemoveCity = (index) => {
    setCitiesWeather(citiesWeather.filter((_, i) => i !== index));
  };

  return (
    <main className={classes.main}>
      <h1>Weather App</h1>
      <AddCityForm onAddCity={handleAddCity} />

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <AddCitiesWeatherList
          citiesWeather={citiesWeather}
          onRemoveCity={handleRemoveCity}
        />
      )}
    </main>
  );
}
