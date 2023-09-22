import PlantCard from "./PlantCard";
import "./PlantList.css";
import Plant from "../models/Plant";

interface Props {
  plants: Plant[];
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setEditIndex: (number: number) => void;
  editPlantHandler: (plant: Plant) => void;
  searchedPlantById: (perenualId: number) => void;
}

const PlantList = ({
  plants,
  deletePlantHandler,
  setShowNumber,
  setEditIndex,
  editPlantHandler,
  searchedPlantById,
}: Props) => {
  const calculateTimeRemaining = (plant: Plant) => {
    const differenceInTime =
      new Date().getTime() - new Date(plant.waterDate).getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return plant.watering - differenceInDays;
  };

  const sortedPlants = plants.sort(
    (a, b) => calculateTimeRemaining(a) - calculateTimeRemaining(b)
  );

  return (
    <>
      <ul className="PlantList">
        {sortedPlants.map((item, index) => (
          <PlantCard
            plant={item}
            setEditIndex={() => setEditIndex(index)}
            setShowNumber={setShowNumber}
            deletePlantHandler={deletePlantHandler}
            editPlantHandler={editPlantHandler}
            key={item._id}
            searchedPlantById={searchedPlantById}
            calculateTimeRemaining={calculateTimeRemaining}
          />
        ))}
      </ul>
    </>
  );
};

export default PlantList;
