import { useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/campers/selectors.js";
import Details from "../details/Details.jsx";

const CampersFeatures = () => {
  const camper = useSelector(selectCurrentCamper);
  return (
    <>
      <Details camper={camper} />
    </>
  );
};

export default CampersFeatures;
