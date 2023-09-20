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
  return (
    <>
      <ul className="PlantList">
        {plants.map((item, index) => (
          <PlantCard
            plant={item}
            setEditIndex={() => setEditIndex(index)}
            setShowNumber={setShowNumber}
            deletePlantHandler={deletePlantHandler}
            editPlantHandler={editPlantHandler}
            key={item._id}
            searchedPlantById={searchedPlantById}
          />
        ))}
      </ul>
    </>
  );
};

export default PlantList;
