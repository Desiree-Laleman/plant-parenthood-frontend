import Plant from "../models/Plant";
import "./PlantCard.css";

interface Props {
  plant: Plant;
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setEditIndex: () => void;
  editPlantHandler: (plant: Plant) => void;
  searchedPlantById: (perenualId: number) => void;
}

const PlantCard = ({
  plant,
  deletePlantHandler,
  setShowNumber,
  setEditIndex,
  editPlantHandler,
  searchedPlantById,
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
      {timeRemaining < -1 ? (
        <button className="overdue" onClick={waterButtonHandler}>
          Overdue
        </button>
      ) : timeRemaining > -1 && timeRemaining < 0 ? (
        <button className="waterMe" onClick={waterButtonHandler}>
          Water Me!
        </button>
      ) : (
        <button className="watered" onClick={waterButtonHandler}>
          Water in {Math.ceil(timeRemaining)} days
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
