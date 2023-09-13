import PlantCard from "./PlantCard";
import "./PlantList.css";

const PlantList = () => {
  return (
    <div className="PlantList">
      {/* To make the array, we'll need to use an array method of .MAP to fill out the container */}
      <PlantCard />
    </div>
  );
};

export default PlantList;
