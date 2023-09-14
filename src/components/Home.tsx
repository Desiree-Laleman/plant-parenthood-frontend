import { useState } from "react";
import "./Home.css";
import PlantList from "./PlantList";
import SearchPlantForm from "./SearchPlantForm";
import SearchResultDetails from "./SearchResultDetails";
import SearchResultsList from "./SearchResultsList";
import Plant from "../models/Plant";

const Home = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [showNumber, setShowNumber] = useState(0);
  return (
    <div className="Home">
      <button onClick={() => setShowNumber(1)}>Add Plant</button>
      {showNumber === 1 && <SearchPlantForm setShowNumber={setShowNumber} />}
      {showNumber === 2 && <SearchResultsList setShowNumber={setShowNumber} />}
      {showNumber === 3 && (
        <SearchResultDetails setShowNumber={setShowNumber} />
      )}
      {plants.length ? <PlantList /> : <p>Add a plant</p>}
    </div>
  );
};

export default Home;
