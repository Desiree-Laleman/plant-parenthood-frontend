import Plant from "../models/Plant";
import "./PlantCard.css";

interface Props {
  item: Plant;
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setEditIndex: () => void;
}

const PlantCard = ({
  item,
  deletePlantHandler,
  setShowNumber,
  setEditIndex,
}: Props) => {
  const handleClick = () => {
    setEditIndex();
    setShowNumber(0);
  };
  return (
    <li className="PlantCard">
      <img src={item.pic} alt={item.commonName} />
      <button id="plant-water">{item.nickName} needs water!</button>
      <button onClick={handleClick}>Edit</button>
      <button
        id="plant-delete"
        onClick={() => deletePlantHandler(item.googleId, item._id!)}
      >
        Delete
      </button>
    </li>
  );
};

export default PlantCard;
