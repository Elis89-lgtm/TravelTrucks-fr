import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { selectSavedCampers } from "../../../redux/user/userSelectors";
import { toggleFavorite } from "../../../redux/campers/slice";
import styles from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  // camper — об'єкт однієї карточки з бекенду
  const dispatch = useDispatch();

  // список збережених id із Redux
  const savedIds = useSelector(selectSavedCampers);

  // у мокапі може бути id або _id — підхоплюємо обидва
  const id = camper?.id ?? camper?._id;

  // мемоізований прапорець: чи збережено цей camper
  const isSaved = useMemo(() => savedIds?.includes(id), [savedIds, id]);

  const [isLoading, setIsLoading] = useState(false);

  const handleToggleFavorite = async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      // локальна дія (без бекенду): додаємо/видаляємо id у Redux
      dispatch(toggleFavorite(id));
      toast.success(
        isSaved ? "Removed from bookmarks!" : "Added to bookmarks!"
      );
    } catch (err) {
      console.error(err);
      toast.error("Bookmark action failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className={styles.card}>
      {/* Зображення/контент підставиш за своїм макетом */}
      <div className={styles.header}>
        <h4 className={styles.title}>
          {camper?.name || camper?.title || "Camper"}
        </h4>
        <p className={styles.price}>
          €{Number(camper?.price ?? camper?.price_per_day ?? 0).toFixed(2)}
        </p>

        <button
          type="button"
          className={`${styles.favBtn} ${isSaved ? styles.active : ""}`}
          onClick={handleToggleFavorite}
          disabled={isLoading}
          aria-pressed={isSaved}
          aria-label={isSaved ? "Remove from favorites" : "Add to favorites"}
          title={isSaved ? "Saved" : "Add to favorites"}
        >
          {/* Іконка серця */}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 9.854 10.659 7.17c-.333-.665-.91-1.62-1.728-2.393C8.127 4.018 7.164 3.5 6 3.5 3.486 3.5 1.5 5.489 1.5 7.88c0 1.816.831 3.099 2.802 5.055.506.501 1.082 1.043 1.719 1.64C7.683 16.135 9.75 18.076 12 20.671c2.25-2.595 4.317-4.536 5.979-5.996.638-.597 1.215-1.139 1.719-1.64 1.971-1.956 2.802-3.239 2.802-5.055C22.5 5.489 20.514 3.5 18 3.5c-1.165 0-2.127.518-2.931 1.278-.817.773-1.395 1.728-1.728 2.393L12 9.854Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Теги/фічі — під себе */}
      <div className={styles.tags}>
        {/* приклади: Automatic, Petrol, Kitchen, AC */}
      </div>

      <div className={styles.bottomNavi}>
        <Link
          to={`/catalog/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnShowMore}
          aria-label={`Learn more about the camper titled: ${
            camper?.name || camper?.title || "camper"
          }`}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}
