import PlantCard from "./PlantCard";
import "./PlantList.css";
import Plant from "../models/Plant";

interface Props {
  plants: Plant[];
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setEditIndex: (number: number) => void;
}

const PlantList = ({
  plants,
  deletePlantHandler,
  setShowNumber,
  setEditIndex,
}: Props) => {
  return (
    <>
      <ul className="PlantList">
        {plants.map((item, index) => (
          <PlantCard
            item={item}
            setEditIndex={() => setEditIndex(index)}
            setShowNumber={setShowNumber}
            deletePlantHandler={deletePlantHandler}
            key={item._id}
          />
        ))}
      </ul>
    </>
  );
};

export default PlantList;
