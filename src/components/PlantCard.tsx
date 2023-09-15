import Plant from "../models/Plant";
import "./PlantCard.css";

interface Props {
  item: Plant;
}

const PlantCard = ({ item }: Props) => {
  return (
    <div className="PlantCard">
      <button>nickname needs water!</button>
    </div>
  );
};

export default PlantCard;
