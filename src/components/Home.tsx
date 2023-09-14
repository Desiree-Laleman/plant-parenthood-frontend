import { useEffect, useState } from "react";
import "./Home.css";
import PlantList from "./PlantList";
import SearchPlantForm from "./SearchPlantForm";
import SearchResultDetails from "./SearchResultDetails";
import SearchResultsList from "./SearchResultsList";
import Plant from "../models/Plant";
import { getPlantsBySearch } from "../services/perenualService";
import PerenualPlant from "../models/PerenualPlant";

const Home = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchResults, setSearchResults] = useState<PerenualPlant[]>([]);
  const [showNumber, setShowNumber] = useState(0);
  const [chosenPlant, setChosenPlant] = useState<Plant | null>(null);

  const searchPlants = async (query: string): Promise<void> => {
    console.log((await getPlantsBySearch(query)).data);
    setSearchResults((await getPlantsBySearch(query)).data);
  };
  useEffect(() => {
    console.log(chosenPlant);
  }, [chosenPlant]);

  return (
    <div className="Home">
      <button onClick={() => setShowNumber(1)}>Add Plant</button>
      {showNumber === 1 && (
        <SearchPlantForm
          setShowNumber={setShowNumber}
          searchPlants={searchPlants}
        />
      )}
      {showNumber === 2 && (
        <SearchResultsList
          setShowNumber={setShowNumber}
          searchResults={searchResults}
          setChosenPlant={setChosenPlant}
        />
      )}
      {showNumber === 3 && (
        <SearchResultDetails setShowNumber={setShowNumber} />
      )}
      {plants.length ? <PlantList /> : <p>Add a plant</p>}
    </div>
  );
};

export default Home;
