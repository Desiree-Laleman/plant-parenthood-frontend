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
      <button onClick={() => setShowNumber(0)}>cancel</button>
    </div>
  );
};

export default ClickedPlantDetails;
