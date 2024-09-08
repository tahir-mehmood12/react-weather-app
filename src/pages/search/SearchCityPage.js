import { useState } from "react";
import Search from "../../components/search-page/Search";
import { Weather_API_Key, Weather_API_Url } from "../../api";
import CurrentWeather from "../../components/search-page/current-weather";

import classes from "./SearchCityPage.module.css";

export default function SearchCityPage() {
  const [currentWeather, setCurrentWeather] = useState(null);

  async function handleOnSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(" ");

    try {
      const response = await fetch(
        `${Weather_API_Url}/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_Key}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const weatherResponse = await response.json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  console.log(currentWeather);

  return (
    <main className={classes.main}>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </main>
  );
}
