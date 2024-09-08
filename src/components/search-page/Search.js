import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geo_API_url, options } from "../../api";

import classes from "./Search.module.css";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${geo_API_url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        options
      );
      const result = await response.json();
      console.log(result);

      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
      return { options: [] };
    }
  };

  function handleSearchChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
      placeholder="Search City Weather..."
      debounceTimeout={600}
      value={search}
      onChange={handleSearchChange}
      loadOptions={loadOptions}
      className={classes.search}
    />
  );
}
