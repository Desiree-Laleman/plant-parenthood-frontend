import Plant from "../models/Plant";
import "./PlantCard.css";

interface Props {
  plant: Plant;
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setEditIndex: () => void;
}

const PlantCard = ({
  plant,
  deletePlantHandler,
  setShowNumber,
  setEditIndex,
}: Props) => {
  const handleClick = () => {
    setEditIndex();
    setShowNumber(0);
  };

  const differenceInTime =
    new Date().getTime() - new Date(plant.waterDate).getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const timeRemaining = plant.watering - differenceInDays;
  console.log(timeRemaining, differenceInDays);

  return (
    <li className="PlantCard">
      <img src={plant.pic} alt={plant.commonName} />
      <p>{plant.nickName}</p>
      {timeRemaining < 0 ? (
        <p>Overdue</p>
      ) : timeRemaining === 0 ? (
        <p>Due</p>
      ) : (
        <p>Okay!</p>
      )}
      <button onClick={handleClick}>Edit</button>
      <button
        id="plant-delete"
        onClick={() => deletePlantHandler(plant.googleId, plant._id!)}
      >
        Delete
      </button>
    </li>
  );
};

export default PlantCard;
