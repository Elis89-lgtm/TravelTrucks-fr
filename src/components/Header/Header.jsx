import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import HeaderLogo from "../../public/icons/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={HeaderLogo} alt="Logo" />
            </Link>
          </div>

          <nav className={styles.navDesktop}>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" onClick={() => setIsOpen(false)}>
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className={styles.view}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          ></button>
        </div>
      </header>
    </>
  );
}
