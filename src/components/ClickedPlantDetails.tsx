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
        <li>Plant Common Name: {plant.common_name}</li>
        <li>Plant Scientific Name: {plant.scientific_name}</li>
        <li>
          Plant Other Name:{" "}
          {plant.other_name.length > 0 ? plant.other_name : "Not Available"}
        </li>
        <li>Plant Cycle: {plant.cycle}</li>
        <li>
          Plant Watering Recommendation:{" "}
          {plant.watering === "Frequent"
            ? "7 Days"
            : plant.watering === "Average"
            ? "14 Days"
            : plant.watering === "Minimum"
            ? "21 Days"
            : "28 Days"}
        </li>
        <li>Plant Sunlight: {plant.sunlight}</li>
      </ul>
      <button onClick={() => setShowNumber(0)}>Cancel</button>
    </div>
  );
};

export default ClickedPlantDetails;
