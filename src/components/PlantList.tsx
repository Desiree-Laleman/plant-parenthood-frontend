import PlantCard from "./PlantCard";
import "./PlantList.css";
import Plant from "../models/Plant";

interface Props {
  plants: Plant[];
  deletePlantHandler: (googleId: string, _id: string) => void;
  setShowNumber: (number: number) => void;
  setNickName: (string: string) => void;
}

const PlantList = ({
  plants,
  deletePlantHandler,
  setShowNumber,
  setNickName,
}: Props) => {
  return (
    <>
      <ul className="PlantList">
        {plants.map((item) => (
          <PlantCard
            item={item}
            setNickName={setNickName}
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
