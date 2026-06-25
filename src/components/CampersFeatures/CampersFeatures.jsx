import { useSelector } from "react-redux";
import { selectSelectedCampers } from "../../redux/campers/selectors.js";
import Details from "../details/Details.jsx";

const CampersFeatures = () => {
  const camper = useSelector(selectSelectedCampers);
  return (
    <>
      <Details camper={camper} />
    </>
  );
};

export default CampersFeatures;
