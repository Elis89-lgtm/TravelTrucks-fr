import { useSelector } from "react-redux";
import { selectSelectedCampers } from "../../redux/campers/selectors.js";
import Details from "../Details/Details.jsx";

const CampersFeatures = () => {
  const camper = useSelector(selectSelectedCampers);
  return (
    <>
      <Details camper={camper} />
    </>
  );
};

export default CampersFeatures;
