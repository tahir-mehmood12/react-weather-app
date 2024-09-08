import classes from "./current-weather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={classes.weather}>
      <div className={classes.top}>
        <div>
          <p className={classes.city}>{data.city}</p>
          <p className={classes.weatherDescription}>
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className={classes.weatherIcon}
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
      <div className={classes.bottom}>
        <p className={classes.temperature}>{Math.round(data.main.temp)}°C</p>
        <div className={classes.details}>
          <div className={classes.parameterRow}>
            <span className={classes.parameterLabel}>Details</span>
          </div>
          <div className={classes.parameterRow}>
            <span className={classes.parameterLabel}>Feels like</span>
            <span className={classes.parameterValue}>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className={classes.parameterRow}>
            <span className={classes.parameterLabel}>Wind</span>
            <span className={classes.parameterValue}>
              {data.wind.speed} m/s
            </span>
          </div>
          <div className={classes.parameterRow}>
            <span className={classes.parameterLabel}>Humidity</span>
            <span className={classes.parameterValue}>
              {data.main.humidity}%
            </span>
          </div>
          <div className={classes.parameterRow}>
            <span className={classes.parameterLabel}>Pressure</span>
            <span className={classes.parameterValue}>
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
