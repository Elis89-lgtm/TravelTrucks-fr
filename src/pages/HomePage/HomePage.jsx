import React from "react";
import s from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

const HomePage = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s.title}>
          <h1 className={s.title_main_text}>Campers of your dreams</h1>
          <h2 className={s.title_text}>
            You can find everything you want in our catalog
          </h2>
          <Link to="/catalog">
            <Button text="View Now" className={s.title_button} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
