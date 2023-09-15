import { useState } from "react";
import PlantCard from "./PlantCard";
import "./PlantList.css";
import Plant from "../models/Plant";

const PlantList = () => {
  const [userPlants, setUserPlants] = useState<Plant[]>([]);

  return (
    <div className="PlantList">
      {userPlants.map((item) => (
        <PlantCard item={item} />
      ))}
    </div>
  );
};

export default PlantList;
