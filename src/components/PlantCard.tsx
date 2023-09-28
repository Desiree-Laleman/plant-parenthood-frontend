import Plant from "../models/Plant";
import "./PlantCard.css";
import { FormEvent, useState } from "react";
import "react-calendar/dist/Calendar.css";

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
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const handleClick = () => {
    setEditIndex();
    setShowNumber(0);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const plantCopy = { ...plant };
    plantCopy.waterDate = new Date(date);
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
      <div>
        {calculateTimeRemaining(plant) < -1 ? (
          <p className="overdue">
            Overdue <i className="fa-solid fa-triangle-exclamation"></i>
          </p>
        ) : calculateTimeRemaining(plant) > -1 &&
          calculateTimeRemaining(plant) < 0 ? (
          <p className="waterMe">I Need Water!</p>
        ) : (
          <p className="watered">
            Water in {Math.ceil(calculateTimeRemaining(plant))} days
          </p>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="date">When did you water last?</label>
          <div id="date-input">
            <input
              type="date"
              value={date}
              id="date"
              name="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <button>
              <i className="fa-solid fa-check"></i>
            </button>
          </div>
        </form>
      </div>
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
