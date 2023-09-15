import { useContext, useEffect, useState } from "react";
import "./Home.css";
import PlantList from "./PlantList";
import SearchPlantForm from "./SearchPlantForm";
import SearchResultDetails from "./SearchResultDetails";
import SearchResultsList from "./SearchResultsList";
import Plant from "../models/Plant";
import { getPlantByID, getPlantsBySearch } from "../services/perenualService";
import PerenualPlant from "../models/PerenualPlant";
import { addPlant, getUserPlants } from "../services/userServices";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchResults, setSearchResults] = useState<PerenualPlant[]>([]);
  const [showNumber, setShowNumber] = useState(0);
  const [searchedPlant, setSearchedPlant] = useState<PerenualPlant | null>(
    null
  );

  const searchPlants = async (query: string): Promise<void> => {
    setSearchResults((await getPlantsBySearch(query)).data);
  };

  const loadUserPlants = async (): Promise<void> => {
    if (user) {
      setPlants(await getUserPlants(user.uid));
    }
  };

  const searchedPlantById = async (id: number): Promise<void> => {
    setSearchedPlant(await getPlantByID(id));
  };

  const addPlantHandler = async (plant: Plant): Promise<void> => {
    await addPlant(plant);
    loadUserPlants();
  };

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
          searchedPlantById={searchedPlantById}
        />
      )}
      {showNumber === 3 && searchedPlant && (
        <SearchResultDetails
          setShowNumber={setShowNumber}
          searchedPlant={searchedPlant}
          addPlantHandler={addPlantHandler}
        />
      )}
      {plants.length ? <PlantList /> : <p>Add a plant</p>}
    </div>
  );
};

export default Home;
