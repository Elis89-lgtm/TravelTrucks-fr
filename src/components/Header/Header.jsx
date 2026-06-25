import React from "react";
import { NavLink, Link } from "react-router-dom";

import css from "./Header.module.css";
import logo from "../../images/icons/Logo.svg"; // імпортуємо SVG файл
const Header = () => {
  return (
    <>
      <header>
        <div className={css.header_container}>
          <Link to="/">
            <img src={logo} alt="Logo" className={css.logo} />
          </Link>
          <nav className={css.header_nav}>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : css.link)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : css.link)}
              to="/catalog"
            >
              Catalog
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
