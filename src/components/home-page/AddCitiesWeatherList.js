import classes from "./AddCitiesWeatherList.module.css";

export default function AddCitiesWeatherList({ citiesWeather, onRemoveCity }) {
  return (
    <>
      <h2 className={classes.heading}>Cities Weather</h2>
      <ul className={classes.weatherList}>
        {citiesWeather.map((city, index) => (
          <li key={index} className={classes.weatherItem}>
            <div className={classes.weatherInfo}>
              <img
                src={city.icon}
                alt={city.description}
                className={classes.weatherIcon}
              />
              <div>
                <p className={classes.cityName}>{city.name}</p>
                <p>{Math.round(city.temperature)}°C</p>
                <p className={classes.cityDescription}>{city.description}</p>
              </div>
            </div>
            <button
              onClick={() => onRemoveCity(index)}
              className={classes.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
