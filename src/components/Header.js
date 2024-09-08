import { NavLink } from "react-router-dom";

import classes from "./header.module.css";

export default function Header() {
  return (
    <>
      <nav className={classes.navbar}>
        <NavLink to="/" className={classes.logo}>
          Weather App
        </NavLink>

        <div className={classes.navLink}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/search-city"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
          >
            Search City Weather
          </NavLink>
        </div>
      </nav>
    </>
  );
}
