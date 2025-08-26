import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import FooterLogo from "../../public/icons/footer-logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={FooterLogo} alt="TreavelTrucks logo" />
          </Link>
        </div>

        <div className={styles.copy}>© 2025 TreavelTrucks.</div>

        <div className={styles.links}>
          <Link to="/campers" className={styles.link}>
            Articles
          </Link>
        </div>
      </div>
    </footer>
  );
}
