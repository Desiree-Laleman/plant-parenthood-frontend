import { useState } from "react";
import Plant from "../models/Plant";
import "./PlantCard.css";

interface Props {
  plant: Plant;
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setEditIndex: () => void;
  editPlantHandler: (plant: Plant) => void;
}

// const [waterButtonClick, setWaterButtonClick] = useState("")

const PlantCard = ({
  plant,
  deletePlantHandler,
  setShowNumber,
  setEditIndex,
  editPlantHandler,
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

  const waterButtonHandler = () => {
    const plantCopy = { ...plant };
    plantCopy.waterDate = new Date();
    editPlantHandler(plantCopy);
  };

  return (
    <li className="PlantCard">
      <img src={plant.pic} alt={plant.commonName} />
      <p>{plant.nickName}</p>
      {timeRemaining < -1 ? (
        <button onClick={waterButtonHandler}>Overdue</button>
      ) : timeRemaining > -1 && timeRemaining < 0 ? (
        <button onClick={waterButtonHandler}>Water Me!</button>
      ) : (
        <button onClick={waterButtonHandler}>
          Water in {Math.ceil(timeRemaining)} days
        </button>
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
