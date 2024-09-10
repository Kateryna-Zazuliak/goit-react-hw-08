import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.linkActive)
          }
          to="/contacts"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
