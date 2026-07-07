import CampersDetails from "../../components/CampersDetails/CampersDetails.jsx";
import { fetchCampersById } from "../../redux/campers/operations.js";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";

const CampersDetailsPage = () => {
  const { id } = useParams(); // Отримуємо id з URL
  const dispatch = useDispatch();

  const { isLoadingCampers, isErrorCampers, selectedCampers } = useSelector(
    (state) => state.campers,
  ); // Дістаємо стан з Redux

  useEffect(() => {
    if (id) {
      dispatch(fetchCampersById(id)); // Викликаємо операцію для отримання даних
    }
  }, [dispatch, id]);

  return (
    <>
      {isLoadingCampers && <p>Loader</p>}
      {isErrorCampers && <p>Error</p>}
      {selectedCampers && <CampersDetails />}
    </>
  );
};

export default CampersDetailsPage;
