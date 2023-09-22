import PerenualPlant from "../models/PerenualPlant";
import "./ClickedPlantDetails.css";

interface Props {
  setShowNumber: (number: number) => void;
  plant: PerenualPlant;
}

const ClickedPlantDetails = ({ setShowNumber, plant }: Props) => {
  console.log(plant);
  return (
    <div className="ClickedPlantDetails">
      <ul>
        <li>Plant Family: {plant.family}</li>
        <li>Common Name: {plant.common_name}</li>
        <li>Scientific Name: {plant.scientific_name}</li>
        <li>
          Other Name:{" "}
          {plant.other_name.length > 0 ? plant.other_name : "Not Available"}
        </li>
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
        <li>Maintenance: {plant.maintenance}</li>
        <li>Flowering: {plant.flowers ? "True" : "False"}</li>
        <li>
          {plant.flowering_season === null
            ? `Flowering Season: Not Announced`
            : `Flowering Season: ${plant.flowering_season}`}
        </li>
        <li>Growth Rate: {plant.growth_rate}</li>
        <li>Invasive: {plant.invasive ? "True" : "False"}</li>
      </ul>
      <button onClick={() => setShowNumber(0)}>Cancel</button>
    </div>
  );
};

export default ClickedPlantDetails;
