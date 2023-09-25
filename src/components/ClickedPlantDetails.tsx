import PerenualPlant from "../models/PerenualPlant";
import "./ClickedPlantDetails.css";
import plantDefaultImage from "../assets/plant-default-image.png";

interface Props {
  setShowNumber: (number: number) => void;
  plant: PerenualPlant;
}

const ClickedPlantDetails = ({ setShowNumber, plant }: Props) => {
  console.log(plant);
  return (
    <div className="ClickedPlantDetails pop-up-container">
      <div className="pop-up">
        <h2>{plant.common_name}</h2>
        <div id="details-container">
          <ul>
            <li>Scientific Name: {plant.scientific_name}</li>
            <li>
              Other Name:{" "}
              {plant.other_name.length > 0 ? plant.other_name : "N/A"}
            </li>
            <li>Plant Family: {plant.family ? plant.family : "N/A"}</li>
            <li>
              Watering Recommendation:{" "}
              {plant.watering === "Frequent"
                ? "7 Days"
                : plant.watering === "Average"
                ? "14 Days"
                : plant.watering === "Minimum"
                ? "21 Days"
                : "28 Days"}
            </li>
            <li>Sunlight Recommendation: {plant.sunlight}</li>
            <li>Plant Cycle: {plant.cycle}</li>
            <li>
              Maintenance: {plant.maintenance ? plant.maintenance : "N/A"}
            </li>
            <li>Flowering: {plant.flowers ? "True" : "False"}</li>
            <li>
              {plant.flowering_season === null
                ? `Flowering Season: N/A`
                : `Flowering Season: ${plant.flowering_season}`}
            </li>
            <li>Growth Rate: {plant.growth_rate}</li>
            <li>Invasive: {plant.invasive ? "True" : "False"}</li>
          </ul>
          <img
            src={
              plant.default_image?.thumbnail
                ? plant.default_image?.thumbnail
                : plantDefaultImage
            }
            alt={plant.common_name}
          />
        </div>
        <button onClick={() => setShowNumber(0)}>x</button>
      </div>
    </div>
  );
};

export default ClickedPlantDetails;
