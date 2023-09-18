import PlantCard from "./PlantCard";
import "./PlantList.css";
import Plant from "../models/Plant";

interface Props {
  plants: Plant[];
  deletePlantHandler: (googleId: string, _id: string) => void;
}

const PlantList = ({ plants, deletePlantHandler }: Props) => {
  return (
    <>
      <ul className="PlantList">
        {plants.map((item) => (
          <PlantCard
            item={item}
            deletePlantHandler={deletePlantHandler}
            key={item._id}
          />
        ))}
      </ul>
    </>
  );
};

export default PlantList;
