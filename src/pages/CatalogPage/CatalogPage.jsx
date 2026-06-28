// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Select from "react-select";

// import styles from "./CatalogPage.module.css";

// import Filters from "../../components/Filters/Filters.jsx";
// import CampersList from "../../components/CampersList/CampersList";
// import { Loader } from "../../components/Loader/Loader";

// import { fetchCampers } from "../../redux/campers/operations";
// import {
//   selectCampers,
//   selectErrorCampers,
//   selectLoadingCampers,
//   selectTotalCampers,
// } from "../../redux/campers/selectors";

// export default function CatalogPage() {
//   const dispatch = useDispatch();

//   const isLoading = useSelector(selectLoadingCampers);
//   const isError = useSelector(selectErrorCampers);
//   const campers = useSelector(selectCampers);
//   const totalCampers = useSelector(selectTotalCampers);

//   // сортування/фільтр "popular" | "all"
//   const [selectedOption, setSelectedOption] = useState({
//     value: "popular",
//     label: "Popular",
//   });

//   const [page, setPage] = useState(1);

//   const PAGE_SIZE = 4;
//   const totalPages = Math.ceil((totalCampers || 0) / PAGE_SIZE);

//   const options = [
//     { value: "all", label: "All" },
//     { value: "popular", label: "Popular" },
//   ];

//   const customStyles = {
//     control: (base, state) => ({
//       ...base,
//       width: 240,
//       minHeight: 40,
//       fontSize: 16,
//       borderRadius: 8,
//       border: "1px solid #DADDE1",
//       boxSizing: "border-box",
//       boxShadow: state.isFocused ? "0 0 2px #595d62" : "none",
//       cursor: "pointer",
//       "&:hover": { boxShadow: "0 0 2px #595d62" },
//     }),
//     option: (base, { isFocused, isSelected }) => ({
//       ...base,
//       backgroundColor: isSelected ? "#eee" : isFocused ? "#f6f7f8" : "#fff",
//       color: "#333",
//       cursor: "pointer",
//     }),
//     singleValue: (base) => ({
//       ...base,
//       color: "#333",
//     }),
//   };

//   // при зміні типу сортування — повертаємося на першу сторінку
//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//     setPage(1);
//   }, [selectedOption]);

//   // завантаження списку
//   useEffect(() => {
//     dispatch(
//       fetchCampers({ filter: selectedOption.value, page, limit: PAGE_SIZE }),
//     );
//   }, [dispatch, selectedOption, page]);

//   return (
//     <section className={styles.section}>
//       <h1 className={styles.title}>Campers</h1>

//       <div className={styles.layout}>
//         {/* Ліва колонка з фільтрами */}
//         <aside className={styles.sidebar}>
//           <Filters />
//         </aside>

//         {/* Права колонка зі списком */}
//         <div className={styles.content}>
//           {totalCampers > 0 && campers && (
//             <div className={styles.infoPanel}>
//               <p className={styles.itemsTotal}>
//                 {totalCampers} {totalCampers === 1 ? "camper" : "campers"}
//               </p>

//               <Select
//                 value={selectedOption}
//                 onChange={setSelectedOption}
//                 options={options}
//                 styles={customStyles}
//                 isSearchable={false}
//               />
//             </div>
//           )}

//           {isLoading && <Loader />}

//           {isError && (
//             <div className={styles.notFoundWrapper}>
//               <h2 className={styles.notFoundTitle}>No campers available</h2>
//               <Link to="/" className={styles.goBackLink}>
//                 Go back to home
//               </Link>
//             </div>
//           )}

//           <CampersList />

//           {totalPages > 1 && (
//             <Pagination
//               currentPage={page}
//               totalPages={totalPages}
//               onPageChange={(newPage) => setPage(newPage)}
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { clearCampers, resetPage } from "../../redux/campers/slice.js";
import {
  fetchCampers,
  fetchLocations,
} from "../../redux/campers/operations.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect;
  (() => {
    dispatch(resetPage());
    dispatch(clearCampers());
    dispatch(fetchCampers());
    dispatch(fetchLocations());
  },
    [dispatch]);
  return (
    <div className={css.catalog_container}>
      <Filters />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
