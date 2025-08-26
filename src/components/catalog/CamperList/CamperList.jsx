import styles from "./CamperList.module.css";
import { useSelector } from "react-redux";
import { selectCampers } from "../../../redux/campers/selectors";

import CampersItem from "../../CamperCard/CampersItem";
import { Link } from "react-router-dom";

export default function CamperList() {
  const campersItems = useSelector(selectCampers);

  if (!campersItems || campersItems.length === 0) {
    return (
      <div className={styles.notFoundWrapper}>
        <h2 className={styles.notFoundTitle}>No campers available</h2>
        <Link to="/" className={styles.goBackLink}>
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ul className={styles.list}>
        {campersItems.map((campers) => (
          <li key={campers._id}>
            <CampersItem campers={campers} id={campers._id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
