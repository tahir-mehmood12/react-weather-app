import { useState } from "react";

import classes from "./AddCityForm.module.css";

export default function AddCityForm({ onAddCity }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onAddCity(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="text"
        placeholder="Enter city name"
        className={classes.input}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className={classes.button}>
        Add City
      </button>
    </form>
  );
}
