import Plant from "../models/Plant";
import "./PlantCard.css";

interface Props {
  plant: Plant;
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setEditIndex: () => void;
  editPlantHandler: (plant: Plant) => void;
  searchedPlantById: (perenualId: number) => void;
  calculateTimeRemaining: (plant: Plant) => number;
}

const PlantCard = ({
  plant,
  deletePlantHandler,
  setShowNumber,
  setEditIndex,
  editPlantHandler,
  searchedPlantById,
  calculateTimeRemaining,
}: Props) => {
  const handleClick = () => {
    setEditIndex();
    setShowNumber(0);
  };

  const waterButtonHandler = () => {
    const plantCopy = { ...plant };
    plantCopy.waterDate = new Date();
    editPlantHandler(plantCopy);
  };

  const seeDetails = async () => {
    await searchedPlantById(plant.perenualId);
    setShowNumber(4);
  };

  return (
    <li className="PlantCard">
      <img
        src={plant.pic}
        alt={plant.commonName}
        onClick={() => seeDetails()}
      />
      <p>{plant.nickName}</p>
      {calculateTimeRemaining(plant) < -1 ? (
        <button className="overdue" onClick={waterButtonHandler}>
          Overdue
        </button>
      ) : calculateTimeRemaining(plant) > -1 &&
        calculateTimeRemaining(plant) < 0 ? (
        <button className="waterMe" onClick={waterButtonHandler}>
          Water Me!
        </button>
      ) : (
        <button className="watered" onClick={waterButtonHandler}>
          Water in {Math.ceil(calculateTimeRemaining(plant))} days
        </button>
      )}
      <button id="edit-button" onClick={handleClick}>
        Edit
      </button>
      <button
        id="plant-delete"
        onClick={() => deletePlantHandler(plant.googleId, plant._id!)}
      >
        x
      </button>
    </li>
  );
};

export default PlantCard;
